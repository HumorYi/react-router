import React, { Component } from 'react'
import { RouterContext } from './RouterContext'
import matchPath from './matchPath'

/**
 * 路由配置，匹配检测，内容渲染
 *
 * match 按照互斥规则 优先渲染顺序为 children component render null，
 * children如果是function执行function，否则是节点直接渲染
 *
 * 不match children 或者null （只渲染function）
 */
export default class Route extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          const { path, computedMatch, children, component, render } = this.props

          // 优先从props中取值
          const location = this.props.location || context.location

          // 优先从props中取值计算
          const match = computedMatch ? computedMatch : path ? matchPath(location.pathname, this.props) : context.match

          const props = {
            ...context,
            location,
            match
          }

          return (
            <RouterContext.Provider value={props}>
              {
                // match 渲染这三者之一：children component render或者null
                // 不match，渲染children 或者 null
              }
              {match
                ? children
                  ? typeof children === 'function'
                    ? children(props)
                    : children
                  : component
                  ? React.createElement(component, props)
                  : render
                  ? render(props)
                  : null
                : typeof children === 'function'
                ? children(props)
                : null}
            </RouterContext.Provider>
          )
        }}
      </RouterContext.Consumer>
    )
  }
}
