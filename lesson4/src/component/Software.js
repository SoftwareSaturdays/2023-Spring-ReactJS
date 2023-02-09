import React from 'react';

export function Software(props) {
    let dayOfWeek = props.day;
    let date = props.date;

    const someJSX = (
        <div id="software">
            <p>Today is {dayOfWeek}, {date}.</p>
        </div>
    );

    return (
        <>
            { someJSX }
        </>
    );
}