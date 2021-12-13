import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span>Powered by: Daniel Espinosa</span>
            <a href="https://www.linkedin.com/in/daniel-espinosa-arias/" target="_blank" className={styles.link}>LinkedIn</a>
            <a href="https://github.com/Dea10" target="_blank" className={styles.link}>Github</a>
        </footer>
    );
}

export default Footer;