import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Options from './options';

const OptionModal=(props)=>(
<Modal 
isOpen={!!props.selectedOption}
contentLabel='Selected Option'
ariaHideApp={false}
onRequestClose={props.handleCloseModal}
closeTimeoutMS={200}
className="modal"
>
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleCloseModal}>GO BACK</button>
</Modal>
);

export default OptionModal;