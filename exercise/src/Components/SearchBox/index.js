import React, { Component } from 'react'
import { Input } from 'antd'
import './style.css'

const { Search } = Input

export default class SearchBox extends Component {
  render () {
    console.log('Search box')
    return (
      <div className='search-box flex-center'>
        <Search className='search-input' onSearch={value => console.log(value)} />
      </div>
    )
  }
}
