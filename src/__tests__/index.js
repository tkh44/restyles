/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import Style from '../index'

describe('cutest', () => {
  test('renders crazy stuff', () => {
    const tree = renderer
      .create(
        <Style
          css={{
            color: 'blue',
            '& .profile': {
              color: 'red',
              '& .username': {
                color: 'green',
                '& .three': {
                  color: 'gray',
                  '& .inner': {
                    color: 'rebeccapurple',
                    fontSize: 20
                  }
                }
              }
            },
            '&:hover': {
              '& .one': {
                color: 'blue',
                '& .two': {
                  color: 'gray',
                  '& .three': {
                    color: 'black',
                    '& .inner': {
                      color: 'purple',
                      fontSize: 20
                    }
                  }
                }
              }
            },
            '&:active': {
              '& .one': {
                color: 'blue',
                '& .two': {
                  color: 'gray',
                  '& .three': {
                    color: 'black',
                    '& .inner': {
                      color: 'purple',
                      fontSize: 20
                    }
                  }
                }
              }
            },
            '&:before': {
              '& .one': {
                color: 'blue',
                '& .two': {
                  color: 'gray',
                  '& .three': {
                    color: 'black',
                    '& .inner': {
                      color: 'purple',
                      fontSize: 20
                    }
                  }
                }
              }
            },
            '@media (min-width: 500px) and (orientation: landscape)': {
              '& .one': {
                color: 'blue',
                '& .two': {
                  color: 'gray',
                  '& .three': {
                    color: 'black',
                    '& .inner': {
                      color: 'purple',
                      fontSize: 20
                    }
                  }
                }
              }
            }
          }}
        >
          {rules => (
            <div {...rules}>
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

    expect(tree).toMatchSnapshot()
  })

  test('use glamor helpers', () => {
    const tree = renderer
      .create(
        <Style
          css={[
            {color: 'lightgray'},
            {height: '100vh'},
            {
              color: 'blue',
              '&:hover': {
                background: 'blue'
              },
              '& .one': {
                color: 'red',
                '& .two': {
                  color: 'green',
                  '& .three': {
                    color: 'gray',
                    '& .inner': {
                      color: 'rebeccapurple',
                      fontSize: 20
                    }
                  }
                }
              }
            }
          ]}
        >
          {[
            rules => (
              <div {...rules}>
                <div className={'one'}>
                  <div className={'two'}>
                    <div className={'three'}>
                      <span className={'inner'}>test</span>
                    </div>
                  </div>
                </div>
              </div>
            ),
            rules => (
              <div {...rules}>
                <div className={'three'}>
                  <div className={'two'}>
                    <div className={'one'}>
                      <span className={'inner'}>test</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          ]}
        </Style>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
