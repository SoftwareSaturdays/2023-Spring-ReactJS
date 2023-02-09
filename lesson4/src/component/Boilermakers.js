import React from 'react';
import { useState } from 'react';

export function Boilermakers(props) {
    const mascot = props.mascot;
    const sport = props.sport;
    const [numberOfWins, setNumberOfWins] = useState(0);


    const winGame = () => {
        setNumberOfWins(numberOfWins + 1);
    }

    const someJSX = (
        <div id="boilermaker">
            <p>Our mascot is { mascot } and we love to watch { sport }.</p>
            <h1>He has won { numberOfWins } games.</h1>
            <button onClick={ winGame }>Win!</button>
        </div>
    );

    
    return (
        <>
            { someJSX }
        </>
    );
}