import React, { useEffect } from 'react';
import { useState } from 'react';

export function Purdue(props) {
    const [semester, setSemester] = useState("Fall");
    const [year, setYear] = useState(props.year);
    const [timeStamp, setTimeStamp] =  useState((new Date()).toISOString());

    const someJSX = (
        <div>
            <p>It is the { semester } of { year }.</p>
            <p>Timestamp: { timeStamp }</p>
        </div>
    );

    // Ignore useEffect. We will go over it next class.
    useEffect(() => {
        // After 2 seconds, change semester and year
        setTimeout(() => {
            setSemester("Spring");
            setYear(2023)
        }, 2000);
    }, [])

    return (
        // Type your code here...
        <>
            { someJSX }
        </>
        
    )
}