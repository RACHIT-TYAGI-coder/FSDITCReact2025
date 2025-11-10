import React from 'react';
import { useState } from 'react';   

function StateHandling() {
    let [counter, setCounter] = useState(20);
    function increaseValue(){
        setCounter(counter+1);
    }
    return (
        <div>StateHandling
            <h2>counter value = {counter}</h2>
            <button onClick={increaseValue}>Increase Value</button>
            <button onClick={()=>setCounter(counter-2)}>Decrease Value</button>

        </div>
      
    )
}

export default StateHandling