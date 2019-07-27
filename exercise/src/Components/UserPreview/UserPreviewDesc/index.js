import React, { Component } from 'react'
// import '../style.scss'

export default class UserPreviewDesc extends Component {
  render () {
    const { user } = this.props
    return (
      <p className='user-content'>
        <span>{user.email}</span>
      </p>
    )
  }
}
