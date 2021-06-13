import React, { useState } from 'react';
import Button from '../Buttons/Button';
import styles from './Scoreboard.module.scss';
import Timer from './Timer';

type ScoreboardProps = {
    score: number;
}

const Scoreboard = ({ score } : ScoreboardProps) => {

    return (
        <div className={styles.scoreboard}>
            <Timer />
            <h3>Score: {score}</h3>
        </div>
    );
};

export default Scoreboard;