# restyles

Write styles scoped to your component and use standard css selectors to target children.

**React 16 only**

*This is a thin wrapper around [glamor](https://github.com/threepointone/glamor).*

[![npm version](https://badge.fury.io/js/restyles.svg)](https://badge.fury.io/js/restyles)
[![Build Status](https://travis-ci.org/tkh44/restyles.svg?branch=master)](https://travis-ci.org/tkh44/restyles)
[![codecov](https://codecov.io/gh/tkh44/restyles/branch/master/graph/badge.svg)](https://codecov.io/gh/tkh44/restyles)

-   [Install](#install)
-   [Basic Usage](#basic-usage)
-   [API](#api)

## Install

```bash
npm install -S restyles
```

## Basic Usage
```jsx
import Style, {css} from 'restyles'

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
```

## API

**css** `Function`

Function that takes css as an object (or array of objects). This is passed straight through to glamor.

*[glamor css docs](https://github.com/threepointone/glamor/blob/master/docs/api.md#cssrules)*


