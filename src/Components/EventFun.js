import React from 'react'

function Event_fun() {
    function Handler(){
        // console.log("You are properly Clike");
        // alert("Thanks for your Cliking");
         document.write("Thanks for clike")
      
    }

  return (
    <div>
      
      <button onClick={Handler}>Clike Hire</button>
    </div>
  )
}

export default Event_fun
