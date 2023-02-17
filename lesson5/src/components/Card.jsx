import React from 'react';
import '../style/Card.css';

export default function Card(props) {
  return (
    <div class="card">
      {/* For checkpoint 1: You need link this prop to some data in App.js */}
      {props.name}
    </div>
  );
}
