path-templater
===

This is a simple path template replacement tool for nodejs.

## Installation

```shell
$ npm install typenexus
```

## Quick start

```typescript
import pathTemplater from 'path-templater';

pathTemplater('/:name', { name: 'wcj' })       // => /wcj
pathTemplater('/:name/:name', { name: 'wcj' }) // => /wcj/wcj
pathTemplater('http://localhost/:name/:name', { name: 'wcj' }) // => http://localhost/wcj/wcj

pathTemplater('http://github.com/:owner/:repo', { owner: 'jaywcjlove', repo: 'path-templater' })
// => http://github.com/jaywcjlove/path-templater

pathTemplater(':apiBaseUrl/:owner/:repo', { owner: 'jaywcjlove', repo: 'path-templater', apiBaseUrl: 'http://github.com' })
// => http://github.com/jaywcjlove/path-templater

pathTemplater('http://localhost:3001/:name/:name', { name: 'wcj' })
// => http://localhost:3001/wcj/wcj

pathTemplater('http://localhost:3001/:name/:name?id=:user', { name: 'wcj', user: 'jaywcjlove' })
// => http://localhost:3001/wcj/wcj?id=jaywcjlove

pathTemplater(':apiBaseUrl/:owner/:repo', { owner: 'jaywcjlove', repo: 'path-templater' })
// => Could not find url parameter apiBaseUrl in passed options object;
```

## License

This package is licensed under the MIT License.