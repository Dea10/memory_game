import React from 'react';
import styles from './Scoreboard.module.scss';
import Timer from './Timer';

type ScoreboardProps = {
    score: number;
    setTime: (secs: number) => void;
}

const Scoreboard = ({ score, setTime } : ScoreboardProps) => {

    return (
        <div className={styles.scoreboard}>
            <Timer 
                setTime={setTime}
            />
            <h3>Score: {score}</h3>
        </div>
    );
};

export default Scoreboard;