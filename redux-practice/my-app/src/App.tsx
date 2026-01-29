import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './app/store';
import { counterSlice, increaseTime, increment } from './feature/counter/counterSlice';
import { countRedAsync, incReducer } from './feature/counterReducer/counterRed';

function App() {
  
  const count = useSelector((state:RootState)=>state.counter.value);
  const loaded = useSelector((state:RootState)=>state.counter.loading);
  const dispatch = useDispatch<AppDispatch>();

  const countRed = useSelector((state:RootState)=>state.counterRed.value);
  const loadedRed = useSelector((state:RootState)=>state.counterRed.loading);
  return (
    <div className="App">
      <h1>The count is {count}</h1>
      <button onClick={() => dispatch(increaseTime(10))}
        disabled={loaded}>
        {!loaded ? 'Increase' : 'Loading...'}
      </button>

      <br/>
      <h1>Counte is {countRed}</h1>
      <button onClick={() => dispatch(countRedAsync(20))}
        disabled={loadedRed}>
        {!loadedRed?"Increase":"loading..."}
      </button>
    </div>
  );
}

export default App;