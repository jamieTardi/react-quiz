import React, { useState } from 'react';
import './styles/style.css'
import Genere from './components/Genere'


function App() {
  const [hide, hidefunc] = useState(false);

  const hideMain = () => {
    hidefunc(previous => !previous)
  }


  return (
    <div className="App">
      <div className={`main-container ${hide ? "hide" : ""}` }>
      <div className="title-container">
      <h1 className="title">Quizzicle, made in React.js</h1>
      </div>
      <div className="start-container">
        <div className="start-card">
          <h3>To get started please click the start button and choose a genre!</h3>
          <div className="start-button" onClick={hideMain}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M8 1c0-.552.448-1 1-1h6c.553 0 1 .448 1 1s-.447 1-1 1h-6c-.552 0-1-.448-1-1zm13 20.554c0 1.284-1.023 2.446-2.424 2.446h-13.153c-1.4 0-2.423-1.162-2.423-2.445 0-.35.076-.709.242-1.057l3.743-7.856c1.04-2.186 2.015-4.581 2.015-7.007v-1.635h2l-.006 2c-.087 2.623-1.09 5.092-1.973 7h3.682l4.377 9h1.496c.309 0 .52-.342.377-.644l-3.743-7.854c-1.046-2.197-2.12-4.791-2.21-7.502v-2h2v1.635c0 2.426.975 4.82 2.016 7.006l3.743 7.856c.165.348.241.707.241 1.057zm-12-1.054c0-.829-.671-1.5-1.5-1.5s-1.5.671-1.5 1.5.671 1.5 1.5 1.5 1.5-.671 1.5-1.5zm2-3.5c0-.553-.448-1-1-1-.553 0-1 .447-1 1s.447 1 1 1c.552 0 1-.447 1-1zm3 3c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1z"/></svg><p>Click me to start!</p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M20.327 13.099l-.427-.427.71-.71.424.427-.707.71zm-.417 4.467l-.708-.709-.428.427.707.709.429-.427zm4.09-11.566v16h-24v-16h10.888l-2.888-3.375.781-.625 3.219 3.75 3.219-3.75.781.625-2.888 3.375h10.888zm-21.049 12.993c.674.671 3.362 1.007 6.05 1.007 2.687 0 5.375-.336 6.049-1.007.633-.632.95-2.851.95-5.059 0-2.181-.31-4.351-.93-4.97-.637-.635-3.399-.964-6.141-.964-2.681 0-5.346.314-5.997.964-.603.601-.913 2.668-.931 4.786-.018 2.268.299 4.594.95 5.243zm15.049-5.9c0 1.021.796 1.851 1.802 1.904 1.097.059 2.009-.814 2.009-1.904 0-1.049-.85-1.906-1.907-1.906-1.048 0-1.904.847-1.904 1.906zm4-3.093v-.555h-4v.555h4zm-4 7.988c0 1.062.86 1.907 1.903 1.907 1.058 0 1.907-.858 1.907-1.907s-.85-1.906-1.907-1.906c-1.047 0-1.903.846-1.903 1.906zm4-9.988h-4v.555h4v-.555z"/></svg></div>
        </div>
      </div>
      </div>
      <Genere hide={hide} hideMain={hideMain}/>
    </div>
  );
}

export default App;
