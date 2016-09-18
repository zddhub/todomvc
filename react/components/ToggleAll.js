import React, { Component } from 'react'

class ToggleAll extends Component{
  render() {
    return (
      <input type='checkbox' className='toggle-all' onChange={this.props.toggleAllChange}/>
    )
  }
}

export default ToggleAll
