import React, { useContext, useEffect, useState } from 'react';
import { BoardContext } from './GameScreen';
import styles from './Card.module.scss';

type CardProps = {
    id: number;
    isShown: boolean;
    cardIndex: number;
    isPaired: boolean;
    showCard: (index: number) => void;
}

// TODO: fix any
const colors: any = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5',
    ghost: '#C9C7EE'
};

const Card = ({id, isShown, cardIndex, isPaired, showCard}: CardProps) => {

    const noResponse = {
        name: '',
        imgUrl: ''
    }
    const [pokemon, setPokemon] = useState(noResponse);
    const [frontColor, setFrontColor] = useState({backgroundColor: 'blanchedalmond'});
    const boardState = useContext(BoardContext);

    const getPokemon = async () => {
        const baseUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const response = await fetch(baseUrl);
        const {name, sprites, types} = await response.json();
        const {front_default: imgUrl} = sprites;

        const pokemon = {
            name,
            imgUrl
        }

        const type: string = types[0]?.type.name;
        const backgroundColorStyle = {
            backgroundColor: colors[type]
        }

        setPokemon(pokemon);
        setFrontColor(backgroundColorStyle);
    };

    const handleToggle = () => {
        if(isPaired || !boardState.isActive || isShown) {
            return;
        }
        showCard(cardIndex);
    };

    useEffect(() => {
        getPokemon();
    }, [])

    return (
        <div
            onClick={handleToggle}
            className={styles.card}
        >
            {
                isShown ?

                <div className={styles.front} style={frontColor}>
                    <img src={pokemon.imgUrl} alt={pokemon.name} />
                    <small>{pokemon.name}</small>
                </div>
                :
                <div className={styles.back}>
                    <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'} alt='pokeball' />
                </div>
            }
        </div>
    );
};

export default Card;