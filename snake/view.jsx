import React from 'react'
import ReactDOM from 'react-dom'
import Game from './game'


class View extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      game: new Game(this)
    }
  }

  render() {

    let board = this.state.game.board.grid.map((row, rowidx) => {
      let units = row.map((unit, colidx) => {
          let snakeClass = undefined
          let fruitClass = undefined
            this.state.game.snake.pos.forEach((pos) => {
              if (pos[0] === rowidx && pos[1] === colidx) {
                snakeClass = "snake"
              }
            })

              let fruitPos = this.state.game.fruit
              if (fruitPos[0] === rowidx && fruitPos[1] === colidx) {
                fruitClass = "fruit"
              }

        return (
          <div className={`unit ${snakeClass} ${fruitClass}`} key={`${colidx}`}>
            {this.state.game.count}
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
      </div>
    )
  }

}

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById('root')
  ReactDOM.render(<View />, root )
})
