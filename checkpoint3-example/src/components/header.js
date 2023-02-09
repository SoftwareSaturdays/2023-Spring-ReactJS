import React from 'react';
import '../style/header.css';
import ImagePath from '../img/pikachu-field.jpg';

export function Header(props) {
      // Return some JSX here...
      return (
        <div id="header">
          <div id="container">
            <div id="name">
              <h1>
                { props.name}
              </h1>
            </div>
            <div id="hp">
              <h1>
                { props.hp}
              </h1>
            </div>
          </div>
          <img src={ImagePath} alt="Pikachu in a field"></img>
        </div>
      );
}