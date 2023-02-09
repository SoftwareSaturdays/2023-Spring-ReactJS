import React from 'react';
import { Header } from './header';
import { Info } from './info';
import '../style/card.css';

export function Card(props) {
  return (
    <div id="card">
      <Header name={ props.name } hp={ props.hp }/>
      <Info timestamp={(new Date()).toISOString()}/>
    </div>
  );
}