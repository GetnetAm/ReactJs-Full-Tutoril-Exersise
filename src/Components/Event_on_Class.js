import React from 'react'

class Event_Cl extends React.Component {
  constructor() {
    super();
  }
  handler(){
    // console.log("You are properl clik");
    alert("you are properly click")
  }

  render() {
    return (
      <div>
        
        <button onClick={this.handler}>Click Here</button>
      </div>
    )
  }
}

export default Event_Cl;
