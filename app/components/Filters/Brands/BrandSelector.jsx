"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import styles from "./BrandSelector.module.css";

export default function BrandSelector({ brandName, logo, filterType, filter, setfilter }) {
    const [bgColor, setBgColor] = useState('transparent');
    const [imgFilter, setimgFilter] = useState('none');

    const handleClick = () => {
        // console.log({ title });
        const nextFilterState = {
            ...filter,
            [filterType]: {
                ...filter[filterType],
                [brandName.toLowerCase()]: !filter[filterType][brandName.toLowerCase()]
            }
        };
        setBgColor(nextFilterState[filterType][brandName.toLowerCase()] ? 'linear-gradient(135deg, rgba(125,227,250,1) 16%, rgba(51,59,255,1) 74%)' : 'transparent');
        setimgFilter(nextFilterState[filterType][brandName.toLowerCase()] ? 'grayscale(100%) brightness(1000%) contrast(1000%)' : 'none');
        setfilter(nextFilterState);
        // console.log({ nextFilterState });
    };

    useEffect(() => {
        // console.log({ filter });
    }, [filter]);
    return (
        <div className={styles.brnadSelector}
            onClick={handleClick}
            style={{
                background: bgColor,
            }}
        >
            <Image
                src={logo}
                width={50}
                height={50}
                alt='Brand'
                style={{ filter: imgFilter, cursor: 'pointer' }}
            />
            <span>
                {brandName}
            </span>
        </div>
    );
}

