import React from 'react';

export default function Demo2(props) {
    const listOfNums = props.numbers.map((number) => <li>{number}</li>);

    const someJSX = <ul>{listOfNums}</ul>;

    // Return some JSX here...
    return someJSX;
}