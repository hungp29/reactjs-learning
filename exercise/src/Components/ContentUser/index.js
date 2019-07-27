import React, { Component } from 'react'
import { Layout, Row, Col, Button, PageHeader, Spin } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTrashAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './style.scss'
import HeaderContent from '../HeaderContent';
import { ROUTES } from '../../Constants';

const { Content } = Layout

export default class ContentUser extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    console.log('user content')
    return (
      <Content>
        User
      </Content>
    )
  }
}
