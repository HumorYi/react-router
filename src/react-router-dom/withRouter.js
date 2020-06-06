import React from 'react'
import { RouterContext } from './RouterContext'

// 高阶组件，传递路由数据
const withRouter = Component => props => {
  return (
    <RouterContext.Consumer>
      {context => {
        return <Component {...props} {...context} />
      }}
    </RouterContext.Consumer>
  )
}

export default withRouter
