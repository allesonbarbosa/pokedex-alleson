import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ContainerPokemonView = styled.div`
    display: flex;
    flex-direction: row;
    width: 95vw;
    height: 500px;
    margin: 60px auto;
    border-radius: 14px;
    @media(max-width:860px){
        flex-direction: column;
        height: auto;
        width: 80vw;
        align-items: center;
    }
    &.normal{
        background: #A8A878;
        box-shadow: 4px 4px 14px #A8A878;
    }
    &.fighting{
        background: #C03028;
        box-shadow: 4px 4px 14px #C03028;
    }
    &.flying{
        background: blue;
    }
    &.poison{
        background: #A040A0;
        box-shadow: 4px 4px 14px #A040A0;
    }
    &.ground{
        background: #E0C068;
        box-shadow: 4px 4px 14px #E0C068;
    }
    &.rock{
        background: #B8A038;
        box-shadow: 4px 4px 14px #B8A038;
    }
    &.bug{
        background: #A8B820;
        box-shadow: 4px 4px 14px #A8B820;
    }
    &.ghost{
        background: #705898;
        box-shadow: 4px 4px 14px #705898;
    }
    &.fire{
        background: #F08030;
        box-shadow: 4px 4px 14px #F08030;
    }
    &.water{
        background: #6890F0;
        box-shadow: 4px 4px 14px #6890F0;
    }
    &.grass{
        background: #78CB50;
        box-shadow: 4px 4px 14px #78CB50;
    }
    &.electric{
        background: #F8D030;
        box-shadow: 4px 4px 14px #F8D030;
    }
    &.psychic{
        background: #F85888;
        box-shadow: 4px 4px 14px #F85888;
    }
    &.ice{
        background: #98D8D8;
        box-shadow: 4px 4px 14px #98D8D8;
    }
    &.dragon{
        background: #7038F8;
        box-shadow: 4px 4px 14px #7038F8;
    }
    &.fairy{
        background: #EE99AC;
        box-shadow: 4px 4px 14px #EE99AC;
    }
`
export const PokemonInfo = styled.div`
    width: 25vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    margin: 25px 0;
    @media(max-width:860px){
        width: 100%;
    }
`
export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 25px;
    p{
        font-size: 22px;
        color: white;
        width: 100%;
    }
`
export const ContainerAbilities = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
    span{
        background: white;
        width: 130px;
        height: 22px;
        border-radius: 14px;
        text-align: center;
        text-transform: capitalize;
        border-radius: 20px;
        box-shadow: 4px 4px 10px #CCCCCC;
    }
    b{
        font-size: 22px;
        color: white;
    }
`
export const CardPokemonView = styled.div`
    width: 45vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    border-radius: 14px;
    h1{
        text-transform: capitalize;
        height: 10%;
        margin: 10px 0;
    }
    img{
        width: 70%;
        height: 70%;
        border-radius: 30px;
        overflow: hidden;
        margin: 20px 0;
    }
    @media(max-width:1380px){
        width: 40vw;
    }
    @media(max-width:1140px){
        width: 35vw;
    }
    @media(max-width:990px){
        width: 30vw;
    }
    @media(max-width:860px){
        width: 100%;
        img{
            height: 50%;
            width: 50%;
        }
    }
`
export const PokemonStats = styled.div`
    width: 20vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media(max-width:1380px){
        width: 25vw;
    }
    @media(max-width:1140px){
        width: 30vw;
    }
    @media(max-width:990px){
        width: 35vw;
    }
    @media(max-width:860px){
        width: 100%;
        margin: 20px 0;
        justify-content: center;
    }  
`
export const NameStatsContainer = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    font-size: 22px;
    color: white;
    padding-left: 25px;
    @media(max-width:860px){
        width: 30%;
        padding-left: 0;
    }
    @media(max-width:400px){
        font-size: 18px;
    }  
`
export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-left: 10px;
    span{
         height: 22px;
         background: white;
         border-radius: 20px;
         box-shadow: 4px 4px 10px #CCCCCC;
         margin-left: 10px;
            b{
                padding-left: 10px;
                font-size: 16px;
                color: black;
            }
        }
    }
    @media(max-width:400px){
        span{
            height: 18px;
            b{
                font-size: 16px;
            }
        }
    }   
`
export const Button = styled.button`
    width: 200px;
    height: 40px;
    font-size: 22px;
    margin: 20px;
    text-transform: uppercase;
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