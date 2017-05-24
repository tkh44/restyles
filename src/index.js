import cxs from 'cxs'

export default function Style ({children, css, render}) {
  let fn = typeof render === 'function'
    ? render
    : Array.isArray(children) ? children[0] : children
  return fn(cxs(css))
}
