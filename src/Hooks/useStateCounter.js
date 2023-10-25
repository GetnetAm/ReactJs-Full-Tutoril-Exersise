import React, { useState } from 'react'

function CounterState() {
    const [count, counnterUpdate]=useState(0);
 
  return (
    <div>

        <h1>First useState Counter</h1>
        <button onClick={()=> counnterUpdate(count+1)}>Count {count}</button>
    
      
    </div>
  )
}

export default CounterState
