import React, { Component } from 'react'

class FilterTodo extends Component{
  render() {
    return (
      <footer className='footer'>
        <span className='todo-count'>{this.props.activeCount === 1 ? '1 item' : '' + this.props.activeCount + ' items'} left</span>
        <ul className='filters'>
          <li><a className={this.props.filter === 'All' ? 'checked-filter' : ''} onClick={this.props.filterChange} href='#'>All</a></li>
          <li><a className={this.props.filter === 'Active' ? 'checked-filter' : ''} onClick={this.props.filterChange} href='#'>Active</a></li>
          <li><a className={this.props.filter === 'Completed' ? 'checked-filter' : ''} onClick={this.props.filterChange} href='#'>Completed</a></li>
        </ul>
      </footer>
    )
  }
}

export default FilterTodo
