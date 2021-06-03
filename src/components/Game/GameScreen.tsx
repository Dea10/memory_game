import React from 'react';
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

    return (
        <div className={styles.gameScreen}>
            <h1>GameScreen</h1>
            <div className={styles.gameBoard}>
                {
                    gameArray.map((item, index) => {
                        return <Card 
                            id={item} 
                            key={index}
                        />
                    })
                }
            </div>
        </div>
    );
};

export default GameScreen;