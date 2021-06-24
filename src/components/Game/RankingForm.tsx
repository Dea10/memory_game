import React, { useState } from 'react';
import Button from '../Buttons/Button';
import styles from './RankingForm.module.scss';

type RankingFormProps = {
    time: number;
    setIsRanked: (value: boolean) => void;
}

type player = {
    nickname: string;
    time: number;
}

const RankingForm = ({ time, setIsRanked }: RankingFormProps) => {

    const [nickname, setNickname] = useState('');

    const handleOnChange = (event: any) => {
        setNickname(event.target.value);
    }

    const saveRecord = (event: any) => {
        event.preventDefault();

        setIsRanked(true);

        const newPlayer = {
            nickname,
            time
        }

        const localRanking = JSON.parse(localStorage.getItem('ranking') || '[]');
        localRanking.push(newPlayer);

        localStorage.setItem('ranking', JSON.stringify(localRanking));
    };

    return (
        <form 
            onSubmit={saveRecord}
            className={styles.rankingForm}
        >
            <input type='text' className='form-control' onChange={handleOnChange} />
            <Button 
                label='Send record!'
                color='#FF5054'
                onClick={saveRecord}
            />
        </form>
    );
}

export default RankingForm;