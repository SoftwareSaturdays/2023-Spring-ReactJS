import React, { useState, useEffect } from 'react';

export default function Demo3() {
    
    const [pokemon, setPokemon] = useState()

    const handleFetch = (response) => {
        console.log(response.status);
        return response.json();
    }

    const handleResponse = (response) => {
        const respPoke = response.results.map((item) => <li key={item.name}>{item.name}</li>);
        setPokemon(respPoke);
    }

    const handleError = (error) => {
        console.log(error);
        setPokemon(<li>Network Error!</li>)
    }

    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
        fetch(url)
        .then(handleFetch)
        .then(handleResponse)
        .catch(handleError)
    }, [])

    return (
        <ul>{pokemon}</ul>
    )
}
