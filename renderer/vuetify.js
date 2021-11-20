// import '@mdi/font/css/materialdesignicons.css' <-- this done via CDN in _default.page.server.js
import 'vuetify/lib/styles/main.css'
import { createVuetify } from 'vuetify/lib/framework.mjs'
import * as components from 'vuetify/lib/components/index.mjs'
import * as directives from 'vuetify/lib/directives/index.mjs'

const create = (config = {}) => {
  console.log('vuetify.js - create', config)
  const themes = config.themes || {}
  const light = themes.light || {}
  const dark = themes.dark || {}
  const name = themes.isDark ? 'dark' : 'light'
  return createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: name,
      themes: {
       light: {
         colors: light,
       },
       dark: {
         colors: dark,
       },
      },
    },
  })
}
export default create
