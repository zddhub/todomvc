import React, { Component, PropTypes } from 'react'

class ToggleAll extends Component{
  render() {
    return (
      <input type='checkbox' className='toggle-all' onChange={this.props.toggleAllChange}/>
    )
  }
}

ToggleAll.propTypes = {
  toggleAllChange: PropTypes.func.isRequired
}

export default ToggleAll
