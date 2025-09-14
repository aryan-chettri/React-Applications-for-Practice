import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByValue, decrementByValue } from './counterSlice';

export function Counter(){

    const [value, setValue] = useState(0);

    const count = useSelector((state) => state.counter.value)

    const dispatch = useDispatch()

    return(
        <div>

            <div>         
                <button
                    onClick={()=> dispatch(increment())}
                >Increment</button>
            </div>

            <div>
                <button
                    onClick={()=> dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>

            <span>{count}</span>

            <div>

                <input type="text" placeholder='Value' value={value} onChange={(e)=>setValue(e.target.value)}/>
                <button onClick={()=>dispatch(incrementByValue(value))}>Increment By Value</button>
                <button onClick={()=>dispatch(decrementByValue(value))}>Decrement By Value</button>
            </div>


        </div>
    )
}