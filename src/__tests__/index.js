/* eslint-disable jsx-quotes */
/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import serializer from 'jest-glamor-react'
import Style from '../index'
import { css, sheet } from 'emotion'

expect.addSnapshotSerializer(serializer(sheet))

describe('restyles', () => {
  test('renders elements with styles', () => {
    const props = {
      online: true,
      theme: { radius: 5 }
    }

    const tree = renderer
      .create(
        <Style>
          {css`
            & .profile {
              color: green;
            }

            & .activity {
              font-size: 12px;
              color: blue;

              & .moment {
                font-size: 16px;
                color: purple;
              }
            }
          `}
          <div className="profile">
            <h1>
              I'm blue sometimes <span>👾</span>
            </h1>
          </div>
          <Style>
            {css`
                & .moment {
                  font-size: 50px;
                  color: aquamarine;
                }
              `}
            <div className="activity">
              <div className="moment">Buy Beer</div>
              <div className="moment">Add Server</div>
              <div className="moment">Log In</div>
            </div>
          </Style>
        </Style>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
