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

const Card = ({id, isShown, cardIndex, isPaired, showCard}: CardProps) => {

    const noResponse = {
        name: '',
        imgUrl: ''
    }
    const [pokemon, setPokemon] = useState(noResponse);
    const boardState = useContext(BoardContext);

    const getPokemon = async () => {
        const baseUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const response = await fetch(baseUrl);
        const {name, sprites} = await response.json();
        const {front_default: imgUrl} = sprites;

        const pokemon = {
            name,
            imgUrl
        }

        setPokemon(pokemon);
    };

    const handleToggle = () => {
        if(isPaired || !boardState.isActive) {
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

                <div>
                    <img src={pokemon.imgUrl} alt={pokemon.name} />
                    <small>{pokemon.name}</small>
                </div>
                :
                <div>
                    <small>back</small>
                </div>
            }
        </div>
    );
};

export default Card;