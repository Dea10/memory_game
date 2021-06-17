import React, { useState } from 'react';
import Button from '../Buttons/Button';
import styles from './RankingForm.module.scss';

type RankingFormProps = {
    time: number;
}

type player = {
    nickname: string;
    time: number;
}

const RankingForm = ({ time }: RankingFormProps) => {

    const [nickname, setNickname] = useState('');

    const handleOnChange = (event: any) => {
        setNickname(event.target.value);
    }

    const saveRecord = (event: any) => {
        event.preventDefault();

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
                label='submit'
                color='black'
                onClick={saveRecord}
            />
        </form>
    );
}

export default RankingForm;