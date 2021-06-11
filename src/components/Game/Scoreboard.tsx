import React, { useState } from 'react';
import Button from '../Buttons/Button';
import styles from './Scoreboard.module.scss';
import Timer from './Timer';

type ScoreboardProps = {
    score: number;
}

const Scoreboard = ({ score } : ScoreboardProps) => {

    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    }

    return (
        <div className={styles.scoreboard}>
            <Timer />
            <h3>Score: {score}</h3>
            {
                !isActive && <Button label='Start' color='#ffcb05' onClick={handleToggle} />
            }
        </div>
    );
};

export default Scoreboard;