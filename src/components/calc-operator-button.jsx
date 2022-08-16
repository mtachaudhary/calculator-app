import React from 'react';

import './css/operator-button-style.scss';

function OperatorButtons(props) {
    return(
        <div className="operator-buttons">
          <button value='multiply' onClick={props.handleOperator} style={props.style.operator}>x</button>
          <button value='subtract' onClick={props.handleOperator} style={props.style.operator}>-</button>
          <button value='add' onClick={props.handleOperator} style={props.style.operator}>+</button>
          <button value='divide' onClick={props.handleOperator} style={props.style.operator}>/</button>
        </div>
    );
}

export default OperatorButtons;