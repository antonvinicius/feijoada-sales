import React, { useState, useRef, useEffect } from 'react'
import { Title } from '../TitleElement'
import { animateScroll } from 'react-scroll'
import { Button } from '../ButtonElement'
import MaskedInput from 'react-text-mask'

import {
    FormContainer,
    FormWrap,
    Message,
    FormLabel,
    FormInput
} from './FormElements'


export default function Index() {
    const intialValues = { email: "", name: "", phone: "" }
    const [formValues, setFormValues] = useState(intialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

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
    }, [formErrors]);

    const submitForm = () => {
        fetch(`https://hooks.zapier.com/hooks/catch/8742077/ogjuytj/`, {
            method: 'POST',
            body: JSON.stringify(formValues),
        })
        window.open('https://pag.ae/7WuDVFQB2', '_blank');
        animateScroll.scrollToTop()
    }

    return (
        <FormContainer>
            <Title size={20}>Preencha Seus Dados</Title>
            <FormWrap name="formSection">
                <Message>Para realizar a compra da feijoada, faça seu cadastro.</Message>
                <form id="form" onSubmit={handleSubmit}>
                    {formErrors.name && (
                        <span style={{color: 'red'}}>{formErrors.name}</span>
                    )}
                    <FormLabel>Nome*</FormLabel>
                    <FormInput
                        id="name"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                    />
                    {formErrors.email && (
                        <span style={{color: 'red'}}>{formErrors.email}</span>
                    )}
                    <FormLabel>Email*</FormLabel>
                    <FormInput
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                    />
                    {formErrors.phone && (
                        <span style={{color: 'red'}}>{formErrors.phone}</span>
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
                </form>
            </FormWrap>
            <Button theme={"green"} mb={40} form="form">Comprar</Button>
        </FormContainer>
    )
}