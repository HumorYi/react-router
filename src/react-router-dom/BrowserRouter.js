import React, { Component } from 'react'
import Router from './Router'
import { createBrowserHistory } from 'history'

/**
 * BrowserRouter使用 HTML5 history API（ pushState，replaceState 和popstate事件），让页面的 UI 与 URL 同步
 * BrowserRouter需要服务器端对不同的 URL 返回不同的 HTML
 *
 * 历史记录管理对象 history 初始化及向下传递
 */
export default class BrowserRouter extends Component {
  constructor(props) {
    super(props)

    this.history = createBrowserHistory()
  }

  render() {
    return <Router history={this.history}>{this.props.children}</Router>
  }
}
