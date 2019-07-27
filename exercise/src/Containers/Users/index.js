import React, { Component } from 'react'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import NavBar from '../../Components/NavBar'
import MainContent from '../../Components/MainContent'
import { actionRequestUsers } from '../../Actions/users'
import SiderBar from '../../Components/SiderBar';
import UserContent from '../../Components/UserContent';

class Users extends Component {
  componentWillMount () {
    this.props.actionRequestUsers()
  }

  render () {
    console.log('current props', this.props)
    return (
      // <Layout>
      //   <NavBar />
        <Layout style={{ marginLeft: this.props.navbar.collapsed ? this.props.navbar.collapsedWidth : this.props.navbar.width }}>
          <SiderBar {...this.props} />
          <MainContent {...this.props} />
          {/* <UserContent /> */}
        </Layout>
      // </Layout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    navbar: state.app.navbar,
    status: state.users.status,
    data: state.users.data,
    error: state.users.error
  }
}

const mapActionToProps = {
  actionRequestUsers
}

export default connect(mapStateToProps, mapActionToProps)(Users)
