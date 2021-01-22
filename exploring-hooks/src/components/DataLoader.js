import React from 'react';
import {useFetch} from './useFetch';

export default function DataLoader(){
    let response = useFetch('https://jsonplaceholder.typicode.com/todos');
    console.log("data ", response);
    return(
        <div>
            <ul>
                {response.data.map(el => (
                    <li key={el.id}>{el.title}</li>
                ))}
            </ul>
        </div>
    )
}