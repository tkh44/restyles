import cxs from 'cxs'

export default function Style ({children, css}) {
  let fn = Array.isArray(children) ? children[0] : children
  return fn(cxs(css))
}
