import {useSelector, useDispatch} from 'react-redux'

import { countLength } from './counterSlice'
import { useState } from 'react'

export function Counter(){

    const [length, setLength] = useState(0);
    const [text, setText] = useState('');

    const count = useSelector((state)=> state.counter.value)

    const dispatch = useDispatch()

    return(
        <div>
            <div>
                
                <input type="text" placeholder='Enter the text' 
                    onChange={(e)=>{
                    setText(e.target.value)
                    dispatch(countLength(e.target.value.length))
                    }}/>
            </div>

            <h1>{text}</h1>
            <h2>{count}</h2>
        </div>
    )
}