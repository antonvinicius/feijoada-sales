import styled from 'styled-components'

import Bg from '../../assets/img/ImgForm.svg'

export const FormContainer = styled.div`
    background-image: url(${Bg});
    background-repeat: no-repeat;
    background-size: cover;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    width:100%;
    margin: auto;
`
export const FormWrap = styled.div`
    background-color: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 33px;
    width: 80%;
`
export const Message = styled.p`
    background-color: #EECCBF;
    padding: 10px;
    text-align: center;
    color: black;
    font-weight: 500;
    width: 80%;
    margin: 15px auto;
    font-weight: 500;
    font-size: 18px;
    border-radius: 15px;
`
export const GroupForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 95%;
`
export const FormLabel = styled.label`
    font-weight: 500;
    font-size: 18px;
`
export const FormInput = styled.input`
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 13px;
    width:100%;
    padding:10px 10px;
    margin-bottom: 20px;
    margin-left: -10px;
`