import React, { Component } from 'react'
import { RouterContext } from './RouterContext'

// 路由器对象，向下传递 location、history、match，location 变更监听
export default class Router extends Component {
  static computeRootMatch(pathname) {
    return { path: '/', url: '/', params: {}, isExact: pathname === '/' }
  }

  constructor(props) {
    super(props)
    this.state = {
      location: props.history.location
    }

    this.unListen = props.history.listen(location => {
      this.setState({ location })
    })
  }

  componentWillUnmount() {
    this.unListen && this.unListen()
  }

  render() {
    const { location } = this.state
    const { history } = this.props

    return (
      <RouterContext.Provider
        value={{
          location,
          history,
          match: Router.computeRootMatch(location.pathname)
        }}
      >
        {this.props.children}
      </RouterContext.Provider>
    )
  }
}
