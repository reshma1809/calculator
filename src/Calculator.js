import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [memory, setMemory] = useState(null);

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === 'B') {
      setInput((prevInput) => prevInput.slice(0, -1));
    } else if (value === '%') {
      try {
        setResult((eval(input) / 100).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'MS') {
      setMemory(input);
      setResult('Memory stored');
    } else if (value === 'MR') {
      setInput(memory);
    } else if (value === 'MC') {
      setMemory(null);
    } else if (value === 'M+') {
      try {
        const newValue = memory ? eval(memory + '+' + input) : eval(input);
        setMemory(newValue.toString());
        setResult('Memory updated');
      } catch (error) {
        setResult('Error');
      }
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <>
      {/* 🌟 Animated floating stars background */}
      <div className="stars">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* 💖 Calculator box */}
      <div className="calculator">
        <h1>Calculator</h1>
        <div className="display">
          <div className="input-container">
            <input type="text" value={input} readOnly />
          </div>
          <div className="result">{result}</div>
        </div>

        <div className="buttons">
          <button className="clear" onClick={() => handleClick('C')}>C</button>
          <button className="backspace" onClick={() => handleClick('B')}>⌫</button>
          <button className="percentage" onClick={() => handleClick('%')}>%</button>
          <button className="operator" onClick={() => handleClick('/')}>÷</button>

          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button className="operator" onClick={() => handleClick('*')}>×</button>

          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button className="operator" onClick={() => handleClick('-')}>−</button>

          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button className="operator" onClick={() => handleClick('+')}>+</button>

          <button onClick={() => handleClick('0')}>0</button>
          <button className="dot" onClick={() => handleClick('.')}>.</button>
          <button className="equals" onClick={() => handleClick('=')}>=</button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
