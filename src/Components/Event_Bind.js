import React from 'react'

class Event_Bind extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        msg:"Hello Sir",

    };
    this.handler =this.handler.bind(this);
  }

  handler(){
    this.setState({
        msg:"Good By Sir",
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        {/* <button onClick={()=>this.handler()}>Click!!!!!!!</button> */}
        {/* <button onClick={this.handler.bind(this)}>Click!!!!!!!</button> */}
        <button onClick={this.handler}>Click!!!!!!!</button>
      </div>
    )
  }
}

export default Event_Bind
