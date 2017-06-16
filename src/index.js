import { css as magic } from 'glamor'

export default function Style ({children, css, render}) {
  let fn = typeof render === 'function'
    ? render
    : Array.isArray(children) ? children[0] : children
  return fn(magic(css).toString())
}
