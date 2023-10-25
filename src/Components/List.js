import React from 'react'

function ProgramingList() {
    const prog=['C++', 'Java', "Python", "C++"]
    
  return (
    <div>

        {/* {
             <h1>{prog[0]}</h1>
             <h1>{prog[1]}</h1>
            <h1>{prog[2]}</h1>
        }
       */}


       {
        // prog.map(name=> <h1 key={name}>{name}</h1>)

        prog.map((name,index)=> <h1 key={index}>{name}</h1>)
       }
       
    </div>
  )
}

export default ProgramingList
