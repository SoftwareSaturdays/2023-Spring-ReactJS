import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function Checkpoint2() {
    /*For Checkpoint 2, use the given getAPIData function and set up a pokemon useState variable to store the data. Then, like in Demo2, call getAPIData in useEffect to populate the pokmeon array. Lastly, use your code from checkpoint 1 to map each of the pokemon into card elements. Feel free to mess around with stuff if you are done early. */

    const [pokemonCards, setPokemonCards] = useState(null)

    // getAPIData gets the data from the pokeapi, returns an array of pokemon
    const getAPIData = async () => {
        // This code is provided, it can be complicated
        const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"; // URL of the API
        const response = await fetch(url); // Get the data from the PokeAPI
        const responseJSON = await response.json(); // Turn the data into a JSON object that we can use

        // This should seem familiar
        const responsePokemon = responseJSON.results.map((item) => item.name);

        // Map the pokemon to cards
        const cards = responsePokemon.map((name) => <Card pokemon={name} />)

        // Set pokemonCards to the mapped cards 
        setPokemonCards(cards)
    }

    useEffect(() => {
        // call api data and store its value into a variable
        // set the state of your pokemonCards to the mapped pokemon to Card components like we did in Checkpoint1
        getAPIData()
    }, [])

    return (
        <div >
            { pokemonCards }
        </div>
    )
}