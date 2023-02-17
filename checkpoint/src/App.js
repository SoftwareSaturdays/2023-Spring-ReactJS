import React, { useState } from 'react';
import Checkpoint1 from './components/Checkpoint1';
import Checkpoint2 from './components/Checkpoint2';

function App() {
  const [showCP1, setShowCP1] = useState()
  const [showCP2, setShowCP2] = useState()

  return (
    <>
      <div id="cp1">
        <button onClick={ () => { setShowCP1(!showCP1) } }>
          Show Checkpoint 1
        </button>
        {showCP1 ? <Checkpoint1 /> : null}
      </div>
      <div id="cp2">
        <button onClick={ () => { setShowCP2(!showCP2) } }>
          Show Checkpoint 2
        </button>
        {showCP2 ? <Checkpoint2 /> : null}
      </div>
      
    </>
  )
}

export default App;
