import React, { useState } from 'react';
import { getRandomArray } from '../helpers/getRandomArray';
import Card from './Card';
import styles from './GameScreen.module.scss';

export type card = {

};

const GameScreen = () => {
    const randomSprites = getRandomArray();
    const duplicatedRandomSprites = [...randomSprites, ...randomSprites];
    const positionsArray = getRandomArray(duplicatedRandomSprites.length, duplicatedRandomSprites.length, true);
    
    const gameArray = [...duplicatedRandomSprites];
    for(let i = 0; i < duplicatedRandomSprites.length; i++) {
        gameArray[i] = duplicatedRandomSprites[positionsArray[i]];
    }

    const _gameCards = gameArray.map(item => {
        return {
            id: item,
            isShown: false,
            isPaired: false
        }
    });

    const [gameCards, setGameCards] = useState(_gameCards);
    const [selectedCard, setSelectedCard] = useState(-1);

    const hideCards = (index1: number, index2: number) => {
        const cards = [...gameCards];

        cards[index1] = {
            ...cards[index1],
            isShown: false
        };

        cards[index2] = {
            ...cards[index2],
            isShown: false
        };

        setTimeout(() => {
            setGameCards(cards);
        }, 2000);
        
        setSelectedCard(-1);
    }

    const showCard = (index: number) => {
        const cards = [...gameCards];
        cards[index].isShown = true;

        setGameCards(cards);

        if(selectedCard !== -1) {
            hideCards(index, selectedCard);
        } else {
            setSelectedCard(index);
        }
    };

    return (
        <div className={styles.gameScreen}>
            <h1>GameScreen</h1>
            <div className={styles.gameBoard}>
                {
                    gameCards.map((item, index) => {
                        return <Card 
                            cardIndex={index}
                            hideCards={hideCards}
                            id={item.id} 
                            isShown={item.isShown}
                            key={index}
                            showCard={showCard}
                        />
                    })
                }
            </div>
        </div>
    );
};

export default GameScreen;