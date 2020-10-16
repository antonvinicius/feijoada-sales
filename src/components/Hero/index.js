import React from 'react'

import Logo from "../../assets/img/logo.jpg"
import { Button } from "../ButtonElement"

import { Link } from 'react-scroll'

import {
    HeroContainer,
    Navbar,
    NavLogo,
    NavTitle,
    HeroWrapper,
    HeroMessage,
    HeroH1,
    HeroP,
} from './HeroElements'

export default function index() {
    return (
        <>
            <HeroContainer>
                <Navbar>
                    <NavLogo src={Logo} />
                    <NavTitle>CADI Porto Velho</NavTitle>
                </Navbar>
                <HeroWrapper>
                    <HeroMessage>
                        <HeroH1>Feijoada Beneficente</HeroH1>
                        <HeroP>Você já sonhou em ajudar na transformação de uma geração?</HeroP>
                        <HeroP>O CADI Porto Velho está desde 2017 atuando na comunidade do Mariana, principalmente com as crianças, e esta ação visa arrecadar recursos para a construção de 02 salas:</HeroP>
                        <HeroP>Sala 01 - Projeto de Leitura - Minimizando o número de crianças não alfabetizadas e despertando o prazer da leitura;</HeroP>
                        <HeroP>Sala 02 - Projeto de Musicalização -  Ativando a criatividade e aprimorando o raciocínio lógico.</HeroP>
                        <HeroP>Transformando o mundo! Uma vida de cada vez.</HeroP>
                    </HeroMessage>
                    <Link to="info" spy={true} smooth={true} offset={40} duration={500}>
                        <Button>Saiba Mais</Button>
                    </Link>
                </HeroWrapper>
            </HeroContainer>
        </>
    )
}
