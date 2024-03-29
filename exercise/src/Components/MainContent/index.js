import React, { Component } from 'react'
import { Layout, Row, Col, Button, PageHeader, Spin, Empty } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTrashAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './style.scss'
import HeaderContent from '../HeaderContent';
import { ROUTES } from '../../Constants';
import HeaderUser from '../HeaderUser';
import ContentUser from '../ContentUser';

const { Content } = Layout

export default class MainContent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderHeaderByRouteRequest() {
    switch (this.props.match.path) {
      case ROUTES.user:
        return <HeaderUser />
      default:
        return <Empty />
    }
  }

  renderContentByRouteRequest() {
    switch (this.props.match.path) {
      case ROUTES.user:
        return <ContentUser match={this.props.match} />
      default:
        return null
    }
  }

  render() {
    return (
      <Layout className='main-content'>
        {this.renderHeaderByRouteRequest()}
        {this.renderContentByRouteRequest()}
        {/* <HeaderContent /> */}
        {/* <Content> */}
        {/* There are contentss */}
        {/* </Content> */}
        {/* <Empty /> */}
      </Layout>
    )
  }
}
