import React, { Component } from 'react'
import { Layout, Row, Col, Button, PageHeader, Spin, Card, Avatar } from 'antd'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTrashAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './style.scss'
import HeaderContent from '../HeaderContent';
import { ROUTES } from '../../Constants';
import { actionRequestUser } from '../../Actions/users';
import Meta from 'antd/lib/card/Meta';

const { Content } = Layout

class ContentUser extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    if (this.props.match && this.props.match.params && this.props.match.params.id) {
      this.props.actionRequestUser(this.props.match.params.id)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match && this.props.match.params && this.props.match.params.id && this.props.match.params.id !== prevProps.match.params.id) {
      this.props.actionRequestUser(this.props.match.params.id)
    }
  }

  render() {
    const { user } = this.props
    console.log(user)
    if (user) {
      return (
        <Content>
          <Card bordered={false}>
            <Meta
              avatar={<Avatar src={user._links && user._links.avatar && user._links.avatar.href} />}
              title={user.first_name + ' ' + user.last_name}
              description={
                <React.Fragment>
                  <p>Test</p>
                  <p>New</p>
                </React.Fragment>
              }
            />
          </Card>
        </Content>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.user
  }
}

const mapActionToProps = {
  actionRequestUser
}

export default connect(mapStateToProps, mapActionToProps)(ContentUser)
// export default ContentUser
