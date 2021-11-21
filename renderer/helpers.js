export { inBrowser, initMeta }

function inBrowser() {
  return typeof window !== 'undefined'
}

function initMeta(pageContext) {
  console.log('initMeta', pageContext)
  if (!inBrowser()) return;
  document.title = getPageTitle(pageContext)
}

function getPageTitle(pageContext) {
  const title =
    // For static titles (defined in the `export { documentProps }` of the page's `.page.js`)
    (pageContext.pageExports.documentProps || {}).title ||
    // For dynamic tiles (defined in the `export addContextProps()` of the page's `.page.server.js`)
    (pageContext.documentProps || {}).title ||
    'Demo'
  return title
}
