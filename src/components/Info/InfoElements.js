import styled from "styled-components"
import { FaMoneyBillAlt, FaCalendarCheck } from 'react-icons/fa'
import Bg from "../../assets/img/ImgMobileInfo.svg"

export const InfoContainer = styled.div`
    background-image: url(${Bg}); 
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: animate_background 10s infinite alternate ease-in-out;

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
`

export const CardTitle = styled.h1`
    margin-top: 50px;
    font-size: 24px;
    font-weight: 800;
    color: #D07756;
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