import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import '../style.css'

export default class PostTitle extends Component {
  render () {
    console.log('Post title')
    return (
      <div className='post-title'>
        <span className='title'>Title Title Title Title Title Title Title Title Title Title</span>
        <p className='info'>
          {this.props.like && <span className='like'><FontAwesomeIcon icon={faHeart} /></span>}
          {this.props.unread && <span className='unread'><FontAwesomeIcon icon={faCircle} /></span>}
          <span className='time'>1:52pm</span>
        </p>
      </div>
    )
  }
}
