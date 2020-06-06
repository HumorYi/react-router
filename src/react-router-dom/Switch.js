import React, { Component } from 'react'
import { RouterContext } from './RouterContext'
import matchPath from './matchPath'

// 渲染与该地址匹配的第一个子节点 <Route> 或者 <Redirect>
export default class Switch extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          const { location } = context
          const { children } = this.props
          // 如果找到匹配的元素 记录在element
          let element = null

          // children object | array
          React.Children.forEach(children, child => {
            if (element === null && React.isValidElement(child)) {
              // match 记录是否找到匹配的元素
              const match = child.props.path ? matchPath(location.pathname, child.props) : context.match

              if (match) {
                element = child
              }
            }
          })

          return element
        }}
      </RouterContext.Consumer>
    )
  }
}
