import React from 'react';
import styles from './header.module.scss';

const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                Поиск авиабилетов
            </div>
        </header>
    );
};

export default Header;