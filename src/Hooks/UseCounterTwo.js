import React, { useState } from 'react'

function UseCounterTwo() {
    const intialState=0;
    const [count, UpdateCounter]= useState(intialState);
  return (
    <div>
        <button onClick={()=>UpdateCounter(count)}>Count {count}</button>
        <button onClick={()=>UpdateCounter(intialState)}>Reset</button><br></br>
        <button onClick={()=>UpdateCounter(count+1)}>Increment</button>
        <button onClick={()=>UpdateCounter(count -1)}>Decrement</button>
      
    </div>
  )
}

export default UseCounterTwo
