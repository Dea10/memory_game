import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styles from './Card.module.scss';

type CardProps = {
    id: number;
    isShown: boolean;
    isPaired: boolean;
    cardIndex: number;
    setGameCards: Dispatch<SetStateAction<any>>;
    flipUnpairedCards: (index1: number, index2: number) => void;
}

const Card = ({id, isShown, isPaired, cardIndex, setGameCards, flipUnpairedCards}: CardProps) => {

    const noResponse = {
        name: '',
        imgUrl: ''
    }
    const [pokemon, setPokemon] = useState(noResponse);
    // const [isShown, setIsShown] = useState(false);
    // const [isPaired, setIsPaired] = useState(false);

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

    const flipToBack = () => {
        // setIsShown(false);
        setGameCards((cards: any)  => {
            const _cards = [...cards];
            
            const _card = {
                ...cards[cardIndex],
                isShown: false
            };

            _cards[cardIndex] = _card;
            
            return _cards;
        })
    }

    const flipCard = () => {
        // setIsShown(true);
        setGameCards((cards: any)  => {
            const _cards = [...cards];
            
            const _card = {
                ...cards[cardIndex],
                isShown: true
            };

            _cards[cardIndex] = _card;
            
            return _cards;
        })
    }

    const handleToggle = () => {
        const flippedCards = parseInt(localStorage.getItem('flippedCards') ?? '0');
        if(flippedCards === 0){
            flipCard();
            localStorage.setItem('flippedCards', '1');
            localStorage.setItem('card1', cardIndex.toString());
        } else {
            localStorage.setItem('flippedCards', '2');
            flipCard();
            setTimeout(() => {
                // flipToBack()
                flipUnpairedCards(cardIndex, parseInt(localStorage.getItem('card1') ?? '0') );
                localStorage.setItem('flippedCards', '0');
            }, 2000)
        }
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