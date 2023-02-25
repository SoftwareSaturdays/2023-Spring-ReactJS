import React, { useState } from 'react';
import '../style/info.css';

export function Info(props) {

    // TODO: create a timestamp useState() variable with initial value set
    // to the timestamp attribute from props
    
    
    const updateTimestamp = () => {
      // TODO: update the timestamp with the current date and time. 
      // Use (new Date()).toISOString() to get the current date and time.
      
    }

    // Text defaults. Feel free to add your own!
    const move = "Quick Attack"
    const description = "Flip a coin. If heads, this attack does 10 more damage."
    const damage = "10+"


    // Return some JSX here...
    return (
      <div id="info">
        <div id="move-header">
          <div id="move">
            <h3>{/* TODO: replace this comment with the move variable */}</h3>
          </div>
          <div id="damage">
            <h3>{/* TODO: replace this comment with the damage variable */}</h3>
          </div>
        </div>
        <div id="description">
          <p>{/* TODO: replace this comment with the description variable */} </p>
        </div>
        <div id="timestamp">
          Loaded at {/* TODO: replace this comment with the timestamp variable */}
        </div>

        <div id="button-container">
          {/* TODO: Add a button using the updateTimeStamp event handler to refresh the timestamp */}
        </div>
      </div>
    );
}