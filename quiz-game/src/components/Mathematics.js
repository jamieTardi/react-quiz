import React, { useState, useEffect } from 'react'

export default function Mathematics({ mathsHide, updateScore }) {
    const [mathsMultiple, mathsMultipleFunc] = useState("")
    const [mathsWrong, mathsWrongFunc] = useState("")
    const [mathsCorrect, mathsCorrectFunc] = useState("")
    const [scoreState, scoreStateFunc] = useState(0)

    async function fetchApi (url){
        const dataFetch = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json;charset=utf-8'
            }
        })
        const data = await dataFetch.json()
        return data
    }
    const mathsRandomNum = Math.floor(Math.random() * 12)
   
    


    async function mathsMultipleChoice () {
        let fetchLink = 'https://opentdb.com/api.php?amount=12&category=19&difficulty=hard&type=multiple'
        const data = await fetchApi(
            fetchLink
        )
      
       
      
        try{
        
         mathsMultipleFunc(data.results[mathsRandomNum].question)
         mathsWrongFunc(data.results[mathsRandomNum].incorrect_answers)
         mathsCorrectFunc(data.results[mathsRandomNum].correct_answer)
            console.log(data.results)
         
        }
        catch{
         console.log('error')
        }
        
    }
    const checkAnswer = () => {
        if(questionsMaths.answers[3].correct === true){
            console.log('correct')
            scoreStateFunc(score => score + 1)
            
        }
        else{
            console.log('wrong')
        }
        mathsMultipleChoice(mathsRandomNum + 1)
     }

    const wrongAnswer = () => {
        if (questionsMaths.answers[0].correct === false){
            console.log('wrong')
        }
        scoreStateFunc(score => score - 1)
        mathsMultipleChoice(mathsRandomNum + 1)
    }
    

     let answer1 = mathsWrong[0]
     let answer2 = mathsWrong[1]
     let answer3 = mathsWrong[2]
     let answer4 = mathsCorrect
     
     const questionsMaths = {
         question: mathsMultiple,
         answers: [
            
             {answer: answer1, correct: false},
             {answer: answer2, correct: false},
             {answer: answer3, correct: false},
             {answer: answer4, correct: true},
             
         ]
     }
 
   

    useEffect(() => {
        mathsMultipleChoice()
    }, [1])
    return (
        <div className={`maths-container ${mathsHide ? "hide" : "show"}`}>
            <div className="maths-title-container">
            <div className="score-and-title">
            <h1>Maths Questions</h1>
            <p className="score">Score: <span className="score-span">{scoreState}</span></p>
            </div>
            </div>
            <div className="maths-card-container">
                <div className="maths-card">
                    <div className="maths-question">
                        <p className="maths-question-para" dangerouslySetInnerHTML={{__html: `${mathsMultiple}`}}></p>
                    </div>
                    <div className="answer-container">
                    <div className="maths-answer-half">
    <div className="maths-answers answers1" onClick={wrongAnswer}><p className="answer1" dangerouslySetInnerHTML={{__html: `${questionsMaths.answers[0].answer}`}} ></p>
    </div>
                        <div className="maths-answers" onClick={wrongAnswer}><p className="answer2" dangerouslySetInnerHTML={{__html: `${questionsMaths.answers[2].answer}`}} ></p></div>
                        
                    </div>
                    <div className="maths-answer-second-half">
                    <div className="maths-answers answers1" onClick={wrongAnswer}><p className="answer3" dangerouslySetInnerHTML={{__html: `${questionsMaths.answers[1].answer}`}}></p></div>
                    <div className="maths-answers" onClick={checkAnswer}><p className="answer4" dangerouslySetInnerHTML={{__html: `${questionsMaths.answers[3].answer}`}}></p></div>
                    </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

