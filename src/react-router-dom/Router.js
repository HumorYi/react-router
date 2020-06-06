import React, { Component } from 'react'
import { RouterContext } from './RouterContext'

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
