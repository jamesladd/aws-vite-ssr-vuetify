import { createApp } from './app'
import { useClientRouter } from 'vite-plugin-ssr/client/router'
import { onTransitionStart, onTransitionEnd, onHydrationEnd } from './client.events.js'
import { initMeta } from './helpers.js'

let app
const { hydrationPromise } = useClientRouter({
  render(pageContext) {
    if (!app) {
      app = createApp(pageContext)
      app.mount('#app')
    } else {
      app.changePage(pageContext)
    }
    initMeta(pageContext)
  },
  // Vue needs the first render to be a hydration
  ensureHydration: true,
  onTransitionStart: onTransitionStart,
  onTransitionEnd: onTransitionEnd
})

hydrationPromise.then(() => {
  onHydrationEnd()
})
