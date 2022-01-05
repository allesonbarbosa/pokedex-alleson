import styled from "styled-components";

export const Container = styled.div`
    display: none;
    width: auto;
    height: auto;
    transform: scale(0.9);
    border-radius: 14px;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.75);
    padding: 10px;
    img{
        width: 180px;
        height: 180px;
    }
    p{
        color: white;
        font-size: 20px;
        text-transform: capitalize;
        font-weight: bold;
    }
    :hover{
        transform: scale(1);
        transition: all ease 0.2s
    }
    
    &.normal{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #A8A878;
    }
    &.fighting{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #C03028;
    }
    &.flying{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: blue;
    }
    &.poison{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #A040A0;
    }
    &.ground{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #E0C068;
    }
    &.rock{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #B8A038;
    }
    &.bug{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #A8B820;
    }
    &.ghost{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #705898;
    }
    &.fire{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #F08030;
    }
    &.water{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #6890F0;
    }
    &.grass{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #78CB50;
    }
    &.electric{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #F8D030;
    }
    &.psychic{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #F85888;
    }
    &.ice{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #98D8D8;
    }
    &.dragon{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #7038F8;
    }
    &.fairy{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #EE99AC;
    }
`