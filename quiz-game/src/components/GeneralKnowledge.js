import React, { useState, useEffect } from 'react'

export default function GeneralKnowledge({generalHide, updateScore}) {
    const [generalMultiple, generalMultipleFunc] = useState("")
    const [generalWrong, generalWrongFunc] = useState("")
    const [generalCorrect, generalCorrectFunc] = useState("")
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
    const generalRandomNum = Math.floor(Math.random() * 12)
  
     const checkAnswer = () => {
        if(questionsGeneral.answers[3].correct === true){
            console.log('correct')
            scoreStateFunc(score => score + 1)
            updateScore()
        }
        else{
            console.log('wrong')
        }
        generalMultipleChoice(generalRandomNum + 1)
     }

    const wrongAnswer = () => {
        if (questionsGeneral.answers[0].correct === false){
            console.log('wrong')
        }
        scoreStateFunc(score => score - 1)
        generalMultipleChoice(generalRandomNum + 1)
    }
    


    async function generalMultipleChoice () {
        let fetchLink = 'https://opentdb.com/api.php?amount=12&category=9&difficulty=hard&type=multiple'
        const data = await fetchApi(
            fetchLink
        )
      
       
      
        try{
        
         generalMultipleFunc(data.results[generalRandomNum].question)
         generalWrongFunc(data.results[generalRandomNum].incorrect_answers)
         generalCorrectFunc(data.results[generalRandomNum].correct_answer)
            console.log(data.results)
         
        }
        catch{
         console.log('error')
        }
        
    }
    

     let answer1 = generalWrong[0]
     let answer2 = generalWrong[1]
     let answer3 = generalWrong[2]
     let answer4 = generalCorrect
     
     const questionsGeneral = {
         question: generalMultiple,
         answers: [
            
             {answer: answer1, correct: false},
             {answer: answer2, correct: false},
             {answer: answer3, correct: false},
             {answer: answer4, correct: true},
             
         ]
     }
     useEffect(() => {
        generalMultipleChoice()
    }, [1])
   
    return (
        <div className={`general-container ${generalHide ? "hide" : "show"}`}>
        <div className="general-title-container">
        <div className="score-and-title">
        <h1>General Knowledge Questions</h1>
        <p className="score">Score: <span className="score-span">{scoreState}</span></p>
        </div>
        </div>
        <div className="general-card-container">
            <div className="general-card">
                <div className="general-question">
                    <p className="general-question-para" dangerouslySetInnerHTML={{__html: `${generalMultiple}`}}></p>
                </div>
                <div className="answer-container">
                <div className="general-answer-half">
<div className="general-answers answers1" onClick={checkAnswer}><p className="answer1" dangerouslySetInnerHTML={{__html: `${questionsGeneral.answers[3].answer}`}} ></p>
</div>
                    <div className="general-answers" onClick={wrongAnswer}><p className="answer2" dangerouslySetInnerHTML={{__html: `${questionsGeneral.answers[2].answer}`}} ></p></div>
                    
                </div>
                <div className="general-answer-second-half">
                <div className="general-answers answers1" onClick={wrongAnswer}><p className="answer3" dangerouslySetInnerHTML={{__html: `${questionsGeneral.answers[0].answer}`}}></p></div>
                <div className="general-answers" onClick={wrongAnswer}><p className="answer4" dangerouslySetInnerHTML={{__html: `${questionsGeneral.answers[1].answer}`}}></p></div>
                </div>
                </div>
            </div>
        </div>
    
    </div>
    )
}
