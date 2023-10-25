import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      username: '',
      comment: '',
      tutorial:''
    }
  }

  Usernamehandler=(event)=>{
    
    this.setState({
      username: event.target.value
    })


  }

  commenthandler=(event)=>{
    this.setState({
      comment: event.target.value

    })
  }
  tutorialhandler=(event)=>{
    this.setState({
      tutorial: event.target.value
    })
  }

  submithandler=(event)=>{
    alert(`${this.state.username} ${this.state.comment} ${this.state.tutorial}`)

  }
  render() {
    return (
      <div>
        <form onSubmit={this.submithandler}>
        <label>USerName</label>
        <input type='text' value={this.state.username} onChange={this.Usernamehandler} />
        <input type='text' value={this.state.comment} onChange={this.commenthandler} />
        <label>Turorial</label>
        <select value={this.state.tutorial} onChange={this.tutorialhandler}>
          
          <option>Javascript</option>
          <option>C++</option>
          <option>Java</option>
        </select>
        <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
