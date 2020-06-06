import React, { Component } from 'react'
import { RouterContext } from './RouterContext'

// a 标签 跳转链接，处理点击事件
export default class Link extends Component {
  static contextType = RouterContext

  handleClick = e => {
    e.preventDefault()

    this.context.history.push(this.props.to)
  }

  render() {
    const { to, children } = this.props

    return (
      <a href={to} onClick={this.handleClick}>
        {children}
      </a>
    )
  }
}
