"use client";
import { useState } from "react";

export default function Range() {
  const [selectedValue, setSelectedValue] = useState(50);

  const handleRangeChange = (e: any) => {
    setSelectedValue(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <label htmlFor="customRange">Vocation Duration</label>
      <input
        type="range"
        id="customRange"
        name="customRange"
        className="w-full"
        min="0"
        max="30"
        step="1"
        value={selectedValue}
        onChange={handleRangeChange}
      />
      <p>Selected value: {selectedValue}</p>
    </div>
  );
}
