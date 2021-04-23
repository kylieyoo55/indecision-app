import React from 'react';

import Option from './option';

 const Options=(props)=>{
    const options = props.options;
    
    return ( 
    <div >
    <div className="widget-header">
    <h1 className="widget-header__title">Your Options</h1>
        <button 
        onClick = {props.handleDeleteOptions}
        className="button button--link" > REMOVE ALL 
        </button> 
        </div>

        {options.length == 0 && <p className="widget__message">Please add an option to get started!</p>}
        {
        options.map((option,index) =>
         < Option 
            text = { option}
            index={index}
            key = {index}
            handleDeleteOption={(e)=>{props.handleDeleteOption(option)}}    
            />)
        }
        </div>  )
}

export default Options;