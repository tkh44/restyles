import {Children} from 'react'
import PropTypes from 'prop-types'
import cxs from 'cxs'

export default function Style ({children, css}) {
  return Children.only(children(cxs(css)))
}

Style.propTypes = {
  children: PropTypes.func,
  css: PropTypes.object
}
