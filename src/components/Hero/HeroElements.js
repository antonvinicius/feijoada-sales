import styled from "styled-components"

import BgFeijoada from "../../assets/img/feijoada.jpg"

export const HeroContainer = styled.header`
    background: url('${BgFeijoada}') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;

    @media(orientation: landscape) and (max-width: 768px) {
        height: 100% !important;
    }
`

export const Navbar = styled.nav`
    width: 100%;
    background: rgba(0, 0, 0, 0.35);
    display: flex;
    padding: 10px 0;
    align-items: center;
`

export const NavLogo = styled.img`
    margin-left: 20px;
    width: 50px;
    border-radius: 50%;
`
export const NavTitle = styled.h1`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #fff;
    padding-left: 20px;
`
export const HeroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const HeroMessage = styled.div`
    background: rgba(54, 29, 22, 0.8);
    border-radius: 33px;
    color: #fff;
    padding: 20px;
    width: 80%;
    margin-top: 10px;
`
export const HeroH1 = styled.h1`
    font-size: 20px;
`
export const HeroP = styled.p`
    padding: 5px;
    font-size: 15px;
`
