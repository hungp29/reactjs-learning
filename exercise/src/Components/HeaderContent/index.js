import React, { Component } from 'react'
import { Row, Col, Button, PageHeader } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTrashAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './style.scss'

export default class HeaderContent extends Component {
  render() {
    return (
      <PageHeader className='header-content'>
        <Row type='flex' justify='space-between' align='middle'>
          <Col span={12} className='left-btn'>
            <div className='flex-middle-left'>
              <Button className='circle-btn like' type='primary' shape='circle'>
                <FontAwesomeIcon className='icon' icon={faHeart} />
              </Button>
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
        <Row>
          <Col span={24}>
            <span className='title'>This is title</span>
          </Col>
        </Row>
      </PageHeader>
    )
  }
}