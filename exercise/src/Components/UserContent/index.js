import React, { Component } from 'react'
import { Layout, Row, Col, Button, PageHeader, Spin } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTrashAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './style.scss'
import HeaderContent from '../HeaderContent';
import { ROUTES } from '../../Constants';

const { Content } = Layout

export default class UserContent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    console.log('user content')
    return (
      <Layout className='user-content'>
        {/* Header */}
        <PageHeader className='header-content'>
          <Row type='flex' justify='space-between' align='middle'>
            <Col span={12} className='left-btn'>
              <div className='flex-middle-left'>
                <Button className='circle-btn' type='primary' shape='circle'>
                  <FontAwesomeIcon className='icon' icon={faTrashAlt} />
                </Button>
              </div>
            </Col>
            <Col span={12}>
              <div className='flex-middle-right'>
                <span className='page'>2 of 52</span>
                <Button className='circle-btn prev' type='primary' shape='circle'>
                  <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                </Button>
                <Button className='circle-btn next' type='primary' shape='circle'>
                  <FontAwesomeIcon className='icon' icon={faChevronRight} />
                </Button>
              </div>
            </Col>
          </Row>
        </PageHeader>
        {/* END Header */}
        <Content>
          User
        </Content>
      </Layout>
    )
  }
}
