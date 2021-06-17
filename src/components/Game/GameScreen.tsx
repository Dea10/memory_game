import React, { useEffect, useState } from 'react';
import Button from '../Buttons/Button';
import { getRandomArray } from '../helpers/getRandomArray';
import Card from './Card';
import styles from './GameScreen.module.scss';
import RankingForm from './RankingForm';
import Scoreboard from './Scoreboard';

export const BoardContext = React.createContext({
    isActive: false, 
    isStarted: false,
    isFinished: false
});

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
    const [score, setScore] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isStarted, setIsStarted] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [time, setTime] = useState(0);
    const [nickname, setNickname] = useState('');

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
            setIsActive(true);
        }, 2000);
        
        setSelectedCard(-1);
    }

    const showCard = (index: number) => {
        const cards = [...gameCards];
        cards[index].isShown = true;

        setGameCards(cards);

        setSelectedCard(index);
        if(cards[selectedCard]?.id === cards[index].id) {
            setScore(score+1);
            console.log('score: ', score);
            setPaired(index);
            setPaired(selectedCard);
            setSelectedCard(-1);
            if(score+1 === cards.length/2) {
                console.log('Finished game');
                setIsFinished(true);
                setIsActive(false);
            }
        } else {
            if(selectedCard !== -1) {
                setIsActive(false);
                hideCards(index, selectedCard);
            }
        }
    };

    const setPaired = (index: number) => {
        const cards = [...gameCards];
        cards[index].isPaired = true;

        setGameCards(cards);
    };

    const handleStart = () => {
        setIsActive(true);
        setIsStarted(true);
    }

    return (
        <BoardContext.Provider value={{isActive, isStarted, isFinished}}>
            <div className={styles.gameScreen}>
                <div className={styles.gameBoard}>
                    {
                        gameCards.map((item, index) => {
                            return <Card 
                                cardIndex={index}
                                id={item.id} 
                                isShown={item.isShown}
                                isPaired={item.isPaired}
                                key={index}
                                showCard={showCard}
                            />
                        })
                    }
                </div>
                <div className={styles.scoreboard}>
                    <Scoreboard 
                        score={score} 
                        setTime={setTime}
                    />
                    {
                        !isStarted &&
                        <Button
                            label='Start'
                            color='#ffcb05'
                            onClick={handleStart}
                        />
                    }
                    {
                        true && 
                        <RankingForm
                            time={time}
                        />
                    }
                </div>
            </div>
        </BoardContext.Provider>
    );
};

export default GameScreen;