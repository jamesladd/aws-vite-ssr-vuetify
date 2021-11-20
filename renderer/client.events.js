export { onTransitionStart, onTransitionEnd, onHydrationEnd }

function onTransitionStart() {
  console.log('Page transition start')
  sendEvent('pageTransitionStart')
}

function onTransitionEnd() {
  console.log('Page transition end')
  sendEvent('pageTransitionEnd')
}

function onHydrationEnd() {
  console.log('Hydration finished; page is now interactive.')
  sendEvent('pageHydrationEnd')
}

function createEvent(name, detail) {
  return new CustomEvent(name, { detail })
}

function sendEvent(name, details) {
  if (typeof document !== 'undefined') {
    const event = createEvent(name, details || {})
    document.dispatchEvent(event)
  }
}
