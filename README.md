<!--idoc:ignore:start-->
path-templater
===
<!--idoc:ignore:end-->

[![CI](https://github.com/jaywcjlove/path-templater/actions/workflows/main.yml/badge.svg)](https://github.com/jaywcjlove/path-templater/actions/workflows/main.yml)
[![NPM Downloads](https://img.shields.io/npm/dm/path-templater.svg?style=flat)](https://www.npmjs.com/package/path-templater)
[![NPM version](https://img.shields.io/npm/v/path-templater.svg?style=flat&label=path-templater)](https://npmjs.org/package/path-templater)
[![Coverage Status](https://jaywcjlove.github.io/path-templater/badges.svg)](https://jaywcjlove.github.io/path-templater/lcov-report/)

This is a simple path template replacement tool for nodejs.

## Installation

```shell
$ npm install path-templater
```

## Usage

```typescript
import pathTemplater from 'path-templater';

pathTemplater('/:name', { name: 'wcj' })       // => /wcj
pathTemplater('/:name/:name', { name: 'wcj' }) // => /wcj/wcj
pathTemplater('http://localhost/:name/:name', { name: 'wcj' }) // => http://localhost/wcj/wcj

pathTemplater('http://github.com/:owner/:repo', { owner: 'jaywcjlove', repo: 'path-templater' })
// => http://github.com/jaywcjlove/path-templater

pathTemplater(':apiBaseUrl/:owner/:repo', {
  owner: 'jaywcjlove',
  repo: 'path-templater',
  apiBaseUrl: 'http://github.com'
})
// => http://github.com/jaywcjlove/path-templater

pathTemplater('http://localhost:3001/:name/:name', { name: 'wcj' })
// => http://localhost:3001/wcj/wcj

pathTemplater('http://localhost:3001/:name/:name?id=:user', { name: 'wcj', user: 'jaywcjlove' })
// => http://localhost:3001/wcj/wcj?id=jaywcjlove

pathTemplater(':apiBaseUrl/:owner/:repo', { owner: 'jaywcjlove', repo: 'path-templater' })
// 🚨 => Could not find url parameter apiBaseUrl in passed options object;
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/jaywcjlove/path-templater/graphs/contributors">
  <img src="https://jaywcjlove.github.io/path-templater/CONTRIBUTORS.svg" />
</a>

Made with [contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

This package is licensed under the MIT License.