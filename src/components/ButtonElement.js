import styled from "styled-components"

export const Button = styled.button`
    margin-top: 10px;
    margin-bottom: ${({mb}) => mb ? mb + 'px' : '0'};
    color: ${({theme}) => theme === 'green' ? "black" : '#fff'};
    border-radius: 36px;
    padding: 10px 40px;
    font-weight: 800;
    text-align: center;
    cursor: pointer;
    border: none;
    background-color: ${({theme}) => theme === 'green' ? "#65D470" : '#D07756'};
    font-size: 24px;
    box-shadow: 0px 9px 39px 0px rgba(0,0,0,0.45);
`