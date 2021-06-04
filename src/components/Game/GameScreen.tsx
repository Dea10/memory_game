import React, { useState } from 'react';
import { getRandomArray } from '../helpers/getRandomArray';
import Card from './Card';
import styles from './GameScreen.module.scss';

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

    const flipUnpairedCards = (index1: number, index2: number) => {
        setGameCards((cards: any)  => {
            const _cards = [...cards];
            
            const _card1 = {
                ...cards[index1],
                isShown: false
            };
            
            const _card2 = {
                ...cards[index2],
                isShown: false
            };

            _cards[index1] = _card1;
            _cards[index2] = _card2;
            
            return _cards;
        })
    }

    return (
        <div className={styles.gameScreen}>
            <h1>GameScreen</h1>
            <div className={styles.gameBoard}>
                {
                    gameCards.map((item, index) => {
                        return <Card 
                            id={item.id} 
                            isShown={item.isShown}
                            isPaired={item.isPaired}
                            setGameCards={setGameCards}
                            flipUnpairedCards={flipUnpairedCards}
                            cardIndex={index}
                            key={index}
                        />
                    })
                }
            </div>
        </div>
    );
};

export default GameScreen;