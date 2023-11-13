import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Slider from './Slider.js';
import './Slider.css';

import { generateArray, randomIntFromInterval } from './utils/arrayUtils';
import { bubbleSort } from './utils/bubbleSort';
import { mergeSort } from './utils/mergeSort';
import { quickSort } from './utils/quickSort';

function App() {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [sortedIndex, setSortedIndex] = useState(null);
  const [highlightedIndices, setHighlightedIndices] = useState([]);
  const [delay, setDelay] = useState(10);

  const handleDelayChange = (newDelay) => {
    setDelay(newDelay);
  };

  const resetSortingState = useCallback(() => {
    setSorting(false);
    setSortedIndex(null);
    setHighlightedIndices([]);
  }, []);

  const handleSorting = async (sortingFunction) => {
    setSorting(true);
    let arr = [...array];
    await sortingFunction(arr, setArray, setHighlightedIndices, setSortedIndex, delay);
    resetSortingState();
  };

  useEffect(() => {
    generateArray(setArray, resetSortingState);
  }, [resetSortingState]);

  return (
    <div className="app">
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className={`array-bar ${idx === sortedIndex ? 'sorted' : ''} ${
              highlightedIndices.includes(idx) ? 'array-bar-highlighted' : ''
            }`}
            key={idx}
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
      <div className="button-container">
        <button onClick={() => generateArray(setArray, resetSortingState)} disabled={sorting}>
          Generate New Array
        </button>
        <button onClick={() => handleSorting(bubbleSort)} disabled={sorting}>
          Bubble Sort
        </button>
        <button onClick={() => handleSorting(mergeSort)} disabled={sorting}>
          Merge Sort
        </button>
        <button onClick={() => handleSorting(quickSort)} disabled={sorting}>
          Quick Sort
        </button>
        <div className="slider-container">
          <label htmlFor="delay-slider" className="slider-label">
            Delay: {delay}ms
          </label>
          <Slider id="delay-slider" min={1} max={100} value={delay} onChange={handleDelayChange} />
        </div>
      </div>
    </div>
  );
}

export default App;
