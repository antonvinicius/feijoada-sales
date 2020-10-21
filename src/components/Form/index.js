import React, { useState, useEffect } from 'react'
import { Title } from '../TitleElement'
import { Button } from '../ButtonElement'
import MaskedInput from 'react-text-mask'
import Loader from 'react-spinners/FadeLoader'

import {
    FormContainer,
    FormWrap,
    Message,
    FormLabel,
    FormInput
} from './FormElements'

const credentials = require('../../credentials.json')
const { GoogleSpreadsheet } = require('google-spreadsheet');
const authEmail = process.env.REACT_APP_AUTH_EMAIL
const sheetId = process.env.REACT_APP_SHEET_ID
const keyDev = process.env.REACT_APP_KEY
const keyProd = process.env.REACT_APP_KEY_PROD
const urlPagSeguro = process.env.NODE_ENV === 'development' ? `https://ws.sandbox.pagseguro.uol.com.br/v2/checkout?email=${authEmail}&token=${keyDev}` : `https://ws.pagseguro.uol.com.br/v2/checkout?email=${authEmail}&token=${keyProd}` 

export default function Form() {
    const intialValues = { email: "", name: "", phone: "" }
    const MAX_QUANTITY = 25
    const [quantity, setQuantity] = useState(1)
    const [formValues, setFormValues] = useState(intialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const validate = (values) => {
        let errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        if (!values.email) {
            errors.email = "Não pode estar em branco"
        } else if (!regex.test(values.email)) {
            errors.email = "Email inválido"
        }
        if (!values.name)
            errors.name = "Não pode estar em branco"
        else if (values.name.split(' ').length === 1 || values.name.split(' ')[1].length === 0){
            errors.name = "Informe nome e sobrenome"
        }
        if (!values.phone) {
            errors.phone = 'Não pode estar em branco'
        } else if (values.phone.length < 16) {
            errors.phone = 'Celular não é válido'
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmitting(true);
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            submitForm();
        }
    }, [formErrors]); // eslint-disable-line react-hooks/exhaustive-deps

    const submitForm = async () => {
        setLoading(true)
        const date = new Date()
        const file = new GoogleSpreadsheet(sheetId);
        await file.useServiceAccountAuth({
            client_email: credentials.client_email,
            private_key: credentials.private_key,
        });
        await file.loadInfo();
        const sheet = file.sheetsByIndex[0];
        await sheet.addRow({
            Nome: `${formValues.name}`,
            Email: `${formValues.email}`,
            Telefone: `${formValues.phone}`,
            Data: date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' Hora: ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
        });

        const objForm = {
            currency: 'BRL',
            itemId1: '1',
            itemDescription1: 'Feijoada',
            itemAmount1: '30.00',
            itemQuantity1: quantity,
            itemWeight1: '1000',
            shippingAddressRequired: 'false',
            timeout: '20',
            senderName: formValues.name,
            senderEmail: formValues.email,
            redirectURL: 'https://feijoada.netlify.app/obrigado'
        }
        const formBody = Object.keys(objForm).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(objForm[key])).join('&');
        console.log(formBody)
        await fetch('https://cors-anywhere.herokuapp.com/' + urlPagSeguro, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formBody
        })
        .then(res => res.text())
        .then(res => {
            let codeCheckoutPagSeguro = getJustCode(res)
            let url = process.env.NODE_ENV === 'development' ? `https://sandbox.pagseguro.uol.com.br/v2/checkout/payment.html?code=${codeCheckoutPagSeguro}` : `https://pagseguro.uol.com.br/v2/checkout/payment.html?code=${codeCheckoutPagSeguro}`
            window.location.href = url
        })

        setLoading(false)
    }
    function getJustCode(text) { // eslint-disable-next-line
        const regex = /<code>(.*?)<\/code>/g

        return regex.exec(text)[0].toString().replace(/<\/?code>/g, '')
    }
    let options = []
    for(let i = 1; i <= MAX_QUANTITY; i++)
        options.push(<option key={i} value={i}>{i}</option>)
    return (
        <FormContainer>
            <Title size={20}>Preencha Seus Dados</Title>
            <FormWrap name="formSection">
                <Message>Para realizar a compra da feijoada, faça seu cadastro.</Message>
                <form id="form" onSubmit={handleSubmit}>
                    <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center" }}>
                        {loading ? <div className="sweet-loading">
                            <Loader
                                size={150}
                                color={"#1BB99A"}
                                loading={loading}
                            />
                        </div> : null}
                    </div>
                    {formErrors.name && (
                        <span style={{ color: 'red' }}>{formErrors.name}</span>
                    )}
                    <FormLabel>Nome*</FormLabel>
                    <FormInput
                        id="name"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                    />
                    {formErrors.email && (
                        <span style={{ color: 'red' }}>{formErrors.email}</span>
                    )}
                    <FormLabel>Email*</FormLabel>
                    <FormInput
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                    />
                    {formErrors.phone && (
                        <span style={{ color: 'red' }}>{formErrors.phone}</span>
                    )}
                    <FormLabel>Celular*</FormLabel>
                    <MaskedInput
                        mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                        style={{
                            background: "#FFFFFF",
                            border: "1px solid #000000",
                            borderRadius: "13px",
                            width: "100%",
                            padding: "10px 10px",
                            marginBottom: "20px",
                            marginLeft: "-10px"
                        }}
                        guide={false}
                        id="phone"
                        name="phone"
                        value={formValues.phone}
                        onChange={handleChange}
                    />
                    <FormLabel>Quantidade de Feijoadas*</FormLabel>
                    <select value={formValues.quantity} onChange={e => setQuantity(e.target.value)} style={{width: '100%', padding: '5px'}}>
                        {options}
                    </select>
                </form>
            </FormWrap>
            <Button theme={"green"} mb={40} form="form">Comprar</Button>
        </FormContainer>
    )
}