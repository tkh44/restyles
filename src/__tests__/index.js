/* eslint-disable jsx-quotes */
/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer';
import {matcher, serializer} from 'jest-glamor-react'
import Style, {css} from '../index'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('restyles', () => {
  test('css function', () => {
    let element = css({ color: 'blue' })
    const tree = renderer.create(element).toJSON()
    expect(tree).toMatchSnapshotWithGlamor()
  })

  test('renders elements with styles', () => {
    const props = {
      online: true,
      theme: {radius: 5}
    }

    const tree = renderer
      .create(
        <Style>
          {css({
            '& .profile': {
              color: 'green',
              fontSize: 48,
              '&:hover': {
                color: 'blue'
              },
              '& > span': {
                fontSize: 64,
                marginLeft: 'auto'
              }
            },
            '& .activity': {
              color: props.online ? 'green' : 'gray',
              display: 'flex',
              '& .moment': {
                color: 'rebeccapurple',
                fontSize: 18
              }
            },
            '@media(min-width: 400px)': {
              '& .moment': {
                height: 200
              }
            }
          })}
          <div className="profile">
            <h1>I'm blue sometimes <span>👾</span></h1>
          </div>
          <div className="activity">
            <div className="moment">Buy Beer</div>
            <div className="moment">Add Server</div>
            <div className="moment">Log In</div>
          </div>
        </Style>
      )
      .toJSON()

    expect(tree).toMatchSnapshotWithGlamor()
  })
})
