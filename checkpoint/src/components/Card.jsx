import React from 'react';
import '../style/Card.css';

export default function Card(props) {
  return (
    <div class="card">
      {/* For checkpoint 1: You need to add props.pokemon to this card*/}
      {props.pokemon}
    </div>
  );
}
