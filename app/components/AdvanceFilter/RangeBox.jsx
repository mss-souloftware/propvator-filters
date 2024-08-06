"use client"
import React, { useState } from 'react';
import { Slider } from "@nextui-org/react";
import styles from './RangeBox.module.css';
import tableBodyData from '@/app/data/tableDataBody.json';


export default function RangeBox({ data, setData, dataTpye }) {
  const [value, setValue] = useState([100, 700]);

  const handleRangeChangeHandler = (val) => {
    setValue(val)
    const updatedData = tableBodyData.filter(i => i[dataTpye] > value[0] && i[dataTpye] < value[1])
    setData(updatedData)
  }

  const handleMinChange = (e) => {
    const newMin = parseInt(e.target.value, 10);
    if (newMin <= value[1] && newMin >= 0) {
      setValue([newMin, value[1]]);
    }
  };

  const handleMaxChange = (e) => {
    const newMax = parseInt(e.target.value, 10);
    if (newMax >= value[0] && newMax <= 1000) {
      setValue([value[0], newMax]);
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
            value={value[1]}
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
            value={value[0]}
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
          value={value}
          onChange={handleRangeChangeHandler}
          className="max-w-md"
        />
      </div>
    </div>
  );
}
