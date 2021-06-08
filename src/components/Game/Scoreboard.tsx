import React from 'react';
import styles from './Scoreboard.module.scss';

type ScoreboardProps = {
    score: number;
}

const Scoreboard = ({ score } : ScoreboardProps) => {

    return (
        <div className={styles.scoreboard}>
            <h3>Score: {score}</h3>
            <h3>Time: 00:00</h3>
        </div>
    );
};

export default Scoreboard;