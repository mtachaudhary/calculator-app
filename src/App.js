import React, {useState} from "react";

import CalcResult from "./components/calc-result";
import NumberButtons from "./components/calc-number-button";
import OperatorButtons from "./components/calc-operator-button";

import './App.scss';

function App() {
  const [val, setVal] = useState(0);
  const [result, setResult] = useState(0);
  const [tempVal, setTempVal] = useState(0);
  const [operator, setOperator] = useState();
  const [placeholder, setPlaceholder] = useState();

  const [resultStyle, setResultStyle] = useState({
    screen: {},
    result: {},
  });
  const [styleVal, setStyle] = useState({
    operator: {},
    dot: {},
  });

  const handleNumber = (e) => {
    setVal( val ? val + e.target.value : parseFloat(e.target.value) );
  };
  const handleDot = (e) => {
    setVal( val ? val + e.target.value : '0' + e.target.value );
    setStyle({
      dot: {pointerEvents: "none"},
    });
  };

  const handleOperator = (e) => {
    let symbol = (e.target.value === 'add') ? '+' : 
              (e.target.value === 'subtract') ? '-' : 
              (e.target.value === 'multiply') ? 'x' : 
              (e.target.value === 'divide') ? '/' : '';

    setOperator( e.target.value );
    setTempVal( parseFloat(val) );
    setPlaceholder( val + symbol );

    setVal('');
    setStyle({
      operator: {pointerEvents: "none"},
      dot: {},
    });
  };

  const handleResult = (e) => {
    let _result = '(Unknown)';

    if (operator === 'add') {
      _result = tempVal + parseFloat(val);
    } else if (operator === 'subtract') {
      _result = tempVal - parseFloat(val);
    } else if (operator === 'multiply') {
      _result = tempVal * parseFloat(val);
    } else if (operator === 'divide') {
      _result = tempVal / parseFloat(val);
    }

    setResult( _result );
    setResultStyle({
      screen: {display: 'none'},
      result: {display: 'block'},
    });
  };
  
  const handleClear = (e) => {
    setVal(0);
    setTempVal(0);
    setResult(0);
    setStyle({});
    setOperator({});
    setPlaceholder({});
    setResultStyle({
      screen: {},
      result: {},
    });
  };

  return (
    <div className="calcApp">
      <CalcResult value={val} result={result} placeholder={placeholder} style={resultStyle} />
      <div className="calc-buttons-wrapper">
        <NumberButtons 
          handleNumber={handleNumber} 
          handleDot={handleDot}
          handleResult={handleResult} 
          style={styleVal}
        />
        <OperatorButtons 
          handleOperator={handleOperator} 
          style={styleVal}
        />
      </div>
      <button className="clear-btn" onClick={() => {handleClear();}}>Clear</button>
    </div>
  );
}

export default App;
