# restyles

Write styles scoped to your component and use standard css selectors to target children.

*This is a thin wrapper around [cxs](https://github.com/jxnblk/cxs).*

[![npm version](https://badge.fury.io/js/restyles.svg)](https://badge.fury.io/js/restyles)
[![Build Status](https://travis-ci.org/tkh44/restyles.svg?branch=master)](https://travis-ci.org/tkh44/restyles)
[![codecov](https://codecov.io/gh/tkh44/restyles/branch/master/graph/badge.svg)](https://codecov.io/gh/tkh44/restyles)

-   [Install](#install)
-   [Basic Usage](#basic-usage)
-   [Props](#props)

## Install

```bash
npm install -S restyles
```

## Basic Usage
```jsx
const Profile = (props) => (
  <Style
    css={{
      color: 'blue',
      ':hover': {
        color: 'red'
      },
      '.profile': {
        color: props.online ? 'green' : 'gray',
        fontSize: 20,
        '@media (min-width: 768px)': {
          color: 'aquamarine'
        }
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
```

## Props

**css** `object|array<object>`

Your css as an object. This is passed straight through to cxs.

*[cxs docs](https://github.com/jxnblk/cxs/blob/master/README.md)*

```jsx
const Profile = (props) => (
  <Style
    css={{
     color: 'blue',
     '.profile': {
       color: 'red',
       '.username': {
         color: 'green',
         '.three': {
           color: 'gray',
           '.inner': {
             color: 'rebeccapurple',
             fontSize: 20
           }
         }
       }
     },
     ':hover': {
       '.three': {
         color: 'black'
       }
     },
     ':active': {
       '.inner': {
         color: 'purple',
         fontSize: 20
       }
     },
     ':before': {
       content: '" "',
       position: 'absolute',
       top: 0,
       left: 0,
       width: '100%',
       height: '100%',
       backgroundColor: 'blue'
     },
     '@media (min-width: 500px) and (orientation: landscape)': {
       '.inner': {
         color: 'purple',
         fontSize: 48
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
```


