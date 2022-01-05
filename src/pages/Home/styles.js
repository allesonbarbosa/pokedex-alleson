import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #EEEEEE;
    height: 100vh;
    .rec.rec-arrow {
    color: rgba(53, 49, 154);
    background-color: #FCCB35;
    border: none;
    }
    .rec.rec-arrow:hover {
    background-color: rgba(53, 49, 154);
    color: #FCCB35;
    }
    .rec.rec-arrow:disabled {
    visibility: hidden;
    }
`
export const H1 = styled.h1`
    color: rgba(53, 49, 154);
    font-size: 32px;
    background-color: #FCCB35;
    width: 35vw;
    height: auto;
    box-shadow: 0px 4px 4px rgba(53, 49, 154, 0.75);
    border-radius: 14px;
    margin: 25px;
    text-align: center;
    padding-top: 5px;
    @media(max-width: 900px){
        width: 80vw;
    }
`
export const ContainerLogoType = styled.div`
    img{
        border-radius: 50px;
        width: 200px;
        transform: scale(0.9);
        :hover{
            transform: scale(1);
            transition: all ease 0.2s
        }
        @media(max-width: 350px){
        width: 150px;
    }
    }   
`