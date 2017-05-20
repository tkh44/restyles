/* eslint-env jest */
/* eslint-disable jsx-quotes */
import React from 'react'
import renderer from 'react-test-renderer'
import {matcher, serializer} from 'jest-glamor-react'
import Style from '../index'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('restyles', () => {
  test('renders elements with styles', () => {
    const props = {
      online: true,
      theme: {radius: 5}
    }

    const tree = renderer
      .create(
        <Style
          css={{
            color: 'blue',
            ':hover': {
              color: 'red'
            },
            '.profile': {
              color: props.online ? 'green' : 'gray',
              fontSize: 20
            }
          }}
        >
          {cls => (
            <div className={cls}>
              This will be blue until hovered.
              <div className="profile">
                This font size will be 20px
              </div>
            </div>
          )}
        </Style>
      )
      .toJSON()

    expect(tree).toMatchSnapshotWithGlamor()
  })

  test('renders crazy stuff', () => {
    const tree = renderer
      .create(
        <Style
          css={{
            color: 'blue',
            ' .profile': {
              color: 'red',
              ' .username': {
                color: 'green',
                ' .three': {
                  color: 'gray',
                  ' .inner': {
                    color: 'rebeccapurple',
                    fontSize: 20
                  }
                }
              }
            },
            ':hover': {
              ' .one': {
                color: 'blue',
                ' .two': {
                  color: 'gray',
                  ' .three': {
                    color: 'black',
                    ' .inner': {
                      color: 'purple',
                      fontSize: 20
                    }
                  }
                }
              }
            },
            ':active': {
              ' .one': {
                color: 'blue',
                ' .two': {
                  color: 'gray',
                  ' .three': {
                    color: 'black',
                    ' .inner': {
                      color: 'purple',
                      fontSize: 20
                    }
                  }
                }
              }
            },
            ':before': {
              ' .one': {
                color: 'blue',
                ' .two': {
                  color: 'gray',
                  ' .three': {
                    color: 'black',
                    ' .inner': {
                      color: 'purple',
                      fontSize: 20
                    }
                  }
                }
              }
            },
            '@media (min-width: 500px) and (orientation: landscape)': {
              ' .one': {
                color: 'blue',
                ' .two': {
                  color: 'gray',
                  ' .three': {
                    color: 'black',
                    ' .inner': {
                      color: 'purple',
                      fontSize: 20
                    }
                  }
                }
              }
            }
          }}
        >
          {cls => (
            <div className={cls}>
              blue
              <div className={'profile'}>
                red
                <div className={'username'}>
                  green
                  <div className={'three'}>
                    <span className={'inner'}>test</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Style>
      )
      .toJSON()

    expect(tree).toMatchSnapshotWithGlamor()
  })
})
