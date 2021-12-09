import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Buttons/Button';
import { getRanking } from '../helpers/getRanking';
import styles from './RankingScreen.module.scss';

const RankingScreen = () => {
    const [ranking, setRanking] = useState([]);

    useEffect(() => {
        getRanking().then(setRanking);
    }, [])

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
                    ranking.sort((a: { time: number; }, b: { time: number; }) => (a.time - b.time)).slice(0, 4).map((player: { name: string; time: number; }, idx: number) => {
                        return (
                            // TODO: Create a card component
                            <li key={idx}>
                                {idx + 1} - {player.name}
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