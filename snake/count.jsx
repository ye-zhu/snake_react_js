import React from 'react';

class Count extends React.Component{
  constructor (props) {
    super(props);
  }

  render () {
    // debugger

    let listItems = this.props.previousCounts.map((count) => {
      return <li>count is : {count}</li>
    })


    return (
      <ul>
        {listItems}
      </ul>
    )
  }


}

export default Count
