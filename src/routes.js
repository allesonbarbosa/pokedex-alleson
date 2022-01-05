import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PokemonList from './pages/PokemonList';
import PokemonView from './pages/PokemonView';

function MainRoutes(){
    return(
        <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:id" element={<PokemonList/>}/>
                <Route path="/:id/:name" element={<PokemonView/>}/>
        </Routes>
    )
};

export default MainRoutes;