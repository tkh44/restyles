import PropTypes from 'prop-types'
import { css as magic } from 'glamor'

function childrenToArray (children) {
  return Array.isArray && Array.isArray(children)
    ? children
    : [].concat(children)
}

function renderChildWithCss (renderFn, css) {
  return renderFn(magic(css))
}
export default function Style ({children, css}) {
  return renderChildWithCss(childrenToArray(children)[0], css)
}

Style.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.arrayOf(PropTypes.func)]),
  css: PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.array])
}
