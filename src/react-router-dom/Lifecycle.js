import { Component } from 'react'

// 生命周期组件，用于复用 挂载和卸载 钩子
export default class Lifecycle extends Component {
  componentDidMount() {
    this.props.onMount && this.props.onMount.call(this, this)
  }

  componentWillUnmount() {
    this.props.onUnMount && this.props.onUnMount.call(this, this)
  }

  render() {
    return null
  }
}
