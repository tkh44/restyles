import React from 'react'
import { css } from 'emotion'

function childIsClassName (child) {
  return typeof child === 'string' && child.indexOf('css-') === 0
}

function cloneChildWithClassNames (child, cssClass) {
  if (childIsClassName(child)) {
    return <noscript />
  }

  return React.cloneElement(child, {
    className: cssClass
  })
}

export default class Style extends React.Component {
  render () {
    const { children, className } = this.props
    const childrenArray = React.Children.toArray(children)
    let cssClass = css(
      childrenArray
        .map(child => {
          if (childIsClassName(child)) {
            return child
          }

          if (child.props && child.props.className) {
            return child.props.className
          }
        })
        .filter(Boolean).concat([className])
    )

    return childrenArray.map(child => cloneChildWithClassNames(child, cssClass))
  }
}
