import React, { Component, useEffect, useState } from 'react';


export default function Quiz(props) {

   function update(question, answer) {
    props.handleClick(question, answer)
   }
  
    // const style = { backgroundColor: props.isHeld ? "#D6DBF5" : "white" }
   return (
       <div className='quiz'>
        
        <h3 className="question">{props.question}</h3>
        <div className='answer'>
            { props.answers.map( (answer, index) => 
        <button key={index} 
            onClick={() => props.handleClick(props.question, answer)}
        className={`"answer-button" 
        ${answer === props.userSelection ? 'selected':''}
        ${props.checkResult && answer === props.correctAnswer ? 'correct':''}
        ${props.checkResult && answer === props.userSelection && answer !== props.correctAnswer ? 'incorrect':''}
        ${props.checkResult && answer !== props.correctAnswer ? 'dim':''}`} >{answer}</button>)}
        </div>
        
       </div>      
    )
}