import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';

import { Container, H1, ContainerLogoType } from './styles';
import Header from '../../components/Header';

import LogoNormal from '../../assets/logo_normal.png';
import LogoFighting from '../../assets/logo_fighting.png';
import LogoFlying from '../../assets/logo_flying.png';
import LogoPoison from '../../assets/logo_poison.png';
import LogoGround from '../../assets/logo_ground.png';
import LogoRock from '../../assets/logo_rock.png';
import LogoBug from '../../assets/logo_bug.png';
import LogoGhost from '../../assets/logo_ghost.png';
import LogoFire from '../../assets/logo_fire.png';
import LogoWater from '../../assets/logo_water.png';
import LogoGrass from '../../assets/logo_grass.png';
import LogoElectric from '../../assets/logo_electric.png';
import LogoPsychic from '../../assets/logo_psychic.png';
import LogoIce from '../../assets/logo_ice.png';
import LogoDragon from '../../assets/logo_dragon.png';
import LogoFairy from '../../assets/logo_fairy.png';


function Home() {

    const typesPokemons = [
        { path: <img src={LogoNormal} alt="logo-normal" />, id:1 },
        { path: <img src={LogoFighting} alt="logo-fighting" />, id:2 },
        { path: <img src={LogoFlying} alt="logo-flying" />, id:3 },
        { path: <img src={LogoPoison} alt="logo-poison" />, id:4 },
        { path: <img src={LogoGround} alt="logo-ground" />, id:5 },
        { path: <img src={LogoRock} alt="logo-rock" />, id:6 },
        { path: <img src={LogoBug} alt="logo-bug" />, id:7 },
        { path: <img src={LogoGhost} alt="logo-ghost" />, id:8 },
        { path: <img src={LogoFire} alt="logo-fire" />, id:10 },
        { path: <img src={LogoWater} alt="logo-water" />, id:11 },
        { path: <img src={LogoGrass} alt="logo-grass" />, id:12 },
        { path: <img src={LogoElectric} alt="logo-electric" />, id:13 },
        { path: <img src={LogoPsychic} alt="logo-psychic" />, id:14 },
        { path: <img src={LogoIce} alt="logo-ice" />, id:15 },
        { path: <img src={LogoDragon} alt="logo-dragon" />, id:16 },
        { path: <img src={LogoFairy} alt="logo-fairy" />, id:18 },
    ];

    const breakPoints = [
            { width: 1, itemsToShow: 1 },
            { width: 400, itemsToShow: 2, itemsToScroll: 2, pagination: false },
            { width: 600, itemsToShow: 3 },
            { width: 900, itemsToShow: 4, itemsToScroll: 2 },
            { width: 1200, itemsToShow: 5 },
    ];
    
    return (
        <Container>
            <Header/>
            <H1>Escolha o tipo do pokemon:</H1>
            <Carousel 
            itemsToShow={5} 
            style={{width: '90%'}} 
            breakPoints={breakPoints}
            >
                {typesPokemons.map(type => (
                    <ContainerLogoType key={type.id}>
                        <Link to={`/${type.id}`}>
                            {type.path}
                        </Link>
                    </ContainerLogoType>
                ))}
            </Carousel>
        </Container>
    )
};

export default Home;