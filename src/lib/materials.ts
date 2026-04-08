export function materialHref(relativePath: string) {
  return `/materials/${relativePath.replaceAll('\\', '/').split('/').map(encodeURIComponent).join('/')}`;
}

