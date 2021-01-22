import React,{ useState } from 'react';

export default function Button(){
    const [buttonText, setButtonText] = useState("please click");

    return(
        <button onClick={() => setButtonText("Thanks")}>
            {buttonText}
        </button>
    )
}