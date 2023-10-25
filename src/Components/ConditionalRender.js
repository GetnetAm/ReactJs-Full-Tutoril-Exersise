import React from 'react'

class ConditionalRender extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        isSubscribe:true,
    }
  }

  render() {
// #########if condition subscribe

    // if(this.state.isSubscribe){
    //     return(
    //         <div>
    //             <h1>Subscribed</h1>
    //         </div>
    //     )
    // }
    // else{
    //     return(
    //         <div>
    //             <h1>Subscribe</h1>
    //         </div>
    //     )
    // }

    //@@@@@@@@@@Ternary Operator @@

    return(
        this.state.isSubscribe ?
        <div><h1>Subscribed</h1></div>:
        <div><h1>subscribe</h1></div>
    )

    // return (
    //   <div>
    //     <h1>Subscribe</h1>
    //     <h1>Subscribed</h1>
        
    //   </div>
    // )
  }
}

export default ConditionalRender
