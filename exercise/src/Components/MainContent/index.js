import React, { Component } from 'react'
import { Layout, Row, Col, Button, PageHeader, Spin } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTrashAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './style.scss'
import HeaderContent from '../HeaderContent';
import { ROUTES } from '../../Constants';

const { Content } = Layout

export default class MainContent extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    if (this.props.location && this.props.location.pathname && this.props.location.pathname !== ROUTES.users) {
      this.state.renderHeaderContent = true
    }

  }

  render () {
    console.log('main content', this.state.renderHeaderContent)
    return (
      <Layout className='main-content'>
        {this.state.renderHeaderContent && <HeaderContent /> }
        <Content>
          There are contents
        </Content>
      </Layout>
    )
  }
}
