import React from 'react'
import ReactDOM from 'react-dom'

class BottomPanel extends React.Component {
  constructor (props) {
    super(props)
    this.gamepause = "Pause"
  }

  render () {
    let printText
    if (this.props.lost === true) {
      printText = <div className="score">Game Over!!! Your Score is <span className="p1">&nbsp;{this.props.score}</span></div>
    } else {
      printText = <div className="score">Your Top Score = <span className="p1">&nbsp;{this.props.topScore}</span> / Your Score = <span className="p1">&nbsp;{this.props.score}</span></div>
    }

    return (
      <div className="bottompanel">
        <div className="bottom">
          <button className="button restart" key="restart" onClick={this.props.newGame}>Restart</button>
          <button className="button pause" key="pause" onClick={this.props.pause}>Pause</button>
          <div>{printText}</div>
        </div>
        <div className="bottom lower">It's exactly like <span className="p1">&nbsp;SNAKE</span>, except it's called <span className="p1">&nbsp;CATERPILLAR</span>!!!&nbsp;<span className="p1">w = ▲ | s = ▼ | a = ◀ | d = ▶ </span></div>
      </div>
    )
  }

  //End
}



export default BottomPanel
