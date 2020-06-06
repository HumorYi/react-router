import React, { Component } from 'react'
import { createMemoryHistory } from 'history'
import Router from './Router'

/**
 * 把 URL 的历史记录保存在内存中的 <Router> （不读取、不写⼊地址栏）。
 * 在测试和非浏览器环境中很有用，如 React Native
 */
export default class MemoryRouter extends Component {
  constructor(props) {
    super(props)
    this.history = createMemoryHistory()
  }

  render() {
    return <Router history={this.history} children={this.props.children} />
  }
}
