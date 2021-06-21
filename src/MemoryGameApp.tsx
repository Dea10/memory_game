import React from 'react';
import AppRouter from './router/AppRouter';
import styles from './MemoryGameApp.module.scss';

const MemoryGameApp = () => {
    return (
        <div className={styles.app}>
            <AppRouter />
        </div>
    );
};

export default MemoryGameApp;