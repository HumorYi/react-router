import React, { Component } from 'react'
import { RouterContext } from './RouterContext'
import Lifecycle from './Lifecycle'

// 重定向，常用于路由守卫
export default class Redirect extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          const { history } = context
          const { to, push = false } = this.props

          return (
            <Lifecycle
              onMount={() => {
                // 兼容了to是字符串，在源码中要处理to是字符串和对象两个情况
                push ? history.push(to) : history.replace(to)
              }}
            ></Lifecycle>
          )
        }}
      </RouterContext.Consumer>
    )
  }
}
