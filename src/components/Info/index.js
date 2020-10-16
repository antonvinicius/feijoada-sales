import React from 'react'
import { Link } from 'react-scroll'
import { Button } from "../ButtonElement"
import {
    InfoContainer,
    CardInfo,
    CardTitle,
    CardMain,
    CardSubTitle,
    CardIconDate,
    CardIconPrice
} from "./InfoElements"

import { Title } from '../TitleElement'

export default function index() {
    return (
        <InfoContainer name="info">
            <Title>Informações</Title>
            <CardInfo>
                <CardIconPrice />
                <CardTitle>Preço</CardTitle>
                <CardMain>R$30,00</CardMain>
                <CardSubTitle>1 un. serve 2 pessoas</CardSubTitle>
            </CardInfo>
            <CardInfo>
                <CardIconDate />
                <CardTitle>Data</CardTitle>
                <CardMain>31/10</CardMain>
                <CardSubTitle>Rua Clara Nunes, 5856</CardSubTitle>
            </CardInfo>
            <Link to="formSection" spy={true} smooth={true} offset={40} duration={500}>
                <Button theme="green" mb={30}>Comprar Agora</Button>
            </Link>
        </InfoContainer>
    )
}
