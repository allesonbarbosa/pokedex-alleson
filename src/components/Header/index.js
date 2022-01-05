import React from 'react';
import { ContainerHeader, GifPokeball, LogoHeader } from './styles';

import Pokeball from '../../assets/pokeball_gif.gif';
import PokedexLogo from '../../assets/pokedex_logo.png';

function Header(){
    return (
        <ContainerHeader>
            <GifPokeball src={Pokeball} alt="pokeball-gif" />
            <LogoHeader src={PokedexLogo} alt="pokedex-logo" /> 
        </ContainerHeader>
    );
};

export default Header;