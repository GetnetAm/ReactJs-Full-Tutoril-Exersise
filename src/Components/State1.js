import React, { Component } from "react";

class Subscribe extends React.Component {
    constructor() {
        super();
        this.state={
            chanal: "Giwon Media",
        }
    }
     ChangeMessage() {
        this.setState({
            chanal:"Thanks Bro For Your Subscribe",
        })
        
    }

    render() {
        return (
            <div>
                <h1>{this.state.chanal}</h1>
            <button onClick={() =>this.ChangeMessage()}>Subscribe Bro</button>
            </div>
        );
    }
}

export default Subscribe;