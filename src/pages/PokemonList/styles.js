import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    ul{
        margin: 40px 0;
        max-width: 1240px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
    }
    h1{
        margin: 30px 0;
        font-size: 25px;
        text-align: center;
    }
`
export const Button = styled.button`
    width: 200px;
    height: 40px;
    font-size: 22px;
    text-transform: uppercase;
    margin-bottom: 50px;
    border: none;
    border-radius: 14px;
    background-color: #FCCB35;
    color: rgba(53, 49, 154);
    font-weight: bold;
    cursor: pointer;
    :hover{
         opacity: 0.8;
        }
    :active{
        background-color: rgba(53, 49, 154);
        color: #FCCB35;
        }
`