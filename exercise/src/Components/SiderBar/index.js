import React, { Component } from 'react'
import { Layout } from 'antd'
import './style.css'
import SearchBox from '../SearchBox'
import PostPreview from '../PostPreview'

const { Sider } = Layout

export default class SiderBar extends Component {
  render () {
    console.log('sider bar')
    return (
      <Sider width={250} className='siderbar'>
        {/* Search Box */}
        <SearchBox />
        <div className='preview-content'>
          <PostPreview like unread />
          {/* <PostPreview like selected />
          <PostPreview />
          <PostPreview /> */}
        </div>
      </Sider>
    )
  }
}
