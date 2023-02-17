import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function Checkpoint2() {
    /*For Checkpoint 2, use the given getAPIData function and set up a pokemon useState variable to store the data. Then, like in Demo2, call getAPIData in useEffect to populate the pokmeon array. Lastly, use your code from checkpoint 1 to map each of the pokemon into card elements. Feel free to mess around with stuff if you are done early. */

    // state variable to hold all the mapped cards
    const [pokemonCards, setPokemonCards] = useState(null)

    // getAPIData gets the data from the pokeapi, returns an array of pokemon
    const getAPIData = async () => {
        /* START OF API CALLING. MODIFY AT YOUR OWN RISK */
        const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"; // URL of the API
        const response = await fetch(url); // Get the data from the PokeAPI
        const responseJSON = await response.json(); // Turn the data into a JSON object that we can use

        // This should seem familiar
        const responsePokemon = responseJSON.results.map((item) => item.name);
        /* END OF API CALLING. MODIFY AT YOUR OWN RISK */

        // TODO: Map the pokemon to cards

        // TODO: Set pokemonCards to the mapped cards 
    }

    useEffect(() => {
        // get api data
        getAPIData()
    }, [])

    return (
        <div >
            { pokemonCards }
        </div>
    )
}