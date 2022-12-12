import { useState, useEffect } from 'react'
import Quiz from './components/Quiz'
import Start from './components/Start'

function App() {


  const [quiz, setQuiz] = useState([]) 

useEffect(() => {
  fetch("https://opentdb.com/api.php?amount=5")
      .then(res => res.json())
      .then(data => {
          const results = data.results
          const set = results.map((data, i) => {
           return{
            ...data, 
            id:i,
          answers: [...data.incorrect_answers, data.correct_answer],
           isHeld: false
           }
          })
          setQuiz(set)

  })
      
 },[])

  function holdAnswer(e,id) {
      setQuiz(prevData => 
        prevData.map(data =>{
        
        return data.id === id ? {
          ...data,
          isHeld: true,
          holdValue: e.target.innertext
        } : data
      }))
      console.log(id)
  }

 const quizElements = quiz.map( ques => <Quiz isHeld={ques.isHeld} holdAnswer={holdAnswer} answers={ques.answers} question={ques.question} /> )
  return (
    <div className="App">
      <span className='yellow'></span>
      <span className='blue'></span>
      <h1>Quizzical</h1>
      {/* <Start /> */}
      {quizElements}
    </div>
  )
}

export default App
