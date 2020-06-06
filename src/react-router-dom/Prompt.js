import React from 'react'
import { RouterContext } from './RouterContext'
import Lifecycle from './Lifecycle'

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
            onUnMount={self.release()}
          ></Lifecycle>
        )
      }}
    </RouterContext.Consumer>
  )
}
