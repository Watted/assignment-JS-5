import React from 'react';
import './RightTree.css';
import logo from './send.png';

const RightTree = (props) => {
    return (
        <div className='right-side ma0 pa0'>
            <textarea className='textArea-label ma0 pa0' value={props.message['message']}/>
            <div className='action'>
                <input onChange={props.onInputChange} className='input-text ma0 pa0'/>
                <button onClick={props.onButtonSubmit} className='btn-send ma0 pa0'><img src={logo} alt='logo'/></button>
            </div>
        </div>
    );
};

export default RightTree;