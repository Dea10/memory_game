import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Buttons/Button';
import { getGameCards } from '../helpers/getGameCards';
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
    const [gameCards, setGameCards] = useState(getGameCards);
    const [selectedCard, setSelectedCard] = useState(-1);
    const [score, setScore] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isStarted, setIsStarted] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [time, setTime] = useState(0);
    const [isRanked, setIsRanked] = useState(false);

    // restart is not working, do not know why :(
    const restart = () => {
        const aux = getGameCards();
        setGameCards(aux);
        setSelectedCard(-1);
        setScore(0);
        setIsActive(false);
        setIsStarted(false);
        setIsFinished(false);
        setTime(0);
        setIsRanked(false);
    }

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
        if (cards[selectedCard]?.id === cards[index].id) {
            setScore(score + 1);
            console.log('score: ', score);
            setPaired(index);
            setPaired(selectedCard);
            setSelectedCard(-1);
            if (score + 1 === cards.length / 2) {
                console.log('Finished game');
                setIsFinished(true);
                setIsActive(false);
            }
        } else {
            if (selectedCard !== -1) {
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
        <BoardContext.Provider value={{ isActive, isStarted, isFinished }}>
            <div className={styles.gameScreen}>
                <Link className={styles.link} to="/home">
                    <Button
                        label='Home'
                        color='#4CC0A6'
                    />
                </Link>
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
                        isFinished && !isRanked &&
                        <RankingForm
                            time={time}
                            setIsRanked={setIsRanked}
                        />
                    }
                    {
                        isStarted &&
                        <Button
                            label='Restart'
                            color='red'
                            onClick={restart}
                        />
                    }
                </div>
            </div>
        </BoardContext.Provider>
    );
};

export default GameScreen;