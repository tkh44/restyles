import React from 'react'
import {css as magic} from 'glamor'

function Ns () {
  return <noscript />
}

export function css (...styles) {
  return <Ns __css={styles} />
}

function cloneChildWithClassNames (child, styles) {
  return React.cloneElement(child, magic(styles))
}

export default class Style extends React.Component {
  render () {
    const {children} = this.props
    const childrenArray = React.Children.toArray(children)
    let styles = childrenArray.map(child => child.props.__css)
    return childrenArray.map(child => cloneChildWithClassNames(child, styles))
  }
}
