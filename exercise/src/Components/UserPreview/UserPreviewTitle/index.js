import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { Tooltip } from 'antd';
// import '../style.css'

export default class UserPreviewTitle extends Component {
  render () {
    console.log('User preview title')
    const { user } = this.props
    return (
      <div className='user-title'>
        <span className='title'>{user.first_name + ' ' + user.last_name}</span>
        <p className='info'>
          <span className={user.status !== 'inactive' ? 'active' : 'inactive'}>
            <Tooltip title={user.status}>
              <FontAwesomeIcon icon={faCircle}/>
            </Tooltip>
          </span>
        </p>
      </div>
    )
  }
}
