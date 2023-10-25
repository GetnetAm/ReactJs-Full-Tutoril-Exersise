import React from 'react'
import { useState } from 'react'

function UseStateObject() {
    const [name, setName]=useState({FName:'', LName:''});
  return (
    <div>

        <form>
            <input type='text' value={name.FName} onChange={e => setName({...name,FName: e.target.value})}   />
            <input type='text' value={name.LName} onChange={e=> setName({...name,LName: e.target.value})}  />

            <div>
                <h1>Your Name is :{name.FName}</h1>
                <h1>Your Lanst Name is: {name.LName}</h1>
            </div>
        </form>
      
    </div>
  )
}

export default UseStateObject
