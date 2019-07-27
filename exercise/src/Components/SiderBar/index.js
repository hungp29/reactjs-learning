import React, { Component } from 'react'
import { Layout } from 'antd'
import { connect } from 'react-redux';
import SearchBox from '../SearchBox'
import PostPreview from '../PostPreview'
import UserPreview from '../UserPreview';
import { ROUTES } from '../../Constants';
import './style.scss'

const { Sider } = Layout

class SiderBar extends Component {
  renderByRouteRequest() {
    switch (this.props.match.path) {
      case ROUTES.users:
      case ROUTES.user:
        return this.renderUsers()
      case ROUTES.posts:
      case ROUTES.albums:
      default:
        return null
    }
  }

  renderUsers() {
    if (this.props.users) {
      const { users } = this.props
      return (
        <React.Fragment>
          {users.map((user, index) => (
            <UserPreview {...this.props} key={'user_' + user.id} user={user} />
          ))}
        </React.Fragment>
      )
    }
  }

  render() {
    return (
      <Sider width={250} className='siderbar'>
        {/* Search Box */}
        <SearchBox />
        <div className='preview-content'>
          {this.renderByRouteRequest()}
          {/* <PostPreview like unread /> */}
          {/* <PostPreview like selected /> */}
          {/* <PostPreview /> */}
          {/* <PostPreview /> */}
        </div>
      </Sider>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users
  }
}

export default connect(mapStateToProps)(SiderBar)
