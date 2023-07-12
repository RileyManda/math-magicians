import React, { useState } from 'react';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setState((prevState) => {
      const newState = calculate(prevState, buttonName, operate);
      return newState;
    });
  };

  return (
    <div className="Container">
      <div className="calcInput">
        <input type="text" value={state.next || state.total || '0'} />
      </div>
      <div className="BodyContainer">
        <div className="calcBodyleft">
          <div className="LeftButtonContainer">
            <button
              type="button"
              className="leftButtons"
              onClick={() => handleClick('AC')}
            >
              AC
            </button>
            <button
              type="button"
              className="leftButtons"
              onClick={() => handleClick('+/-')}
            >
              +/-
            </button>
            <button
              type="button"
              className="leftButtons"
              onClick={() => handleClick('%')}
            >
              %
            </button>
            {' '}
            <button
              type="button"
              className="leftButtons"
              onClick={() => handleClick('7')}
            >
              7
            </button>
            <button
              type="button"
              className="leftButtons"
              onClick={() => handleClick('8')}
            >
              8
            </button>
            <button
              type="button"
              className="leftButtons"
              onClick={() => handleClick('9')}
            >
              9
            </button>
            <button
              type="button"
              className="leftButtons"
              onClick={() => handleClick('4')}
            >
              4
            </button>
            <button
              type="button"
              className="leftButtons"
              onClick={() => handleClick('5')}
            >
              5
            </button>
            <button
              type="button"
              className="leftButtons"
              onClick={() => handleClick('6')}
            >
              6
            </button>
            <button
              type="button"
              className="leftButtons"
              onClick={() => handleClick('1')}
            >
              1
            </button>
            <button
              type="button"
              className="leftButtons"
              onClick={() => handleClick('2')}
            >
              2
            </button>
            <button
              type="button"
              className="leftButtons"
              onClick={() => handleClick('3')}
            >
              3
            </button>
            <div className="FooterButtons">
              <button
                type="button"
                className="zero FooterButtons"
                onClick={() => handleClick('0')}
              >
                0
              </button>
              <button
                type="button"
                className="fullstop FooterButtons"
                onClick={() => handleClick('.')}
              >
                .
              </button>
            </div>
          </div>
        </div>
        <div className="calcBodyright">
          <div className="RightButtonContainer">
            <button
              type="button"
              className="rightButtons"
              onClick={() => handleClick('÷')}
            >
              ÷
            </button>
            <button
              type="button"
              className="rightButtons"
              onClick={() => handleClick('x')}
            >
              ×
            </button>
            <button
              type="button"
              className="rightButtons"
              onClick={() => handleClick('-')}
            >
              -
            </button>
            <button
              type="button"
              className="rightButtons"
              onClick={() => handleClick('+')}
            >
              +
            </button>
            <button
              type="button"
              className="rightButtons"
              onClick={() => handleClick('=')}
            >
              =
            </button>
            {' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
