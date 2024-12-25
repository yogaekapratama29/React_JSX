import { useState } from "react";

export default function Counter(){
    let [counter,setCounter] = useState(0);
    return(
        <div>
            <button onClick={() => {
                // setCounter(counter + 1);

                // State Update menggunakan lamda
                setCounter((c) => c + 1);
                setCounter((c) => c + 1);
                setCounter((c) => c + 1);
                console.log(counter);
            }}>Increment</button>

            <h1>Counter : {counter}</h1>
        </div>
    )
}