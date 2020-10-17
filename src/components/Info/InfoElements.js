import styled from "styled-components"
import { FaMoneyBillAlt, FaCalendarCheck } from 'react-icons/fa'
import BgDesktop from '../../assets/img/ImgDesktopFrame2.svg'

export const InfoContainer = styled.div`
    background-image: url(${BgDesktop}); 
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: animate_background 10s infinite alternate ease-in-out;
    
    @media(min-width: 768px){
        height: 105vh;
    }
    @keyframes animate_background { 
        from { 
            background-position-x: 0;
        } 
        to { 
            background-position-x: 100%;
        }    
    }

`
export const CardIconPrice = styled(FaMoneyBillAlt)`
    font-size: 50px;
    color: #5A3629;
`
export const CardIconDate = styled(FaCalendarCheck)`
    font-size: 50px;
    color: #5A3629;
`
export const CardInfo = styled.div`
    position: relative;
    width: 85%;
    height: 300px;
    background-color: #fff;
    border-radius: 33px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin-bottom: 25px;
    box-shadow: 0px 9px 39px 0px rgba(0,0,0,0.45);
    transition: 0.3s;
    @media(min-width: 768px){
        width: 500px;
        &:hover {
            z-index: 1000;
            transform:  scale(1.3);
        }
    }
`

export const CardTitle = styled.h1`
    margin-top: 50px;
    font-size: 24px;
    font-weight: 800;
    color: #D07756;
    @media(min-width: 768px) {
        margin-top: 5px;
    }
`
export const CardMain = styled.h1`
    margin-top: 20px;
    font-size: 36px;
    font-weight: 700;
    color: #D07756;
`
export const CardSubTitle = styled.h1`
    font-weight: 500;
    font-size: 18px;
    color: #D07756;
`