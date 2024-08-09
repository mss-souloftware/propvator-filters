"use client"
import React, { useState } from 'react';
import { Slider } from "@nextui-org/react";
import styles from './RangeBox.module.css';

export default function RangeBox({ data, setData, dataTpye, filter, setfilter }) {
  const handleRangeChangeHandler = (val) => {
    const nextFilterState = {
      ...filter,
      rangeSlider: {
        ...filter.rangeSlider,
        [dataTpye]: val
      }
    };
  
    setfilter(nextFilterState);
  }
  

  const handleMinChange = (e) => {
    const newMin = parseInt(e.target.value, 10);
    if (newMin <= filter.rangeSlider[dataTpye][1] && newMin >= 0) {
      const nextFilterState = {
        ...filter,
        rangeSlider: {
            ...filter.rangeSlider,
            [dataTpye]: [newMin, filter.rangeSlider[dataTpye][1]]
        }
      };

      setfilter(nextFilterState);

    }
  };

  const handleMaxChange = (e) => {
    const newMax = parseInt(e.target.value, 10);
    if (newMax >= filter.rangeSlider[dataTpye][0] && newMax <= 1000) {
      const nextFilterState = {
        ...filter,
        rangeSlider: {
            ...filter.rangeSlider,
            [dataTpye]: [filter.rangeSlider[dataTpye][0], newMax]
        }
      };

      setfilter(nextFilterState);
    }
  };

  return (
    <div className={`${styles.RangeBox} relative flex justify-between`}>
      <div className="inputWrapper flex flex-col w-10/12 justify-between">
        <div className="numberPanel">
          <label htmlFor="maxPrice">Max</label>
          <input
            type="number"
            name="maxPrice"
            id="maxPrice"
            value={filter.rangeSlider[dataTpye][1]}
            onChange={handleMaxChange}
            placeholder='400'
          />
        </div>
        <div className="numberPanel">
          <label htmlFor="minPrice">Min</label>
          <input
            type="number"
            name="minPrice"
            id="minPrice"
            value={filter.rangeSlider[dataTpye][0]}
            onChange={handleMinChange}
            placeholder='34'
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-2/12 h-[150px] max-w-md items-start justify-center">
        <Slider
          formatOptions={{ style: "currency", currency: "USD" }}
          step={10}
          orientation="vertical"
          maxValue={1000}
          minValue={0}
          value={filter.rangeSlider[dataTpye]}
          onChange={handleRangeChangeHandler}
          className="max-w-md"
        />
      </div>
    </div>
  );
}
