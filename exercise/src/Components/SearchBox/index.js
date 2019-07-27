import React, { Component } from 'react'
import { Input } from 'antd'
import './style.css'

const { Search } = Input

export default class SearchBox extends Component {
  render () {
    return (
      <div className='search-box flex-center'>
        <Search className='search-input' />
      </div>
    )
  }
}
