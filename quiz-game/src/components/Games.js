import React, {useState, useEffect} from 'react'

export default function Games({ gamesHide }) {
    const [gamesMultiple, gamesMultipleFunc] = useState("")
    const [gamesWrong, gamesWrongFunc] = useState("")
    const [gamesCorrect, gamesCorrectFunc] = useState("")

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
    const gamesRandomNum = Math.floor(Math.random() * 12)
    const checkAnswer = () => {
        
        
        gamesMultipleChoice(gamesRandomNum + 1)
        
        
     }
    


    async function gamesMultipleChoice () {
        let fetchLink = 'https://opentdb.com/api.php?amount=12&category=15&difficulty=hard&type=multiple'
        const data = await fetchApi(
            fetchLink
        )
      
       
      
        try{
        
            gamesMultipleFunc(data.results[gamesRandomNum].question)
            gamesWrongFunc(data.results[gamesRandomNum].incorrect_answers)
            gamesCorrectFunc(data.results[gamesRandomNum].correct_answer)
            console.log(data.results)
         
        }
        catch{
         console.log('error')
        }
        
    }
    

     let answer1 = gamesWrong[0]
     let answer2 = gamesWrong[1]
     let answer3 = gamesWrong[2]
     let answer4 = gamesCorrect
     
     const questionsGames = {
         question: gamesMultiple,
         answers: [
            
             {answer: answer1, correct: false},
             {answer: answer2, correct: false},
             {answer: answer3, correct: false},
             {answer: answer4, correct: true},
             
         ]
     }
     useEffect(() => {
        gamesMultipleChoice()
    }, [1])
   
    return (
        <div className={`games-container ${gamesHide ? "hide" : "show"}`}>
        <div className="games-title-container">
        <h1>Games Questions</h1>
        </div>
        <div className="games-card-container">
            <div className="games-card">
                <div className="games-question">
                    <p className="games-question-para" dangerouslySetInnerHTML={{__html: `${gamesMultiple}`}}></p>
                </div>
                <div className="answer-container">
                <div className="games-answer-half">
<div className="games-answers" onClick={checkAnswer}><p className="answer1" dangerouslySetInnerHTML={{__html: `${questionsGames.answers[2].answer}`}} ></p>
</div>
                    <div className="games-answers" onClick={checkAnswer}><p className="answer2" dangerouslySetInnerHTML={{__html: `${questionsGames.answers[3].answer}`}} ></p></div>
                    
                </div>
                <div className="games-answer-second-half">
                <div className="games-answers" onClick={checkAnswer}><p className="answer3" dangerouslySetInnerHTML={{__html: `${questionsGames.answers[0].answer}`}}></p></div>
                <div className="games-answers" onClick={checkAnswer}><p className="answer4" dangerouslySetInnerHTML={{__html: `${questionsGames.answers[1].answer}`}}></p></div>
                </div>
                </div>
            </div>
        </div>
    
    </div>
    )
}
