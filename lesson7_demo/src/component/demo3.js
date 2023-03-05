//import { database } from '@/database.js';
import { database } from '../database.js';
import { onValue, ref, off } from 'firebase/database';
import React, { useEffect } from 'react';

export default function Demo3() {
    useEffect(() => {
        const dataRef = ref(database, '/');
        onValue(dataRef, (snap) => {
            // This is just a complicated iterative process
             //     to read all the data from the database and
            //     print it to the console. Your data reads
            //     will use a similar loop, but probably
            //     not two of them
            for(let key in snap.val()) {
                console.log(key, ':');
                for(let sub_key in snap.val()[key]) {
                    console.log('   ',sub_key, ':', snap.val()[key][sub_key]);
                }
                console.log('-----------------')
            }
        });

        return () => {
            const dataRef = ref(database, '/');
            off(dataRef);
            console.log("Removed listener");
        }
    }, [])

    const someJSX = (
    <div>
        <h1>Software Saturdays</h1>
        <h2>Lesson 7, Demo 3</h2>
        <h3>Check your browser console!</h3>
    </div>
    );

    return someJSX;
}