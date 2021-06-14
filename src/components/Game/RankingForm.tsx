import React from 'react';
import Button from '../Buttons/Button';
import styles from './RankingForm.module.scss';

const RankingForm = () => {
    return (
        <form className={styles.rankingForm}>
            <input type='text' className='form-control' />
            <Button 
                label='submit'
                color='black'
                onClick={() => {}}
            />
        </form>
    );
}

export default RankingForm;