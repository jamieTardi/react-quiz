import React, { useState, useEffect} from 'react'

export default function Geography({geographyHide, updateScore}) {
    const [geographyMultiple, geographyMultipleFunc] = useState("")
    const [geographyWrong, geographyWrongFunc] = useState("")
    const [geographyCorrect, geographyCorrectFunc] = useState("")
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
    const geographyRandomNum = Math.floor(Math.random() * 12)
   


    async function geographyMultipleChoice () {
        let fetchLink = 'https://opentdb.com/api.php?amount=12&category=22&difficulty=hard&type=multiple'
        const data = await fetchApi(
            fetchLink
        )
      
       
      
        try{
        
            geographyMultipleFunc(data.results[geographyRandomNum].question)
            geographyWrongFunc(data.results[geographyRandomNum].incorrect_answers)
            geographyCorrectFunc(data.results[geographyRandomNum].correct_answer)
            console.log(data.results)
         
        }
        catch{
         console.log('error')
        }
        
    }

    const checkAnswer = () => {
        if(questionsGeography.answers[3].correct === true){
            console.log('correct')
            scoreStateFunc(score => score + 1)
            updateScore()
        }
        else{
            console.log('wrong')
        }
        geographyMultipleChoice(geographyRandomNum + 1)
     }

    const wrongAnswer = () => {
        if (questionsGeography.answers[0].correct === false){
            console.log('wrong')
        }
        scoreStateFunc(score => score - 1)
        geographyMultipleChoice(geographyRandomNum + 1)
    }

    

     let answer1 = geographyWrong[0]
     let answer2 = geographyWrong[1]
     let answer3 = geographyWrong[2]
     let answer4 = geographyCorrect
     
     const questionsGeography = {
         question: geographyMultiple,
         answers: [
            
             {answer: answer1, correct: false},
             {answer: answer2, correct: false},
             {answer: answer3, correct: false},
             {answer: answer4, correct: true},
             
         ]
     }
     useEffect(() => {
        geographyMultipleChoice()
    }, [1])
   
    return (
        <div className={`geography-container ${geographyHide ? "hide" : "show"}`}>
        <div className="geography-title-container">
        <div className="score-and-title">
        <h1>Geography Questions</h1>
        <p className="score">Score: <span className="score-span">{scoreState}</span></p>
        </div>
        </div>
        <div className="geography-card-container">
            <div className="geography-card">
                <div className="geography-question">
                    <p className="geography-question-para" dangerouslySetInnerHTML={{__html: `${geographyMultiple}`}}></p>
                </div>
                <div className="answer-container">
                <div className="geography-answer-half">
<div className="geography-answers" onClick={wrongAnswer}><p className="answer1" dangerouslySetInnerHTML={{__html: `${questionsGeography.answers[0].answer}`}} ></p>
</div>
                    <div className="geography-answers" onClick={wrongAnswer}><p className="answer2" dangerouslySetInnerHTML={{__html: `${questionsGeography.answers[2].answer}`}} ></p></div>
                    
                </div>
                <div className="geography-answer-second-half">
                <div className="geography-answers" onClick={checkAnswer}><p className="answer3" dangerouslySetInnerHTML={{__html: `${questionsGeography.answers[3].answer}`}}></p></div>
                <div className="geography-answers" onClick={wrongAnswer}><p className="answer4" dangerouslySetInnerHTML={{__html: `${questionsGeography.answers[1].answer}`}}></p></div>
                </div>
                </div>
            </div>
        </div>
    
    </div>
    )
}
