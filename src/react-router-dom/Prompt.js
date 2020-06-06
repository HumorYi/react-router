import React from 'react'
import { RouterContext } from './RouterContext'
import Lifecycle from './Lifecycle'

// 离开当前路由时弹窗显示提示信息
export default function Prompt({ message, when = true }) {
  return (
    <RouterContext.Consumer>
      {context => {
        if (!when) {
          return null
        }

        return (
          <Lifecycle
            onMount={self => {
              self.release = context.history.block(message)
            }}
            onUnMount={self => self.release()}
          ></Lifecycle>
        )
      }}
    </RouterContext.Consumer>
  )
}
