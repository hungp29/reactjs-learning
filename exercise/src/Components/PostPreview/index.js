import React, { Component } from 'react'
import { Card, Skeleton } from 'antd'
import './style.css'
import PostTitle from './Title'
import PostDescription from './Description'

const { Meta } = Card

export default class PostPreview extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  render () {
    return (
      <Card className={'post-preview' + (!this.props.selected ? '' : ' selected')} hoverable>
        <Skeleton loading={this.state.loading} active>
          <Meta title={<PostTitle like={this.props.like} unread={this.props.unread} />} description={<PostDescription />} />
        </Skeleton>
      </Card>
    )
  }
}
