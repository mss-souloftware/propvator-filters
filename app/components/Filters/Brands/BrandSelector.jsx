"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import styles from "./BrandSelector.module.css";

export default function BrandSelector(props) {
    const [isInverted, setIsInverted] = useState(false);
    const [bgColor, setBgColor] = useState('#08271F');

    const handleClick = () => {
        setIsInverted(!isInverted); // Toggle invert filter
        setBgColor(bgColor === '#08271F' ? 'linear-gradient(135deg, rgba(125,227,250,1) 16%, rgba(51,59,255,1) 74%)' : '#08271F'); // Toggle background color
    };

    return (
        <div className={styles.brnadSelector}
            onClick={handleClick}
            style={{
                background: bgColor,
            }}
        >
            <Image
                src={props.logo}
                width={50}
                height={50}
                alt='Brand'
                style={{ filter: isInverted ? 'grayscale(100%) brightness(1000%) contrast(1000%)' : 'none' }}
            />
            <span>
                {props.brandName}
            </span>
        </div>
    );
}

