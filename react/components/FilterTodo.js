import React, { Component } from 'react'

class FilterTodo extends Component{
  render() {
    return (
      <footer>
        <span>{this.props.activeCount === 1 ? '1 item' : '' + this.props.activeCount + ' items'} left</span>
        <ul>
          <li><a href='#'>All</a></li>
          <li><a href='#'>Active</a></li>
          <li><a href='#'>Completed</a></li>
        </ul>
      </footer>
    )
  }
}

export default FilterTodo
