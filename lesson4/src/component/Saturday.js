import React from 'react';

export function Saturday(props) {
    const someJSX = (
        <div id="saturday">
            <p>It is lesson {props.lessonNumber} of the unit.</p>
            <p>We are learning about {props.software}.</p>
        </div>
    );

    return (
        <>
            { someJSX }
        </>
    )
}
