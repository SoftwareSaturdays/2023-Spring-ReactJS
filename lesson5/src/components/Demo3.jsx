import React, { useState, useEffect } from 'react';

export default function Demo3() {
    const [pokemon, setPokemon] = useState()

    // Use async so your page can continue loading
    const getAPIData = async () => {
        // This code is provided, it can be complicated
        const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"; // URL of the API
        const response = await fetch(url); // Get the data from the PokeAPI
        const responseJSON = await response.json(); // Turn the data into a JSON object that we can use

        // This should seem familiar
        const responsePokemon = responseJSON.results.map((item) => <li>{item.name}: Find more at {item.url}</li>);

        // This should also seem familiar
        setPokemon(responsePokemon)
    }

    useEffect(() => {
        getAPIData()
    }, [])

    const someJSX = <ul>{pokemon}</ul>;

    // Return some JSX here...
    return someJSX;
}