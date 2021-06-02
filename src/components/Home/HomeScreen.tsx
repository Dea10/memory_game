import React from 'react';
import GreenButton from '../Buttons/GreenButton';
import RedButton from '../Buttons/RedButton';
import styles from './HomeScreen.module.scss';

const HomeScreen = () => {
    return (
        <div className={styles.homeScreen}>
            <GreenButton
                buttonLabel='Play'
            />
            <RedButton 
                buttonLabel='Ranking'
            />
        </div>
    );
};

export default HomeScreen;