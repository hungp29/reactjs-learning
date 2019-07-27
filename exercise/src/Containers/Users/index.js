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
    return (
      // <Layout>
      //   <NavBar />
        <Layout style={{ marginLeft: this.props.navbar.collapsed ? this.props.navbar.collapsedWidth : this.props.navbar.width }}>
          <SiderBar match={this.props.match} history={this.props.history} />
          <MainContent match={this.props.match} />
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
    // users: state.users.users,
    error: state.users.error
  }
}

const mapActionToProps = {
  actionRequestUsers
}

export default connect(mapStateToProps, mapActionToProps)(Users)
