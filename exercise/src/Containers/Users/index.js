import React, { Component } from 'react'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import NavBar from '../../Components/NavBar'
import MainContent from '../../Components/MainContent'
import { actionRequestUsers } from '../../Actions/users'

class Users extends Component {
  componentWillMount () {
    this.props.actionRequestUsers()
  }

  render () {
    console.log('current props', this.props)
    return (
      // <Layout>
      //   <NavBar />
        <Layout style={{ marginLeft: 80 }}>
          <MainContent {...this.props} />
        </Layout>
      // </Layout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.users.status,
    data: state.users.data,
    error: state.users.error
  }
}

const mapActionToProps = {
  actionRequestUsers
}

export default connect(mapStateToProps, mapActionToProps)(Users)
