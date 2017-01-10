import React from 'react'
import ReactDOM from 'react-dom'
import Game from './game'
import BottomPanel from './bottom_panel'


class View extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      game: new Game(this),
    }
  }

  makeNewGame () {
    this.setState({game: new Game(this)})
  }


  render() {
    let board = this.state.game.board.grid.map((row, rowidx) => {
      let units = row.map((unit, colidx) => {
          let snakeClass = undefined
          let fruitClass = undefined
          let fruitType = undefined
          let snakePos = this.state.game.snake.pos
            snakePos.forEach((pos) => {
              if (pos[0] === rowidx && pos[1] === colidx) {
                snakeClass = "snake"
              }
            })

              if (this.state.game.lost === "wall" && snakePos[1][0] === rowidx && snakePos[1][1] === colidx) {
                snakeClass = "snake head"
              } else if (snakePos[0][0] === rowidx && snakePos[0][1] === colidx) {
                snakeClass = "snake head"
              }

              let fruitPos = this.state.game.fruit
              if (fruitPos[0] === rowidx && fruitPos[1] === colidx) {
                fruitClass = "fruit"
                fruitType = this.state.game.fruitType
              }

        return (
          <div className={`unit ${snakeClass} ${fruitClass} ${fruitType}`} key={`${colidx}`} >
          </div>
        )
      })


      return (
        <div className={`row`} key={`${rowidx}`}>
          {units}
        </div>
      )
    })

    return (
      <div>
        {board}
        <BottomPanel restart={this}
                     newGame={this.makeNewGame.bind(this)}
                     pause={this.state.game.pauseGame.bind(this.state.game)}
                     score={this.state.game.score}
                     topScore={window.localStorage.snakeHighScore}
                     lost={this.state.game.lost}
        />
      </div>
    )
  }

//End
}

export default View

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById('root')
  ReactDOM.render(<View />, root )
})
