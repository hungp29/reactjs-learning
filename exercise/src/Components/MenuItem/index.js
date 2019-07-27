import React, { Component } from 'react'
import { Menu, Badge } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './style.scss'

export default class MenuItem extends Component {
  render () {
    const { title, icon, count, linkTo, ...other } = this.props

    return (
      <Menu.Item {...other} className='menu-item flex-center' title={title}>
        <Link to={linkTo}>
          <Badge count={count} showZero={false}>
            <div className='menu-item-wrap flex-center'>
              <FontAwesomeIcon className='icon' icon={icon} />
              <span className='nav-text'>{title}</span>
            </div>
          </Badge>
        </Link>
      </Menu.Item>
    )
  }
}
