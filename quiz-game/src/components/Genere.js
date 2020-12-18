import React, { useState, useEffect } from 'react';
import GeneralKnowledge from './GeneralKnowledge';
import Geography from './Geography';
import Mathematics from './Mathematics';
import Nature from './Nature';
import Science from './Science';
import Games from './Games'


function Genere({ hide, hideMain, updateScore }) {
    const randomNum = Math.floor(Math.random() * 16)  
    const [questions, questionsFunc] = useState("");
    const [mathsQuestions, mathsQuestionsFunc] = useState("");
    const [generalQuestions, generalQuestionsFunc] = useState("");
    const [natureQuestions, natureQuestionsFunc] = useState("");
    const [geoQuestions, geoQuestionsFunc] = useState("");
    const [gameQuestions, gameQuestionsFunc] = useState("")
    const [genereHide, genereHideFunc] = useState(true)
    const [mathsHide, mathsHideFunc] = useState(true)
    const [mathsHideTwo, mathsHideTwoFunc] = useState(true)
    const [generalHide, generalHideFunc] = useState(true)
    const [natureHide, natureHideFunc] = useState(true)
    const [geographyHide, geographyHideFunc] = useState(true)
    const [gamesHide, gamesHideFunc] = useState(true)
    

    const hideGenere = () => {
        genereHideFunc(prev => !prev)
    }

    const hideGames = () => {
        gamesHideFunc(prev => !prev)
    }

    const hideGeo = () => {
        geographyHideFunc(prev => !prev)
    }

    const hideNature = () => {
        natureHideFunc(prev => !prev)
    }

    const hideGeneral = () => {
        generalHideFunc(prev => !prev)
    }

    function hideMathematics  () {
        mathsHideFunc(prev => !prev)
        mathsHideTwoFunc(prev => !prev)
    }

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

   async function gamesQuizData () {
       let fetchLink = 'https://opentdb.com/api.php?amount=15&category=15&difficulty=medium&type=boolean'
       const data = await fetchApi(
           fetchLink
       )
       try{
        gameQuestionsFunc(data.results[randomNum].question)
       }
       catch{
        console.log('error')
       }
   }

   async function geoQuizData () {
       let fetchLink = 'https://opentdb.com/api.php?amount=15&category=22&difficulty=medium&type=boolean'
       const data = await fetchApi(
           fetchLink
       )
       try {
        geoQuestionsFunc(data.results[randomNum].question)
        
       }
       catch{
        console.log('error')
       }
   }

   async function natureQuizData () {
       let fetchLink = 'https://opentdb.com/api.php?amount=15&category=17&difficulty=medium&type=boolean'
       const data = await fetchApi(
           fetchLink
       )
       try{
        natureQuestionsFunc(data.results[randomNum].question)
       }
       catch{
        console.log('error')
       }
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

   async function generalKnowledge () {
       let fetchLink = 'https://opentdb.com/api.php?amount=15&category=9&difficulty=medium&type=boolean'
       const data = await fetchApi(
        fetchLink
    )
    try{
        generalQuestionsFunc(data.results[randomNum].question)
        
    }
    catch {
        console.log('error')
    }
   }

   async function quizData(){
       let fetchLink = 'https://opentdb.com/api.php?amount=15&category=18&difficulty=medium&type=boolean'
       const data = await fetchApi(
           fetchLink
           
       )
       try {
        let returnedData = data.results[randomNum].question.split(',')
        questionsFunc(returnedData)
        
        }
        catch{
            console.log('error')
        }
       
   }

useEffect(() => {
    quizData();
    mathsQuizData();
    generalKnowledge();
    natureQuizData();
    geoQuizData();
    gamesQuizData();
}, [1])

    return(
        <div className="components-container">
        <div className={`overall-container ${genereHide ? "show" : "hide"}`}>
            <div className={`games-container ${gamesHide ? "show" : "hide"}`}>
            <div className={`geography-container ${geographyHide ? "show" : "hide"}`}>
            <div className={`nature-container ${natureHide ? "show" : "hide"}`}>
            <div className={`general-container ${generalHide ? "show" : "hide"}`}>
            <div className={`maths-func-container ${mathsHideTwo ? "show" : "hide"}`}>
        <div className={`genere-container ${hide ? "show" : "hide"}`}>
            <div className="genere-title-container">
            <h1 className="genere-title">Choose a Genre!</h1>
            </div>
            <div className="cards-container">
    <div className="genere-card card1" ><div className="genere-card-interior"> <p dangerouslySetInnerHTML={{__html: `${questions}`}} className="genere-para"></p></div><div className="genere-card-button" onClick={hideGenere}><h5><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 22.246c-.428 0-1.099-.709-1.688-2.276-.579.295-1.082.527-1.571.738.767 1.992 1.858 3.292 3.259 3.292 1.44 0 2.552-1.371 3.322-3.452-.485-.201-.997-.43-1.581-.719-.599 1.667-1.298 2.417-1.741 2.417zm-4.709-2.216c-3.099 1.139-6.29 1.168-6.29-1.644 0-.939.435-2.257 1.796-4.082.581-.779 1.254-1.545 1.937-2.248 1.531-1.555 3.256-3.05 5.505-4.599-1.083-.596-2.264-1.167-3.416-1.59-1.18-.435-2.219-.676-3.015-.676-.508 0-.886.107-1.009.288-.133.192-.138.784.445 1.843l.21-.013c1.047 0 1.898.866 1.898 1.933 0 1.067-.851 1.931-1.898 1.931-1.048 0-1.897-.864-1.897-1.931 0-.346.089-.67.245-.951-.59-1.04-.802-1.86-.802-2.503 0-1.515 1.154-2.354 2.808-2.354 2.514 0 5.9 1.662 8.082 2.946 2.214-1.363 5.717-3.159 8.304-3.159 1.893 0 2.807 1.054 2.807 2.395 0 .939-.436 2.256-1.796 4.08-3.084 4.137-9.216 8.606-13.914 10.334zm14.917-4.305c.142-.27.22-.576.22-.902 0-1.068-.849-1.933-1.897-1.933s-1.897.865-1.897 1.933c0 1.066.849 1.93 1.897 1.93l.258-.017c.552 1.024.544 1.597.415 1.787-.124.181-.501.287-1.01.287-1.602 0-3.833-.944-5.27-1.657-.48.342-1.075.748-1.657 1.119 1.925 1.036 4.757 2.295 6.927 2.295 1.64 0 2.808-.83 2.808-2.354 0-.638-.211-1.455-.794-2.488zm-12.834.119h-.001l-.013-.01c-1.144-.81-2.272-1.7-3.317-2.631-2.817 2.877-3.611 4.963-3.238 5.524.126.189.492.299 1.003.299 2.35 0 6.08-2.018 8.287-3.465 2.709-1.775 5.8-4.328 7.736-6.926 1.506-2.018 1.552-3.081 1.366-3.361-.126-.19-.491-.298-1.003-.298-1.952 0-4.924 1.459-6.636 2.447 1.263.836 2.443 1.719 3.52 2.616-.408.415-.834.819-1.27 1.211-1.196-.982-2.524-1.946-3.901-2.81-1.581 1.036-3.173 2.254-4.603 3.552 1.075.951 2.356 1.949 3.721 2.873-.522.331-1.049.647-1.651.979zm2.626-5.844c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm-1.739-5.828c-.58-.285-1.095-.518-1.581-.718.77-2.082 1.882-3.454 3.32-3.454 1.403 0 2.495 1.302 3.261 3.292-.49.212-.996.447-1.572.739-.587-1.567-1.258-2.275-1.689-2.275-.441 0-1.139.75-1.739 2.416z"/></svg><span className="click-me">Science</span></h5></div></div>
    <div className="genere-card card2"><div className="genere-card-interior"><p dangerouslySetInnerHTML={{__html: `${mathsQuestions}`}} className="genere-para"></p></div><div className="genere-card-button" onClick={hideMathematics}><h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-17 5c0-1.654 1.346-3 3-3h6v9h-9v-6zm0 14v-6h9v9h-6c-1.654 0-3-1.346-3-3zm20 0c0 1.654-1.346 3-3 3h-6v-9h9v6zm0-8h-9v-9h6c1.654 0 3 1.346 3 3v6zm-2 6h-5v-1h5v1zm-5-11h5v1h-5v-1zm0 13v-1h5v1h-5zm-6-2v1h-2v2h-1v-2h-2v-1h2v-2h1v2h2zm-1.793-10.5l1.414 1.414-.707.707-1.414-1.414-1.414 1.414-.708-.707 1.414-1.414-1.414-1.414.707-.707 1.415 1.414 1.415-1.415.708.708-1.416 1.414zm9.793-2c0-.276.224-.5.5-.5s.5.224.5.5-.224.5-.5.5-.5-.224-.5-.5zm1 4c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5z"/></svg><span className="click-me">Mathematics</span></h5></div></div>
                <div className="genere-card card3"><div className="genere-card-interior"><p dangerouslySetInnerHTML={{__html: `${generalQuestions}`}} className="genere-para"></p></div><div className="genere-card-button" onClick={hideGeneral}><h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5.495 2h16.505v-2h-17c-1.656 0-3 1.343-3 3v18c0 1.657 1.344 3 3 3h17v-20h-16.505c-1.376 0-1.376-2 0-2zm.505 4h7v7l2-2 2 2v-7h3v16h-14v-16z"/></svg><span className="click-me">General Knowledge</span></h5></div></div>
                <div className="genere-card card4"><div className="genere-card-interior"><p dangerouslySetInnerHTML={{__html: `${natureQuestions}`}} className="genere-para"></p></div><div className="genere-card-button" onClick={hideNature}><h5><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M7.458 8.084l.405-.916c.694-1.565 1.591-3.592 2.754-6.265.258-.592.881-.906 1.397-.888.572.015 1.126.329 1.369.888 1.163 2.673 2.06 4.7 2.754 6.265l.405.916c.375-.936.806-2.016 1.3-3.267.204-.518.67-.806 1.17-.802.482.004.941.284 1.146.802.873 2.209 1.547 3.885 2.069 5.179 1.571 3.91 1.773 4.413 1.773 5.603 0 2.388-1.42 4.402-3.5 5.04v2.39h3.5v1h-24v-1h3.5v-2.39c-2.08-.638-3.5-2.652-3.5-5.04 0-1.19.202-1.693 1.774-5.603.521-1.294 1.195-2.97 2.068-5.179.204-.518.67-.806 1.17-.802.482.004.941.284 1.146.802.494 1.251.925 2.331 1.3 3.267zm7.915 11.197c-.569.331-1.199.581-1.873.733v3.015h4v-2.39c-.83-.254-1.555-.728-2.127-1.358zm-6.746 0c-.572.63-1.297 1.104-2.127 1.358v2.39h4v-3.015c-.674-.152-1.304-.402-1.873-.733zm3.873 3.734v-3.839c4.906-.786 5-4.751 5-5.244 0-1.218-.216-1.705-2.277-6.359-2.134-4.82-2.721-6.198-2.755-6.261-.079-.145-.193-.292-.455-.297-.238 0-.37.092-.481.297-.034.063-.621 1.441-2.755 6.261-2.061 4.654-2.277 5.141-2.277 6.359 0 .493.094 4.458 5 5.244v3.839h1zm-5.606-13.65c-1.264-3.153-1.639-4.117-1.664-4.167-.072-.151-.15-.226-.226-.228-.109 0-.188.13-.235.228-.028.05-.316.818-2.066 5.171-1.542 3.833-1.703 4.233-1.703 5.23 0 1.988 1.076 3.728 3.5 4.25v3.166h1v-3.166c.975-.209 1.729-.615 2.282-1.152-1.409-1.152-2.282-2.868-2.282-4.765 0-1.17.18-1.789 1.394-4.567zm9.323 9.332c.556.538 1.311.943 2.283 1.152v3.166h1v-3.166c2.448-.527 3.5-2.29 3.5-4.25 0-.997-.161-1.397-1.703-5.23-1.589-3.957-2.04-5.116-2.067-5.171-.072-.151-.15-.226-.226-.228-.109 0-.188.13-.235.228-.026.046-.27.697-1.663 4.167 1.214 2.778 1.394 3.397 1.394 4.567 0 1.897-.873 3.613-2.283 4.765z"/></svg><span className="click-me">Nature</span></h5></div></div>
                <div className="genere-card card5"><div className="genere-card-interior"><p dangerouslySetInnerHTML={{__html: `${geoQuestions}`}} className="genere-para"></p></div><div className="genere-card-button" onClick={hideGeo}><h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.144 8.171c-.035-.066.342-.102.409-.102.074.009-.196.452-.409.102zm-2.152-3.072l.108-.031c.064.055-.072.095-.051.136.086.155.021.248.008.332-.014.085-.104.048-.149.093-.053.066.258.075.262.085.011.033-.375.089-.304.171.096.136.824-.195.708-.176.225-.113.029-.125-.097-.19-.043-.215-.079-.547-.213-.68l.088-.102c-.206-.299-.36.362-.36.362zm13.008 6.901c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12s5.372-12 12-12c6.627 0 12 5.373 12 12zm-8.31-5.371c-.006-.146-.19-.284-.382-.031-.135.174-.111.439-.184.557-.104.175.567.339.567.174.025-.277.732-.063.87-.025.248.069.643-.226.211-.381-.355-.13-.542-.269-.574-.523 0 0 .188-.176.106-.166-.218.027-.614.786-.614.395zm6.296 5.371c0-1.035-.177-2.08-.357-2.632-.058-.174-.189-.312-.359-.378-.256-.1-1.337.597-1.5.254-.107-.229-.324.146-.572.008-.12-.066-.454-.515-.605-.46-.309.111.474.964.688 1.076.201-.152.852-.465.992-.038.268.804-.737 1.685-1.251 2.149-.768.694-.624-.449-1.147-.852-.275-.211-.272-.66-.55-.815-.124-.07-.693-.725-.688-.813l-.017.166c-.094.071-.294-.268-.315-.321 0 .295.48.765.639 1.001.271.405.416.995.748 1.326.178.178.858.914 1.035.898.193-.017.803-.458.911-.433.644.152-1.516 3.205-1.721 3.583-.169.317.138 1.101.113 1.476-.029.433-.37.573-.693.809-.346.253-.265.745-.556.925-.517.318-.889 1.353-1.623 1.348-.216-.001-1.14.36-1.261.007-.094-.256-.22-.45-.353-.703-.13-.248-.015-.505-.173-.724-.109-.152-.475-.497-.508-.677-.002-.155.117-.626.28-.708.229-.117.044-.458.016-.656-.048-.354-.267-.646-.53-.851-.389-.299-.188-.537-.097-.964 0-.204-.124-.472-.398-.392-.564.164-.393-.44-.804-.413-.296.021-.538.209-.813.292-.346.104-.7-.082-1.042-.125-1.407-.178-1.866-1.786-1.499-2.946.037-.19-.114-.542-.048-.689.158-.352.48-.747.762-1.014.158-.15.361-.112.547-.229.287-.181.291-.553.572-.781.4-.325.946-.318 1.468-.388.278-.037 1.336-.266 1.503-.06 0 .038.191.604-.019.572.433.023 1.05.749 1.461.579.211-.088.134-.736.567-.423.262.188 1.436.272 1.68.069.15-.124.234-.93.052-1.021.116.115-.611.124-.679.098-.12-.044-.232.114-.425.025.116.055-.646-.354-.218-.667-.179.131-.346-.037-.539.107-.133.108.062.18-.128.274-.302.153-.53-.525-.644-.602-.116-.076-1.014-.706-.77-.295l.789.785c-.039.025-.207-.286-.207-.059.053-.135.02.579-.104.347-.055-.089.09-.139.006-.268 0-.085-.228-.168-.272-.226-.125-.155-.457-.497-.637-.579-.05-.023-.764.087-.824.11-.07.098-.13.201-.179.311-.148.055-.287.126-.419.214l-.157.353c-.068.061-.765.291-.769.3.029-.075-.487-.171-.453-.321.038-.165.213-.68.168-.868-.048-.197 1.074.284 1.146-.235.029-.225.046-.487-.313-.525.068.008.695-.246.799-.36.146-.168.481-.442.724-.442.284 0 .223-.413.354-.615.131.053-.07.376.087.507-.01-.103.445.057.489.033.104-.054.684-.022.594-.294-.1-.277.051-.195.181-.253-.022.009.34-.619.402-.413-.043-.212-.421.074-.553.063-.305-.024-.176-.52-.061-.665.089-.115-.243-.256-.247-.036-.006.329-.312.627-.241 1.064.108.659-.735-.159-.809-.114-.28.17-.509-.214-.364-.444.148-.235.505-.224.652-.476.104-.178.225-.385.385-.52.535-.449.683-.09 1.216-.041.521.048.176.124.104.324-.069.19.286.258.409.099.07-.092.229-.323.298-.494.089-.222.901-.197.334-.536-.374-.223-2.004-.672-3.096-.672-.236 0-.401.263-.581.412-.356.295-1.268.874-1.775.698-.519-.179-1.63.66-1.808.666-.065.004.004-.634.358-.681-.153.023 1.247-.707 1.209-.859-.046-.18-2.799.822-2.676 1.023.059.092.299.092-.016.294-.18.109-.372.801-.541.801-.505.221-.537-.435-1.099.409l-.894.36c-1.328 1.411-2.247 3.198-2.58 5.183-.013.079.334.226.379.28.112.134.112.712.167.901.138.478.479.744.74 1.179.154.259.41.914.329 1.186.108-.178 1.07.815 1.246 1.022.414.487.733 1.077.061 1.559-.217.156.33 1.129.048 1.368l-.361.093c-.356.219-.195.756.021.982 1.818 1.901 4.38 3.087 7.22 3.087 5.517 0 9.989-4.472 9.989-9.989zm-11.507-6.357c.125-.055.293-.053.311-.22.015-.148.044-.046.08-.1.035-.053-.067-.138-.11-.146-.064-.014-.108.069-.149.104l-.072.019-.068.087.008.048-.087.106c-.085.084.002.139.087.102z"/></svg><span className="click-me">Geography</span></h5></div></div>
                <div className="genere-card card6"><div className="genere-card-interior"><p dangerouslySetInnerHTML={{__html: `${gameQuestions}`}} className="genere-para"></p></div><div className="genere-card-button" onClick={hideGames}><h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.46 7.594c2.21 5.602 2.54 8.12 2.54 9.123 0 .797-.299.866-.525.664-2.932-2.607-3.57-3.38-5.858-3.38h-7.233c-2.282 0-2.895.746-5.858 3.381-.228.201-.526.13-.526-.665 0-1.003.33-3.522 2.541-9.123.639-1.616 1.763-1.88 2.771-1.361 3.068 1.581 6.498 1.482 9.377 0 1.002-.518 2.129-.263 2.771 1.361zm-1.836-3.594c-.656 0-1.298.17-1.852.456-2.397 1.235-5.146 1.236-7.544 0-.554-.286-1.196-.456-1.852-.456-1.403 0-2.873.777-3.695 2.86-1.736 4.396-2.681 7.794-2.681 9.857 0 1.586.56 2.59 1.749 3.178.143.071.297.105.449.105.243 0 .483-.087.672-.255l3.109-2.745c.558-.494 1.044-1.004 2.404-1.004h7.232c1.36 0 1.847.51 2.404 1.004l3.109 2.745c.191.168.432.255.674.255.153 0 .307-.034.449-.105 1.189-.588 1.749-1.592 1.749-3.179 0-2.062-.945-5.461-2.68-9.856-.822-2.083-2.293-2.86-3.696-2.86zm-2.874 5.75c.414 0 .75.335.75.75s-.336.75-.75.75-.75-.335-.75-.75.336-.75.75-.75zm1.75 3.25c-.414 0-.75-.335-.75-.75s.336-.75.75-.75.75.335.75.75-.336.75-.75.75zm0-3.531c-.414 0-.75-.335-.75-.75s.336-.75.75-.75.75.335.75.75-.336.75-.75.75zm1.734 1.781c-.414 0-.75-.335-.75-.75s.336-.75.75-.75.75.335.75.75-.336.75-.75.75zm-10.734-2.25c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5zm0-1c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5-1.119-2.5-2.5-2.5zm4.5 0c-.553 0-1 .448-1 1s.447 1 1 1 1-.448 1-1-.447-1-1-1z"/></svg><span className="click-me">Computer Games</span></h5></div></div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
        </div>
        </div>
        
        <Science genereHide={genereHide} hideMain={hideMain} fetchApi={fetchApi} quizData ={gamesQuizData} randomNum ={randomNum} updateScore={updateScore}/>
        
        <Mathematics mathsHide={mathsHide} updateScore={updateScore}/>
        <GeneralKnowledge generalHide={generalHide} updateScore={updateScore}/>
        <Nature natureHide={natureHide} updateScore={updateScore}/>
        <Geography geographyHide={geographyHide} updateScore={updateScore}/>
        <Games gamesHide={gamesHide} updateScore={updateScore}/>
        </div>
        
    )
}

export default Genere