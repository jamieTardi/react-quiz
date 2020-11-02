import React, { useState, useEffect } from 'react';

function Genere({ hide }) {
    const randomNum = Math.floor(Math.random() * 16)

    
    const [questions, questionsFunc] = useState([]);
    const [mathsQuestions, mathsQuestionsFunc] = useState([]);
    

   async function fetchApi (url){
       const dataFetch = await fetch(url, {
           method: 'GET',
           headers: {
               accept: 'application/json'
           }
       })
       const data = await dataFetch.json()
       return data
   }

   async function mathsQuizData () {
       let fetchLink = 'https://opentdb.com/api.php?amount=15&category=19'
       const data = await fetchApi(
           fetchLink
       )
       try{
        mathsQuestionsFunc(data.results[randomNum].question)
       }
       catch{
           console.log('error')
       }
   }

   async function quizData(){
       let fetchLink = 'https://opentdb.com/api.php?amount=15&category=18&difficulty=medium&type=boolean'
       const data = await fetchApi(
           fetchLink
       )
       try {
        questionsFunc(data.results[randomNum].question)

        }
        catch{
            console.log('error')
        }
       
   }

useEffect(() => {
    quizData();
    mathsQuizData()
}, [1])

  
    

    return(
        <div className={`genere-container ${hide ? "show" : "hide"}`}>
            <div className="genere-title-container">
            <h1 className="genere-title">Choose a Genere!</h1>
            </div>
            <div className="cards-container">
    <div className="genere-card card1" ><div className="genere-card-interior"><h4 className="genere-interior-text"> <p>{questions}</p></h4></div><div className="genere-card-button"><h5><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 22.246c-.428 0-1.099-.709-1.688-2.276-.579.295-1.082.527-1.571.738.767 1.992 1.858 3.292 3.259 3.292 1.44 0 2.552-1.371 3.322-3.452-.485-.201-.997-.43-1.581-.719-.599 1.667-1.298 2.417-1.741 2.417zm-4.709-2.216c-3.099 1.139-6.29 1.168-6.29-1.644 0-.939.435-2.257 1.796-4.082.581-.779 1.254-1.545 1.937-2.248 1.531-1.555 3.256-3.05 5.505-4.599-1.083-.596-2.264-1.167-3.416-1.59-1.18-.435-2.219-.676-3.015-.676-.508 0-.886.107-1.009.288-.133.192-.138.784.445 1.843l.21-.013c1.047 0 1.898.866 1.898 1.933 0 1.067-.851 1.931-1.898 1.931-1.048 0-1.897-.864-1.897-1.931 0-.346.089-.67.245-.951-.59-1.04-.802-1.86-.802-2.503 0-1.515 1.154-2.354 2.808-2.354 2.514 0 5.9 1.662 8.082 2.946 2.214-1.363 5.717-3.159 8.304-3.159 1.893 0 2.807 1.054 2.807 2.395 0 .939-.436 2.256-1.796 4.08-3.084 4.137-9.216 8.606-13.914 10.334zm14.917-4.305c.142-.27.22-.576.22-.902 0-1.068-.849-1.933-1.897-1.933s-1.897.865-1.897 1.933c0 1.066.849 1.93 1.897 1.93l.258-.017c.552 1.024.544 1.597.415 1.787-.124.181-.501.287-1.01.287-1.602 0-3.833-.944-5.27-1.657-.48.342-1.075.748-1.657 1.119 1.925 1.036 4.757 2.295 6.927 2.295 1.64 0 2.808-.83 2.808-2.354 0-.638-.211-1.455-.794-2.488zm-12.834.119h-.001l-.013-.01c-1.144-.81-2.272-1.7-3.317-2.631-2.817 2.877-3.611 4.963-3.238 5.524.126.189.492.299 1.003.299 2.35 0 6.08-2.018 8.287-3.465 2.709-1.775 5.8-4.328 7.736-6.926 1.506-2.018 1.552-3.081 1.366-3.361-.126-.19-.491-.298-1.003-.298-1.952 0-4.924 1.459-6.636 2.447 1.263.836 2.443 1.719 3.52 2.616-.408.415-.834.819-1.27 1.211-1.196-.982-2.524-1.946-3.901-2.81-1.581 1.036-3.173 2.254-4.603 3.552 1.075.951 2.356 1.949 3.721 2.873-.522.331-1.049.647-1.651.979zm2.626-5.844c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm-1.739-5.828c-.58-.285-1.095-.518-1.581-.718.77-2.082 1.882-3.454 3.32-3.454 1.403 0 2.495 1.302 3.261 3.292-.49.212-.996.447-1.572.739-.587-1.567-1.258-2.275-1.689-2.275-.441 0-1.139.75-1.739 2.416z"/></svg><span className="click-me">Science</span></h5></div></div>
    <div className="genere-card card2"><div className="genere-card-interior"><h4 className="genere-interior-text">{mathsQuestions}</h4></div><div className="genere-card-button"><h5>Click Me!</h5></div></div>
                <div className="genere-card card3"><div className="genere-card-interior"><h4 className="genere-interior-text">Placeholder</h4></div><div className="genere-card-button"><h5>Click Me!</h5></div></div>
                <div className="genere-card card4"><div className="genere-card-interior"><h4 className="genere-interior-text">Placeholder</h4></div><div className="genere-card-button"><h5>Click Me!</h5></div></div>
                <div className="genere-card card5"><div className="genere-card-interior"><h4 className="genere-interior-text">Placeholder</h4></div><div className="genere-card-button"><h5>Click Me!</h5></div></div>
                <div className="genere-card card6"><div className="genere-card-interior"><h4 className="genere-interior-text">Placeholder</h4></div><div className="genere-card-button"><h5>Click Me!</h5></div></div>
            </div>
        </div>
    )
}

export default Genere