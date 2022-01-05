import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import api from '../../services/api';

function PokemonCard (props){
    const [ imagePokemon, setImagePokemon ] = useState([]);
    const [type1Pokemon, setType1Pokemon] = useState([]);
    const [type2Pokemon, setType2Pokemon] = useState([]);
    const {id : typeId}  = useParams();
    const namePokemon = props.name;

    useEffect(()=>{
        async function fetchPokemons(){
            const { data } = await api.get(`pokemon/${namePokemon}`);
            setImagePokemon(data.sprites);
            setType1Pokemon(data.types[0].type);
            if(data.types.length === 2){
                setType2Pokemon(data.types[1].type);
            }
        }
        fetchPokemons();

    },[namePokemon])
    
    function renderType(){
        if(type1Pokemon.name === "normal" && typeId === "1"){
            return "normal";
        }else if(type1Pokemon.name === "fighting"&& typeId === "2"){
            return "fighting";
        }else if((type1Pokemon.name ==="flying" || type2Pokemon.name==="flying") && typeId === "3"){
            return "flying";
        }else if(type1Pokemon.name === "poison" && typeId === "4"){
            return "poison";
        }else if(type1Pokemon.name === "ground" && typeId === "5"){
            return "ground";
        }else if(type1Pokemon.name === "rock" && typeId === "6"){
            return "rock";
        }else if(type1Pokemon.name === "bug" && typeId === "7"){
            return "bug";
        }else if(type1Pokemon.name === "ghost" && typeId === "8"){
            return "ghost";
        }else if(type1Pokemon.name === "fire" && typeId === "10"){
            return "fire";
        }else if(type1Pokemon.name === "water" && typeId === "11"){
            return "water";
        }else if(type1Pokemon.name === "grass" && typeId === "12"){
            return "grass";
        }else if(type1Pokemon.name === "electric" && typeId === "13"){
            return "electric";
        }else if(type1Pokemon.name === "psychic" && typeId === "14"){
            return "psychic";
        }else if(type1Pokemon.name === "ice" && typeId === "15"){
            return "ice";
        }else if(type1Pokemon.name === "dragon" && typeId === "16"){
            return "dragon";
        }else if(type1Pokemon.name === "fairy" && typeId === "18"){
            return "fairy";
        }else{
            return null;
        }
    }

    return(
        <Container className={renderType()}>
            <Link to={`${namePokemon}`}>
                <img src={imagePokemon.front_default} alt=""/>
                <p>{namePokemon}</p>
            </Link>   
        </Container>
    )
}

export default PokemonCard;