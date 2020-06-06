import React, { Component } from 'react'
import { createHashHistory } from 'history'
import Router from './Router'

/**
 * HashRouter最简单，不需要服务器端渲染，靠浏览器的#的来区分 path就可以
 * HashRouter不支持 location.key 和 location.state，动态路由跳转需要通过?传递参数
 */
export default class HashRouter extends Component {
  constructor(props) {
    super(props)
    this.history = createHashHistory()
  }

  render() {
    return <Router history={this.history} children={this.props.children} />
  }
}
