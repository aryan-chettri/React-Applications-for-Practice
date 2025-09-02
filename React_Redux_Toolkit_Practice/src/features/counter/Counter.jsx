import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

export function Counter(){

    const count = useSelector((state)=> state.counter.value)
    const disptch = useDispatch();
    const [value, setValue] = useState(0);

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
                
            </div>
        </div>
    )
}