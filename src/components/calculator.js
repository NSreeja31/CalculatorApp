import {useState} from "react";
import React from "react";
export default function Calculator(){

  const [res, setValue] = useState("");

  // const evaluate = () => {
  //   setValue(eval(res))
  // };

  const evaluate = () => {
    try {
      // Ensure 'res' is a string
      if (typeof res === 'string') {
        // Use eval to evaluate the expression
        const result = eval(res);
  
        // Check if the result is a valid number
        if (!isNaN(result)) {
          setValue(result);
        } else {
          alert('Invalid expression result');
          setValue("")
        }
      } else {
        alert('Invalid expression format');
        setValue("")
      }
    } catch (error) {
      alert('Error evaluating expression:', error.message);
      setValue("")
      // Handle the error or display an error message as needed
    }
  };
  
  
  const handlebackspace = () => {
    setValue((prev)=> {
      if (typeof prev === 'string' && prev.length > 0) {
      return prev.slice(0, -1);
      }
    // Handle the case where prev is not a string or an empty string
    return prev;})
  };

  const handleClick = (e) => {
      setValue((prev)=>prev+e.target.name)
  };
  
  const cleardisplay = () => {
      setValue("")
  };

    return (
      <>

        <div className="container">
          <div className="calculator">
              <input type="text" value={res} onChange={(e) => setValue(e.target.value)}/>
            <div>
              <button name="clear" onClick={cleardisplay}>C</button>
              <button name="back" onClick={handlebackspace}>←</button>
              <button name="%" onClick={handleClick}>%</button>
              <button name="/" onClick={handleClick}>÷</button>
              <button name="*" onClick={handleClick}>*</button>
            </div>
            <div>
              <button name="7" onClick={handleClick}>7</button>
              <button name="8" onClick={handleClick}>8</button>
              <button name="9" onClick={handleClick}>9</button>
              <button name="4" onClick={handleClick}>4</button>
              <button name="+" onClick={handleClick}>+</button>
            </div>
            <div>
              <button name="5" onClick={handleClick}>5</button>
              <button name="6" onClick={handleClick}>6</button>
              <button name="1" onClick={handleClick}>1</button>
              <button name="2" onClick={handleClick}>2</button>
              <button name="-" onClick={handleClick}>-</button>
            </div>
            <div>
              <button name="3" onClick={handleClick}>3</button>
              <button name="00" onClick={handleClick}>00</button>
              <button name="0" onClick={handleClick}>0</button>
              <button name="." onClick={handleClick}>.</button>
              <button name="=" onClick={evaluate} className="equalBtn">=</button>
            </div>             
          </div>
        </div>
      </>
    )
  
}