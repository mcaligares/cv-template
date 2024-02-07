export function formatLink(link: string) {
  if (link.includes('mailto')) {
    return link.substring(link.indexOf(':') + 1);
  } else {
    return link.substring(link.indexOf('.') + 1);
  }
}
