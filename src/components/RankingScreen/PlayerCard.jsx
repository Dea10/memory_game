import React from 'react';
import styles from './PlayerCard.module.scss'

const PlayerCard = ({ player, position }) => {
    const { name, time } = player;

    return (
        <div className={styles.card}>
            <div className={styles.position}>{position}</div>
            <div className={styles.playerName}>{name} ({time})</div>
        </div>
    );
}

export default PlayerCard;