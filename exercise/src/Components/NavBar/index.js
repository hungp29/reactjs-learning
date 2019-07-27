import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout, Menu, Avatar } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faHeart, faCompactDisc, faSun } from '@fortawesome/free-solid-svg-icons'
import { ROUTES } from '../../Constants'
// import { actionSelectMenu } from '../../Actions/app'
import MenuItem from '../MenuItem'
import './style.scss'

const { Sider } = Layout
const defaultCollapsed = true

class NavBar extends Component {
  constructor (props) {
    super(props)

    this.state = {}

    if (this.props.location && this.props.location.pathname) {
      this.state.selectedKeys = this.props.location.pathname.replace('/', '')
    }
  }

  render () {
    console.log('navbar')
    return (
      <Sider
        className='navbar'
        defaultCollapsed={defaultCollapsed}
        collapsed={this.props.navbar.collapsed}
        collapsedWidth={this.props.navbar.collapsedWidth}
        width={this.props.navbar.width}>
        {/* Logo */}
        <div className='logo flex-center'>
          <FontAwesomeIcon className='logo-icon' icon={faSun} />
        </div>
        {/* Menu */}
        <Menu className='menu' theme='dark'
          onClick={this.selectMenu}
          // defaultSelectedKeys={[this.props.currentMenu]}
          selectedKeys={[this.state.selectedKeys]}>
          <MenuItem key='users' title='Users' icon={faUsers} count={5} linkTo={ROUTES.users} />
          <MenuItem key='posts' title='Posts' icon={faHeart} count={0} linkTo={ROUTES.posts} />
          <MenuItem key='albums' title='Albums' icon={faCompactDisc} count={0} linkTo={ROUTES.albums} />
        </Menu>
        {/* User Info */}
        <div className='user-info flex-center'>
          <Avatar size={44} icon='user' />
        </div>
      </Sider>
    )
  }

  selectMenu = e => {
    if (e) {
      this.setState({selectedKeys: e.key})
    }
  }
}

const mapStateToProps = state => {
  return {
    navbar: state.app.navbar
  }
}

// const mapActionToProps = {
//   actionSelectMenu
// }

export default connect(mapStateToProps)(NavBar)
// export default NavBar
