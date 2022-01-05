import axios from 'axios';

const loadPokemonData = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
});

export default loadPokemonData;