import { observe, unobserve } from '@jfm/scrollspy'

export default {
  bind(el, { value }) {
    observe(el, value)
  },

  unbind(el) {
    unobserve(el)
  }
}
