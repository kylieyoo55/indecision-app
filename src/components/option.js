import React from 'react';

const Option=(props)=>{
    const text = props.text;
    return (
<div className="option">
<p className="option__text">{props.index+1}. {text}</p>

<button 
className="button button--link"
onClick={props.handleDeleteOption}
>DELETE</button>
</div>
)}

export default Option;