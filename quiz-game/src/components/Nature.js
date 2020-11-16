import React, { useState, useEffect } from 'react'

export default function Nature({natureHide}) {
    const [natureMultiple, natureMultipleFunc] = useState("")
    const [natureWrong, natureWrongFunc] = useState("")
    const [natureCorrect, natureCorrectFunc] = useState("")

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
    const natureRandomNum = Math.floor(Math.random() * 12)
    const checkAnswer = () => {
        
        
        natureMultipleChoice(natureRandomNum + 1)
        
        
     }
    


    async function natureMultipleChoice () {
        let fetchLink = 'https://opentdb.com/api.php?amount=12&category=17&difficulty=hard&type=multiple'
        const data = await fetchApi(
            fetchLink
        )
      
       
      
        try{
        
            natureMultipleFunc(data.results[natureRandomNum].question)
            natureWrongFunc(data.results[natureRandomNum].incorrect_answers)
            natureCorrectFunc(data.results[natureRandomNum].correct_answer)
            console.log(data.results)
         
        }
        catch{
         console.log('error')
        }
        
    }
    

     let answer1 = natureWrong[0]
     let answer2 = natureWrong[1]
     let answer3 = natureWrong[2]
     let answer4 = natureCorrect
     
     const questionsNature = {
         question: natureMultiple,
         answers: [
            
             {answer: answer1, correct: false},
             {answer: answer2, correct: false},
             {answer: answer3, correct: false},
             {answer: answer4, correct: true},
             
         ]
     }
     useEffect(() => {
        natureMultipleChoice()
    }, [1])
   
    return (
        <div className={`nature-container ${natureHide ? "hide" : "show"}`}>
        <div className="nature-title-container">
        <h1>Nature Questions</h1>
        </div>
        <div className="nature-card-container">
            <div className="nature-card">
                <div className="nature-question">
                    <p className="nature-question-para" dangerouslySetInnerHTML={{__html: `${natureMultiple}`}}></p>
                </div>
                <div className="answer-container">
                <div className="nature-answer-half">
<div className="nature-answers" onClick={checkAnswer}><p className="answer1" dangerouslySetInnerHTML={{__html: `${questionsNature.answers[3].answer}`}} ></p>
</div>
                    <div className="nature-answers" onClick={checkAnswer}><p className="answer2" dangerouslySetInnerHTML={{__html: `${questionsNature.answers[2].answer}`}} ></p></div>
                    
                </div>
                <div className="nature-answer-second-half">
                <div className="nature-answers" onClick={checkAnswer}><p className="answer3" dangerouslySetInnerHTML={{__html: `${questionsNature.answers[0].answer}`}}></p></div>
                <div className="nature-answers" onClick={checkAnswer}><p className="answer4" dangerouslySetInnerHTML={{__html: `${questionsNature.answers[1].answer}`}}></p></div>
                </div>
                </div>
            </div>
        </div>
    
    </div>
    )
}
