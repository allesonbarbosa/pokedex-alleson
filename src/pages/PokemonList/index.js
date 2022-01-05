import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import PokemonCard from '../../components/PokemonCard';
import Header from '../../components/Header';
import { useParams } from 'react-router';
import api from '../../services/api';
import { Container, Button } from './styles';

function PokemonList (){
    const [ allPokemons, setAllPokemons ] = useState([]);
    const {id : typeId}  = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        async function fetchAllPokemons(){
            const { data } = await api.get("pokemon?limit=151&offset=0");
            setAllPokemons(data.results);
        }

        fetchAllPokemons();
        
    },[typeId]);

    return(
        <Container>
            <Header/>
            <h1>Clique no Pokemon para ver suas características</h1>
            <ul>
                {allPokemons.map(pokemon=>(
                    <PokemonCard
                    name={pokemon.name}
                    key={pokemon.url}
                    >
                    </PokemonCard>
                ))}
            </ul>
            <Button onClick={()=> navigate('/')} >Voltar</Button>
        </Container>
    )
};

export default PokemonList;