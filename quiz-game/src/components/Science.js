import React, { useState, useEffect} from 'react'

export default function Science({ hide, genereHide, hideMain, randomNum }) {

    const [scienceMultiple, scienceMultipleFunc] = useState("")
    const [scienceWrong, scienceWrongFunc] = useState([])
    const [scienceCorrect, scienceCorrectFunc] = useState("")
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

    const updateScore = () => {
        scoreStateFunc(score => score + 1)
        if (scoreState === 5){
            alert('Winner!')
            scoreStateFunc(score => score - 6)
        }
    }

    let num = 0
    const checkAnswer = () => {
        if(questionsScience.answers[3].correct === true){
            console.log('correct')
            updateScore()
        }
        else{
            console.log('wrong')
        }
        num += 1 
        scienceMultipleChoice(num)
        console.log(num)
     }

    const wrongAnswer = () => {
        if (questionsScience.answers[0].correct === false){
            console.log('wrong')
        }
        scoreStateFunc(score => score - 1)
    }
    
     
    
    async function scienceMultipleChoice () {
        let fetchLink = 'https://opentdb.com/api.php?amount=15&category=18&difficulty=hard&type=multiple'
        const data = await fetchApi(
            fetchLink
        )
       
      
        try{
        
         scienceMultipleFunc(data.results[5].question)
         console.log(data.results[5].question)
         scienceWrongFunc(data.results[5].incorrect_answers)
         scienceCorrectFunc(data.results[5].correct_answer)
         
        }
        catch{
         console.log('error')
        }
        
    }

  
    

    let answer1 = scienceWrong[0]
    let answer2 = scienceWrong[1]
    let answer3 = scienceWrong[2]
    let answer4 = scienceCorrect
    
    const questionsScience = {
        question: scienceMultiple,
        answers: [
           
            {answer: answer1, correct: false},
            {answer: answer2, correct: false},
            {answer: answer3, correct: false},
            {answer: answer4, correct: true},
            
        ]
    }

    
    
    useEffect(() => {
        scienceMultipleChoice()
    }, [1])

    return (
        <div className={`science-container ${genereHide ? "hide" : "show"}`}>
            <div className="science-title-container">
                <div className="score-and-title">
            <h1>Science Questions</h1>
    <p className="score">Score: <span className="score-span">{scoreState}</span></p>
            </div>
            </div>
            <div className="science-card-container">
                <div className="science-card">
                    <div className="science-question">
                        <p className="science-question-para" dangerouslySetInnerHTML={{__html: `${scienceMultiple}`}}></p>
                    </div>
                    <div className="answer-container">
                    <div className="science-answer-half">
    <div className="science-answers"><p className="answer1" onClick={wrongAnswer} dangerouslySetInnerHTML={{__html: `${questionsScience.answers[1].answer}`}}></p></div>
                        <div className="science-answers"><p className="answer2" onClick={wrongAnswer} dangerouslySetInnerHTML={{__html: `${questionsScience.answers[2].answer}`}}></p></div>
                        
                    </div>
                    <div className="science-answer-second-half">
                    <div className="science-answers"><p className="answer3" onClick={wrongAnswer} dangerouslySetInnerHTML={{__html: `${questionsScience.answers[0].answer}`}}></p></div>
                    <div className="science-answers"><p className="answer4" onClick={checkAnswer} dangerouslySetInnerHTML={{__html: `${questionsScience.answers[3].answer}`}}></p></div>
                    </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

