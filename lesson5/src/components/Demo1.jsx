import React, { useState, useEffect } from 'react';


export default function Demo1() {
    useEffect(() => {
        onComponentMount()
        return onComponentUnmount
    }, [])
    // Adding empty array ensures useEffect happens only when component loads or unloads, not on every re-render
    // If we didn't pass that array in, the useEffect would re-run on every single change on the page, even if it was just the user typing input

    // Don't add a use state variable as a dependency for a useEffect if you are updating the variable in the useEffect
    /* Ex.

    const [step, setStep] = useState(0);
    useEffect(() => {
        setStep(step + 1)
    }, [step])

    */
    // Will cause an infinite loop

    const onComponentMount = () => {
        console.log("The component has mounted.")
    }

    const onComponentUnmount = () => {
        console.log("The component has unmounted.")
    }

    
    const someJSX = <p>Cool component</p>
    

    // Return some JSX here...
    return someJSX;
    
}
