import React, { useState } from 'react';
import '../style/info.css';

export function Info(props) {
    const [timestamp, setTimestamp] = useState(props.timestamp);

    const updateTimestamp = () => {
      setTimestamp((new Date()).toISOString());
    }

    // Type your code here...
    const move = "Quick Attack"
    const description = "Flip a coin. If heads, this attack does 10 more damage."
    const damage = "10+"


    // Return some JSX here...
    return (
      <div id="info">
        <div id="move-header">
          <div id="move">
            <h3>{ move }</h3>
          </div>
          <div id="damage">
            <h3>{ damage }</h3>
          </div>
        </div>
        <div id="description">
          <p>{ description} </p>
        </div>
        <div id="timestamp">
          Loaded at { timestamp }
        </div>

        <div id="button-container">
          <button onClick={ updateTimestamp }>Refresh</button>
        </div>
      </div>
    );
}