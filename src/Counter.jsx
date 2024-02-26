import { useState } from "react"

const Counter=()=>{
    const [count, setcount]=useState(0)
     const onIncrehandler=()=>{
        setcount(count=>count+1)
     }
     const onDecHanddler=()=>{
        setcount(count=>count-1)
     }
    return<div>
        <h1>Counter-{count} </h1>
        <button onClick={onIncrehandler}>increament</button>
        <button onClick={onDecHanddler}>decrement</button>
    </div>

}
export default Counter