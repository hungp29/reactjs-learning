import React, { Component } from 'react'
import { Layout } from 'antd'
import NavBar from '../../Components/NavBar'
import SiderBar from '../../Components/SiderBar'
import MainContent from '../../Components/MainContent';

export default class Posts extends Component {
  render () {
    return (
      // <Layout>
      //   <NavBar />
        <Layout style={{ marginLeft: 80 }}>
          <SiderBar {...this.props} />
          <MainContent {...this.props} />
        </Layout>
      // </Layout>
    )
  }
}
