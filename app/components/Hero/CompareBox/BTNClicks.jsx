import React, { useState, useEffect } from 'react';

export default function BTNClicks({ title, filterType, filter, setfilter, tempTitle }) {
    const [bgColor, setBgColor] = useState('transparent');

    const handleClick = () => {
        // console.log({ title });
        const nextFilterState = {
            ...filter,
            [filterType]: {
                ...filter[filterType],
                [title.toLowerCase()]: !filter[filterType][title.toLowerCase()]
            }
        };
        setBgColor(nextFilterState[filterType][title.toLowerCase()] ? 'linear-gradient(135deg, rgba(125,227,250,1) 16%, rgba(51,59,255,1) 74%)' : 'transparent');
        setfilter(nextFilterState);
        // console.log({ nextFilterState });
    };

    useEffect(() => {
        // console.log({ filter });
    }, [filter]);

    return (
        <div
            className='py-2 px-3 rounded-md border border-[#3338D3] text-white text-sm'
            style={{ background: bgColor, cursor: 'pointer' }}
            onClick={handleClick}
        >
            {filterType === "sizeType" ? tempTitle :  title}
        </div>
    );
}
