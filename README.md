# clipeace

A simple clipboard module


## Install

```
npm install --save clipeace
```

## Setup

```js
const clipeace = require('clipeace');
const target = document.getElementById('target');

clipeace(target)
  .then((res) => {
    // suceess
  }).catch((err) => {
    // failure
  })
```
