import styled from 'styled-components'

export const Title = styled.h1`
    margin-top: 40px;
    margin-bottom: 40px;
    background-color: #fff;
    color: #D07756;
    padding: 20px;
    border-radius: 30px;
    font-weight: 800;
    box-shadow: 0px 9px 39px 0px rgba(0,0,0,0.45);
    font-size: ${({size}) => size ? size + "px" : "30px"};
`