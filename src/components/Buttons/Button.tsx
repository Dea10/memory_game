import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
    buttonLabel: string;
}

const Button = ({ buttonLabel }: ButtonProps) => {
    return (
        <div className={styles.button}>
            <span>{buttonLabel}</span>
        </div>
    );
};

export default Button;