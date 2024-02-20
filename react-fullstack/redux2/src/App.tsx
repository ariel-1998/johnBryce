import React from 'react';
import logo from './logo.svg';
import './App.css';
import { addValue } from './App/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const { value } = useSelector((state: any) => state.counter);
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
      <div>
      <button>+</button>
      {value}
      </div>
      <div>
      <button onClick={() => dispatch(addValue(3))}>+3</button>
      <span>{value}</span>
      </div>
      </header>
    </div>
  );
}

export default App;
