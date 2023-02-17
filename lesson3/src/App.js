import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Demo2 from './components/Demo2';
import Demo4 from './components/Demo4';

function App() {
  const [showDefault, setShowDefault] = useState()
  const [showDemo2, setShowDemo2] = useState()

  return (
    <>
      <div id="default">
      <button onClick={() => { setShowDefault(!showDefault) }}>Show Default App</button>
        {showDefault ? <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>

            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div> : null }
      </div>
      <div id="Demo2">
        <button onClick={ () => { setShowDemo2(!showDemo2) } }>Show Demo 2</button>
        {showDemo2 ? <Demo2 /> : null }
      </div>
      <Demo4 />
    </>
  );
}

export default App;
