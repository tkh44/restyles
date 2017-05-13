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
-   [How It Works](#how-it-works)

## Install

```bash
npm install -S restyles
```

## Basic Usage
```jsx
import Style, {css} from 'restyles'

const Profile = (props) => (
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
```

## API

**css** `Function`

Function that takes css as an object (or array of objects). This is passed straight through to glamor.

*[glamor css docs](https://github.com/threepointone/glamor/blob/master/docs/api.md#cssrules)*


## Under The Hood

This code

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

Generates these styles

```css
  .css-vwt4h7 .profile,
[data-css-vwt4h7] .profile {
  color: green;
  font-size: 48px;
}

.css-vwt4h7 .profile:hover,
[data-css-vwt4h7] .profile:hover {
  color: blue;
}

.css-vwt4h7 .profile > span,
[data-css-vwt4h7] .profile > span {
  font-size: 64px;
  margin-left: auto;
}

.css-vwt4h7 .activity,
[data-css-vwt4h7] .activity {
  color: green;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}

.css-vwt4h7 .activity .moment,
[data-css-vwt4h7] .activity .moment {
  color: rebeccapurple;
  font-size: 18px;
}

@media (min-width: 400px) {
  .css-vwt4h7 .moment,
  [data-css-vwt4h7] .moment {
    height: 200px;
  }
}

```

And this markup

```html
<div className="profile" data-css-vwt4h7="">
  <noscript />
  <h1>I'm blue sometimes <span>👾</span></h1>
  <div className="activity" data-css-vwt4h7="">
    <div className="moment">Buy Beer</div>
    <div className="moment">Add Server</div>
    <div className="moment">Log In</div>
  </div>
</div>

```
