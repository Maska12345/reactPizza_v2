import React from 'react';
import styles from './NotFoundBlock.module.scss'

const NotFound = () => {
    return (
        <h1 className={styles.root}>
            <span>=(</span>
            <br/>
            Not Found
        </h1>
    );
};

export default NotFound;