import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Buttons/Button';
import styles from './RankingScreen.module.scss';

const RankingScreen = () => {

    const arr = [1, 2, 3, 4, 5];
    const mockData = arr.map(item => ({
        nickname: `player0${item}`,
        time: Math.floor(Math.random() * 10)
    }));

    const ranking = JSON.parse(localStorage.getItem('ranking') || '[]');

    return (
        <div className={styles.rankingScreen}>
            <div className={styles.buttons}>
                <Link className={styles.link} to="/home">
                    <Button
                        label='Home'
                        color='#4CC0A6'
                    />
                </Link>
            </div>
            <ul className={styles.ranking}>
                {
                    ranking.sort((a: { time: number; }, b: { time: number; }) => (a.time - b.time)).slice(0, 4).map((player: { nickname: string; time: number; }, idx: number) => {
                        return (
                            // TODO: Create a card component
                            <li key={idx}>
                                {idx + 1} - {player.nickname}
                                <p>{`Time: ${player.time} sec`}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default RankingScreen;