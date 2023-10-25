import { Component } from "react";

 

 export default class Props extends Component{
    render(){
        return(
            <>
            <h1>{this.props.name} Kebadu, Age: {this.props.age}</h1>
            
            </>
        )
    }
 }