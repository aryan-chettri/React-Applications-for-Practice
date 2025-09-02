import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "./counterSlice";

export function Counter(){

    const count = useSelector((state)=> state.counter.value)
    const disptch = useDispatch();
    const [input, setInput] = useState(0);

    const setInputfunction = (e) =>{
        setInput(e.target.value)
        console.log(input)
    }

    return(
        <div>
            <div>
                <button
                    aria-label="Increment Value"
                    onClick={()=>disptch(increment())}
                >
                    Increment
                </button>
                <span> {count} </span>
                <button 
                    aria-label="Decrement Value"
                    onClick={()=> disptch(decrement())}
                >
                    Decrement
                </button>

                <input type="Number" placeholder="Enter the amount" value={input} onChange={setInputfunction}/>
                <button
                    onClick={()=>disptch(incrementByValue(input))}
                >
                    Add Value
                </button>
            </div>
        </div>
    )
}