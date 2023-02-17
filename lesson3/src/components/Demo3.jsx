import React from 'react';

// Components are functions which are exported to be used elsewhere
export default function Demo3() {
    // Components return things to render something on the page
    return (
        <>
        {/* JSX to be rendered */}
        </>
    );

    /* NOTE: The empty html tags (<> & </>) are called react fragments. We use these to group
    together child elements (the content inside of them) because return statements may only
    return a single parent element. */
}
