import { useState } from "react"

const Counter1=()=>{

    const [count,setcount]=useState(0)

    const onIncreamentHandler=()=>{
      setcount(count=>count+1)
    }
    const  onDecrementHandler=()=>{
      setcount(count=>count-1)
      
    }
    return<div>
    <h1>counter-{count}</h1>
    <button onClick={onIncreamentHandler}>increament</button>
   <button onClick={onDecrementHandler}>decrement</button>
   </div>
}
export default Counter1