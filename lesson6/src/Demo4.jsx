import React from 'react';

// Named function
export default function Demo4() {
    // anonymous function
    const anon = function() {
        return <p>I am an anonymous function</p>
    }

    // arrow function stored inside a variable
    const arrow = () => {
        return <p>I am an arrow function</p>
    }
    return (
        <>
            { anon() }
            { arrow() }
        </>
    )
}


