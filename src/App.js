import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(input + e.target.value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const clearInput = () => {
    setInput('');
  };

  return (
    <div className="App">
      <div className="calculator">
        <input type="text" value={input} readOnly />
        <div className="keypad">
          <button onClick={clearInput}>Clear</button>
          <button value="/" onClick={handleInput}>&divide;</button>
          <button value="*" onClick={handleInput}>&times;</button>
          <button value="7" onClick={handleInput}>7</button>
          <button value="8" onClick={handleInput}>8</button>
          <button value="9" onClick={handleInput}>9</button>
          <button value="-" onClick={handleInput}>&ndash;</button>
          <button value="4" onClick={handleInput}>4</button>
          <button value="5" onClick={handleInput}>5</button>
          <button value="6" onClick={handleInput}>6</button>
          <button value="+" onClick={handleInput}>+</button>
          <button value="1" onClick={handleInput}>1</button>
          <button value="2" onClick={handleInput}>2</button>
          <button value="3" onClick={handleInput}>3</button>
          <button value="0" onClick={handleInput}>0</button>
          <button value="." onClick={handleInput}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
