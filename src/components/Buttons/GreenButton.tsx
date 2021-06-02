import React from 'react';
import styles from './GreenButton.module.scss';

type GreenButtonProps = {
    buttonLabel: string;
}

const GreenButton = ({ buttonLabel }: GreenButtonProps) => {
    return (
        <div className={styles.button}>
            <span>{buttonLabel}</span>
        </div>
    );
};

export default GreenButton;