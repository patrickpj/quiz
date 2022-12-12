import React, { Component, useEffect, useState } from 'react';
import Answers from './Answer';

export default function Quiz(props) {
  

   function getAnswers() {

   }
  
   

   return (
       <div className='quiz'>
        
        <h3 className="question">{props.question}</h3>
        <Answers clicked={props.isHeld} hold={props.holdAnswer} options={props.answers} />
       </div>      
    )
}