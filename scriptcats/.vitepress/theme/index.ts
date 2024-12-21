import { h } from 'vue'
import Theme from 'vitepress/theme'
import Layout from './Layout.vue'
import './custom.css'

export default {
  ...Theme,
  Layout: () => {
    return h(Layout)
  }
}