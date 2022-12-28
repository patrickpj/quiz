import React, { Component } from 'react';

export default function Start(props) {
    return (
        <div className='start'>
            <img src="./yellow.svg"  className='yellow'/>
            <h1 className='title'>Quizzical</h1>
            <h2 className='description'>Some description</h2>
            <button className='start-button' onClick={props.startGame}>Start quiz</button>
        </div>
    )    
}