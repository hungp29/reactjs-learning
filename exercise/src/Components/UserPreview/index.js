import React, { Component } from 'react'
import { Card, Skeleton, Avatar } from 'antd'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import UserPreviewTitle from './UserPreviewTitle';
import UserPreviewDesc from './UserPreviewDesc';
import { actionSelectUser } from '../../Actions/users';
import './style.scss'
import { ROUTES, SLASH } from '../../Constants';

const { Meta } = Card

class UserPreview extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false
    }
  }

  render() {
    const { user, match } = this.props
    console.log('User preview', match)
    return (
      <Card className={'user-preview' + (match && match.params && match.params.id === user.id ? ' selected' : '')} hoverable onClick={this.handleClick}>
        <Skeleton loading={this.state.loading} active>
          <Meta
            avatar={<Avatar src={user._links && user._links.avatar && user._links.avatar.href} />}
            title={<UserPreviewTitle user={user} />}
          // description={<UserPreviewDesc user={user} />}
          />
        </Skeleton>
      </Card>
    )
  }

  handleClick = () => {
    console.log('click ', this.props.user.id)
    this.props.history.push(ROUTES.users + SLASH + this.props.user.id)
  }
}

// const mapStateToProps = state => {
//   return {
//     selectedUser: state.users.selectedUser
//   }
// }

// const mapActionToProps = {
//   actionSelectUser
// }

// export default connect(mapStateToProps, mapActionToProps)(UserPreview)
export default UserPreview
