import React from 'react';
import { Link } from "react-router-dom";
import Button from '../Buttons/Button';
import styles from './HomeScreen.module.scss';

const HomeScreen = () => {

    const setGame = () => {
        // TODO: localStorage no more needed
        localStorage.setItem('flippedCards', '0');
    };

    return (
        <div className={styles.homeScreen}>
            <Link className={styles.link} to="/game" onClick={setGame}>
                <Button
                    label='Play'
                    color='#4CC0A6'
                    onClick={setGame}
                />
            </Link>
            <Link className={styles.link} to="/ranking">
                <Button 
                    label='Ranking'
                    color='#FF5054'
                    onClick={() => {}}
                />
            </Link>
        </div>
    );
};

export default HomeScreen;