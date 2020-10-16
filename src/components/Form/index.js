import React, { useState, useRef } from 'react'
import { Title } from '../TitleElement'
import { animateScroll } from 'react-scroll'
import { Button } from '../ButtonElement'
import {
    FormContainer,
    FormWrap,
    Message,
    FormLabel,
    FormInput
} from './FormElements'


export default function Index() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const obj = {
        name,
        email,
        phone
    }

    const form = useRef()
    const handleSubmit = () => {
        fetch(`https://hooks.zapier.com/hooks/catch/8742077/ogjuytj/`, {
            method: 'POST',
            body: JSON.stringify(obj),
        })
        window.open('https://pag.ae/7WuDVFQB2', '_blank');
        animateScroll.scrollToTop()
    }

    return (
        <FormContainer>
            <Title size={20}>Preencha Seus Dados</Title>
            <FormWrap name="formSection">
                <Message>Para realizar a compra da feijoada, faça seu cadastro.</Message>
                <form id="form" onSubmit={e => e.preventDefault() || handleSubmit()}>
                    <FormLabel>Nome*</FormLabel>
                    <FormInput
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <FormLabel>Email*</FormLabel>
                    <FormInput
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormLabel>Celular*</FormLabel>
                    <FormInput
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </form>
            </FormWrap>
            <Button theme={"green"} mb={40} form="form">Comprar</Button>
        </FormContainer>
    )
}
