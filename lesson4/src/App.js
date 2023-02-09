import React, { useState } from 'react';
import { Software } from './component/Software';
import { Saturday } from './component/Saturday';
import { Purdue } from './component/Purdue';
import { Boilermakers } from './component/Boilermakers';

function App() {
    const [showDemo1, setShowDemo1] = useState(false);
    const [showDemo2, setShowDemo2] = useState(false);
    const [showDemo3, setShowDemo3] = useState(false);

    const toggleDemo1 = () => { setShowDemo1(!showDemo1) };
    const toggleDemo2 = () => { setShowDemo2(!showDemo2) };
    const toggleDemo3 = () => { setShowDemo3(!showDemo3) };

    return (
        // Type your website layout here...
        <div id="demos">
            {/* Demo #1 */}
            <div id="demo1">
                <button onClick={ toggleDemo1 }>{showDemo1 ? "Hide" : "Show"} Demo 1</button>
                {showDemo1 ? <>
                    <Software day="Saturday" date="Oct 10"/>
                    <Saturday lessonNumber="4" software="ReactJS"/>
                </> : null}
            </div>
            

            {/* Demo #2 */}
            <div id="demo2">
                <button onClick={ toggleDemo2 }>{showDemo2 ? "Hide" : "Show"} Demo 2</button>
                {showDemo2 ? <>
                    <Purdue year={2019}/>
                    <Purdue year={2020}/>
                </> : null}
            </div>

            {/* Demo #3 */}
            <div id="demo3">
                <button onClick={ toggleDemo3 }>{showDemo3 ? "Hide" : "Show"} Demo 3</button>
                {showDemo3 ? 
                    <Boilermakers />
                : null}
            </div>
        </div>
    );
}

export default App;