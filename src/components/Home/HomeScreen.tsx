import React from 'react';
import { Link } from "react-router-dom";
import GreenButton from '../Buttons/GreenButton';
import RedButton from '../Buttons/RedButton';
import styles from './HomeScreen.module.scss';

const HomeScreen = () => {

    const setGame = () => {
        localStorage.setItem('flippedCards', '0')
    };

    return (
        <div className={styles.homeScreen}>
            <Link className={styles.link} to="/game" onClick={setGame}>
                <GreenButton
                    buttonLabel='Play'
                />
            </Link>
            <Link className={styles.link} to="/ranking">
                <RedButton 
                    buttonLabel='Ranking'
                />
            </Link>
        </div>
    );
};

export default HomeScreen;