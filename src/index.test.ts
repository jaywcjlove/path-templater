// @ts-nocheck
import pathTemplater from './index';

it('Path Templater test case', async () => {
  expect(pathTemplater('/:name', { name: 'wcj' })).toEqual('/wcj');
  expect(pathTemplater('/:name/:name', { name: 'wcj' })).toEqual('/wcj/wcj');
  expect(pathTemplater('http://localhost/:name/:name', { name: 'wcj' })).toEqual('http://localhost/wcj/wcj');
  expect(pathTemplater('http://github.com/:owner/:repo', { owner: 'jaywcjlove', repo: 'path-templater' })).toEqual('http://github.com/jaywcjlove/path-templater');
  expect(() => pathTemplater(':apiBaseUrl/:owner/:repo', { owner: 'jaywcjlove', repo: 'path-templater' })).toThrow('Could not find url parameter apiBaseUrl in passed options object');
  expect(pathTemplater(':apiBaseUrl/:owner/:repo', { owner: 'jaywcjlove', repo: 'path-templater', apiBaseUrl: 'http://github.com' })).toEqual('http://github.com/jaywcjlove/path-templater');
  expect(pathTemplater('http://localhost:3001/:name/:name', { name: 'wcj' })).toEqual('http://localhost:3001/wcj/wcj');
  expect(pathTemplater('http://localhost:3001/:name/:name?id=:user', { name: 'wcj', user: 'jaywcjlove' })).toEqual('http://localhost:3001/wcj/wcj?id=jaywcjlove');
});
