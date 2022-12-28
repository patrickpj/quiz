import axios from 'axios'
import { useState, useEffect } from 'react'
import Quiz from './components/Quiz'
import Start from './components/Start'


function App() {


  const [quiz, setQuiz] = useState([]) 
  const [checkResult, setCheckResult] = useState(false)
  const [count, setCount] = useState(0)
  const [game, setGame] = useState(false)

  function startGame() {
    setGame(true)
  }
  
useEffect(() => {
  if(quiz.length === 0){axios("https://opentdb.com/api.php?amount=5")
      .then(res => {
        console.log(res.data.results)
        setQuiz(res.data.results.map((data,i) => {
          return {
            ...data,
            id: i,
            answers: shuffle([...data.incorrect_answers, data.correct_answer]),
            correctAnswer: data.correct_answer,
            userSelection:''
          }
        }))
      })}  
 },[quiz] )

 function shuffle(array) {
    for(let i=0; i< array.length; i++){
      let item = array[i]
      const randomNum = Math.floor(Math.random() * array.length)
      array[i] = array[randomNum]
      array[randomNum] = item
      return array
    }
 }

 function handleClick(question, answer){
  setQuiz(prevData => 
    prevData.map(data =>{
    
    return data.question === question ? {
      ...data,
      userSelection: answer
    } : data
  }))
}

function checkGame() {
  const hasSelected = quiz.some( data => data.userSelection === '' )
  hasSelected ? alert('Please answer all the questions!') : setCheckResult(true)

  quiz.forEach(item => {
    item.userSelection === item.correctAnswer && setCount(oldValue => oldValue+1)
  })
}

function restart(){
  setCount(0)
  setQuiz([])
  setCheckResult(false)
}

const quizElements = quiz.map(item => 
  <Quiz key={item.question} 
  question={item.question}  
  answers={item.answers} 
  correctAnswer={item.correctAnswer}
  userSelection={item.userSelection} 
  handleClick={handleClick}
  checkResult={checkResult}/>)

  return (
    <div className="App">
     
      <span className='yellow'></span>
      <span className='blue'></span>
      
      {game ?
        <div className='game'>
          <h1>Quizzical</h1> 
          {quizElements}
          {
           !checkResult ? quiz.length > 0 && <button className='check' onClick={checkGame}>Check Answers</button>
          : 
          <div className='result'>
            <p className='score'>Your score: {count} / 5</p>
            <button className='restart' onClick={restart}>Play Again</button>
          </div>}
        </div>
        : 
        <Start startGame={startGame} />
      }
    </div>
  )
}

export default App
