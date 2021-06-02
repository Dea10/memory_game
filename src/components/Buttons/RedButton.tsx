import React from 'react';
import styles from './RedButton.module.scss';

type RedButtonProps = {
    buttonLabel: string;
}

const RedButton = ({ buttonLabel }: RedButtonProps) => {
    return (
        <div className={styles.button}>
            <span>{buttonLabel}</span>
        </div>
    );
};

export default RedButton;