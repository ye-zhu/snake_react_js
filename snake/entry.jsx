import React from 'react'
import ReactDOM from 'react-dom'
import Game from './game'
import Count from './count'

class View extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      previousCounts: []
    };
  }

  alertNameOnClick (name, e) {
    alert(name)
  }

  alertToParent () {
    console.log(this);
    alert('hello')
  }

  increment() {
    this.setState({count: this.state.count += 1})
  }

  reset() {
    event.preventDefault();
    this.state.previousCounts.push(this.state.count)
    this.setState({cout: this.state.count = 0})
  }


  render () {
    let nameList = ['billy', 'bob', 'joe'].map((name) => {
      return (
        <div>
        <button key={name} onClick={this.alertNameOnClick.bind(this, name)}>{name}</button>
        </div>
      )
    })
    return (
      <div>
        <Header title={"HELLO WORLD "}
                country={"USA"}
                view={this}
                increment={this.increment.bind(this)}
                reset={this.reset.bind(this)}
                previousCounts={this.state.previousCounts}
                />
        <div>
          {nameList}
        </div>
      </div>
    )
  }


  //End
}


class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <button onClick={this.props.increment}>
          Counter
        </button>
        <span>{this.props.view.state.count}</span>
        <br/>
        <button onClick={this.props.reset}> Reset!! </button>
        <Count previousCounts={this.props.previousCounts}/>
        <br/>
        {this.props.title}
        {this.props.country}
      </div>
    )
  }
}



// document.addEventListener("DOMContentLoaded", () => {
//   let root = document.getElementById('root')
//   ReactDOM.render(<View/>, root )
// })
