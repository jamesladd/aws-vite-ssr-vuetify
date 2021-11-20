import { createSSRApp, defineComponent, h, markRaw, reactive } from 'vue'
import PageShell from './PageShell.vue'
import { setPageContext } from './usePageContext'

import { createRouter } from './router'
import vuetify from './vuetify'

export { createApp }

function createApp(pageContext) {
  const { Page } = pageContext
  let rootComponent
  const PageWithWrapper = defineComponent({
    data: () => ({
      Page: markRaw(Page),
      pageProps: markRaw(pageContext.pageProps || {})
    }),
    created() {
      rootComponent = this
    },
    render() {
      return h(
        PageShell,
        {},
        {
          default: () => {
            return h(this.Page, this.pageProps || {})
          }
        }
      )
    }
  })

  const app = createSSRApp(PageWithWrapper)
  app.use(createRouter())
  app.use(vuetify())

  // We make `pageContext` available from any Vue component
  setPageContext(app, reactive(pageContext))

  return app
}
