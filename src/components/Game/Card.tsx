import React, { useEffect, useState } from 'react';
import styles from './Card.module.scss';

type CardProps = {
    id: number;
}

const Card = ({id}: CardProps) => {

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
    }

    useEffect(() => {
        getPokemon();
    }, [])

    return (
        <div className={styles.card}>
            <img src={pokemon.imgUrl} alt={pokemon.name} />
            <small>{pokemon.name}</small>
        </div>
    );
};

export default Card;