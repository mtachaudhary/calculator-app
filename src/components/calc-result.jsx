import React from 'react';

import './css/calc-result-style.scss';

function CalcResult(props) {
    return(
        <div className="result-screen">
            <input 
                type="text" 
                className='screen' 
                style={props.style.screen} 
                value={props.value} 
                placeholder={props.placeholder}
                readOnly
            />
            {/* <div className='screen' style={props.style.screen}>{props.value}</div> */}
            <div className='result' style={props.style.result}>{props.result}</div>
        </div>
    );
}

export default CalcResult;