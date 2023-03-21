import url from 'node:url';

export default function pathTemplater(str: string, options: Record<string, string> = {}) {
  const parsedUrl = url.parse(str);
  parsedUrl.pathname = replace(parsedUrl.pathname, options);
  parsedUrl.search = replace(parsedUrl.search, options);
  return url.format(parsedUrl);
}

function replace(str: string, options: Record<string, string>) {
  if (!str) {
    return str;
  }

  return str.replace(/:(\w+)/gi, (match, p1) => {
    const replacement = options[p1];
    if (!replacement) {
      throw new Error('Could not find url parameter ' + p1 + ' in passed options object');
    }
    return replacement;
  });
}