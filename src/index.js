import {Children} from 'react'
import PropTypes from 'prop-types'
import { css as magic } from 'glamor'

export default function Style ({children, css}) {
  return Children.only(children(magic(css)))
}

Style.propTypes = {
  children: PropTypes.func,
  css: PropTypes.object
}
