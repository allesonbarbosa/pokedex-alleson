import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import api from '../../services/api';
import Header from '../../components/Header';
import {
    Container,
    ContainerPokemonView,
    PokemonInfo,
    ContainerInfo,
    ContainerAbilities,
    CardPokemonView,
    PokemonStats,
    NameStatsContainer,
    StatsContainer,
    Button
} from './styles';


function PokemonView() {
    const { name } = useParams();
    const { id } = useParams();
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState([]);
    const [statsPokemon, setStatsPokemon] = useState([]);
    const [abilitiesPokemon, setAbilitiesPokemon] = useState([]);

    useEffect(() => {

        async function loadPokemonData() {
            const { data } = await api.get(`pokemon/${name}`);
            setStatsPokemon(data.stats);
            setPokemon({
                name: name,
                id: data.id,
                weight: (data.weight)/10,
                height: (data.height)/10,
                imageUrl: data.sprites.front_default,
            });
            setAbilitiesPokemon(data.abilities);
        }
        loadPokemonData();
        
    }, [name]);

    const nameStats = [
        "HP",
        "Attack",
        "Defense",
        "Sp.Attack",
        "Sp.Defense",
        "Speed"
    ];

    function typeColor(){
        if(id === "1"){
            return "normal";
        }else if(id === "2"){
            return "fighting";
        }else if(id === "3"){
            return "flying";
        }else if(id === "4"){
            return "poison";
        }else if(id === "5"){
            return "ground";
        }else if(id === "6"){
            return "rock";
        }else if(id === "7"){
            return "bug";
        }else if(id === "8"){
            return "ghost";
        }else if(id === "10"){
            return "fire";
        }else if(id === "11"){
            return "water";
        }else if(id === "12"){
            return "grass";
        }else if(id === "13"){
            return "electric";
        }else if(id === "14"){
            return "psychic";
        }else if(id === "15"){
            return "ice";
        }else if(id === "16"){
            return "dragon";
        }else if(id === "18"){
            return "fairy";
        }else{
            return null;
        }
    };
    
    return (
        <Container>
            <Header />
            <ContainerPokemonView className={typeColor()}>
                <PokemonInfo>
                    <ContainerInfo>
                        <p><b>Id:</b> {pokemon.id}</p>
                        <p><b>Height:</b> {pokemon.height} m</p>
                        <p><b>Weight:</b>  {pokemon.weight} Kg</p>
                    </ContainerInfo>
                    <ContainerAbilities>
                    <b>Abilities:</b>
                        {abilitiesPokemon.map((ability,index)=>(
                            <span key={index}>
                                <strong>{ability.ability.name}</strong>
                            </span>
                        ))}
                    </ContainerAbilities>
                </PokemonInfo>
                <CardPokemonView>
                    <h1>{pokemon.name}</h1>
                    <img src={`https://img.pokemondb.net/artwork/large/${name}.jpg`} alt="" />
                </CardPokemonView>
                <PokemonStats>
                    <NameStatsContainer>
                        {nameStats.map((name,index)=>(
                            <b key={index}>{name}</b>
                        ))}
                    </NameStatsContainer>
                    <StatsContainer>
                        {statsPokemon.map((stats,index) => (
                                <span key={index} style={{width:`${stats.base_stat*1.2}px`}}>
                                    <b>{stats.base_stat}</b>
                                </span>
                        ))}
                    </StatsContainer>
                </PokemonStats>
            </ContainerPokemonView>
            <Button onClick={()=> navigate(`/${id}`)} >Voltar</Button>
        </Container>
    );
};

export default PokemonView;