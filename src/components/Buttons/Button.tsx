import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
    label: string;
    color: string;
    onClick?: (smt?: any) => void;
}

const Button = ({ label, color, onClick }: ButtonProps) => {

    const divStyle = {
        backgroundColor: color
    };

    return (
        <div className={styles.button} style={divStyle} onClick={onClick}>
            <span>{label}</span>
        </div>
    );
};

export default Button;