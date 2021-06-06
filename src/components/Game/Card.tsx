import React, { useEffect, useState } from 'react';
import styles from './Card.module.scss';

type CardProps = {
    id: number;
    isShown: boolean;
    cardIndex: number;
    hideCards: (index1: number, index2: number) => void;
    showCard: (index: number) => void;
}

const Card = ({id, isShown, cardIndex, showCard, hideCards}: CardProps) => {

    const noResponse = {
        name: '',
        imgUrl: ''
    }
    const [pokemon, setPokemon] = useState(noResponse);

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