"use client"
import {React, useState} from 'react';
import styles from './Button.module.css';


export default function Button(prop) {
    const [bgColor, setBgColor] = useState('#FFFFFF1A');

    const handleClick = () => {
        setBgColor(bgColor === '#FFFFFF1A' ? 'linear-gradient(90deg, rgba(125, 227, 250, 1) 16%, rgba(89, 146, 252, 1) 44%, rgba(51, 59, 255, 1) 74%)' : '#FFFFFF1A'); // Toggle between white and blue
    };

    return (
        <button className={styles.instrumentBtn} type="button" style={{ background: bgColor, cursor: 'pointer' }}
        onClick={handleClick}>
            {prop.title}
        </button>
    )
}
