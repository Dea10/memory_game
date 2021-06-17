import React from 'react';
import { Link } from "react-router-dom";
import Button from '../Buttons/Button';
import styles from './HomeScreen.module.scss';

const HomeScreen = () => {

    return (
        <div className={styles.homeScreen}>
            <Link className={styles.link} to="/game">
                <Button
                    label='Play'
                    color='#4CC0A6'
                />
            </Link>
            <Link className={styles.link} to="/ranking">
                <Button 
                    label='Ranking'
                    color='#FF5054'
                />
            </Link>
        </div>
    );
};

export default HomeScreen;