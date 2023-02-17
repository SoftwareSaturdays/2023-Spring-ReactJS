import React, { useState } from 'react';
import Demo1 from './components/Demo1';
import Demo2 from './components/Demo2';
import Demo3 from './components/Demo3';
import Card from './components/Card';

function App() {
  // For checkpoint 1: Write code here similar to Demo2.js
  // Hint: Create an array and map each element to JSX (the Card component), then add it to the JSX you're returning
  const [showDemo1, setShowDemo1] = useState()
  const [showDemo2, setShowDemo2] = useState()
  const [showDemo3, setShowDemo3] = useState()

  return (
    // Type your website layout here...
    <div id="demos">
      {/* Demo #1 */}
      <div id="demo1">
        <button onClick={() => { setShowDemo1(!showDemo1) }}>
          ToggleDemo1
        </button>
        {showDemo1 ? <Demo1 /> : null}
      </div>
      
      {/* Demo #2 */}
      <div id="demo2">
        <button onClick={() => { setShowDemo2(!showDemo2) }}>
          ToggleDemo2
        </button>
        {showDemo2 ? <Demo2 numbers={[1,2,3,4,5]}/> : null}
      </div>
      

      {/* Demo #3 */}
      <div id="demo3">
        <button onClick={() => { setShowDemo3(!showDemo3) }}>
          ToggleDemo3
        </button>
        {showDemo3 ? <Demo3 /> : null}
      </div>
    </div>
  );
}

export default App;
