import React, { Component } from 'react'
import { Layout } from 'antd'
import SearchBox from '../SearchBox'
import PostPreview from '../PostPreview'
import UserPreview from '../UserPreview';
import { ROUTES } from '../../Constants';
import './style.scss'

const { Sider } = Layout

export default class SiderBar extends Component {
  renderByRouteRequest() {
    console.log(this.props)
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
    if (this.props.data && this.props.data.result && this.props.data._meta.success) {
      const { result } = this.props.data
      return (
        <React.Fragment>
          {result.map((item, index) => (
            <UserPreview {...this.props} key={'user_' + item.id} user={item} />
          ))}
        </React.Fragment>
      )
    }
  }

  render() {
    console.log('sider bar')
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
