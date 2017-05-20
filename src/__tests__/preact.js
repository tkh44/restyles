/* eslint-env jest */
/* eslint-disable jsx-quotes */
// eslint-disable-next-line no-unused-vars
import {h} from 'preact' /* @jsx h */
import renderToString from 'preact-render-to-string'
import Style from '../index'
import { matcher, serializer } from 'jest-glamor-react'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)
// options.functions = false
// chai.use(assertJsx)

describe('restyles', () => {
  test('renders preact elements with styles', () => {
    const props = {
      online: true,
      theme: {radius: 5}
    }

    let _class = ''
    const tree = (
      <Style
        css={{
          color: 'preact-purple',
          ':hover': {
            color: 'red'
          },
          '.preact': {
            color: props.online ? 'green' : 'gray',
            fontSize: 20
          }
        }}
      >
        {cls => {
          _class = cls
          return (
            <div className={cls}>
              This will be preact-purple until hovered.
              <div className="profile">
                This font size will be 20px
              </div>
            </div>
          )
        }}
      </Style>
    )

    expect(renderToString(tree)).toContain(_class)
    expect(renderToString(tree)).toMatchSnapshot()
  })
})
