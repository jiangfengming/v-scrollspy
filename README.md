# v-scrollspy
A Vue scrollspy directive using the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

It's a thin wrapper of [@jfm/scrollspy](https://github.com/jiangfengming/scrollspy) library.

## Usage

```html
<template>
  <main>
    <section id="1" v-scrollspy="onScrollTo">
      <h1>1</h1>
      <p>...</p>
    </section>

    <section id="2" v-scrollspy="onScrollTo">
      <h1>2</h1>
      <p>...</p>
    </section>

    <section id="3" v-scrollspy="onScrollTo">
      <h1>3</h1>
      <p>...</p>
    </section>
  </main>
</template>

<script>
import scrollspy from 'v-scrollspy'

export default {
  directives: { scrollspy },

  data: () => ({
    active: ''
  }),

  methods: {
    onScrollTo(el) {
      this.active = el.id
    }
  }
}
</script>
```

## License
[MIT](LICENSE)
