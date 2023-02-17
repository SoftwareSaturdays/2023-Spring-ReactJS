import React from "react";
import Card from "./Card";

export default function Checkpoint1() {
  const pokemon = ["bulbasaur", "charmander", "squirtle"]
  /* For Checkpoint 1: Create a mapper function to map each pokemon to a card component passing in the pokemon as a prop to the card. Call this component with all the pokemon cards, cards.*/

  const cards = pokemon.map((name) => <Card pokemon={name} />)
  
  
  return (
    <div >
      { cards }
    </div>
  );
}