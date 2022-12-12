import React, { Component } from 'react';

export default function Start() {
    return (
        <div className='start'>
            <img src="./yellow.svg"  className='yellow'/>
            <h1 className='title'>Quizzical</h1>
            <h2 className='description'>Some description</h2>
            <button className='start-button'>Start quiz</button>
        </div>
    )    
}