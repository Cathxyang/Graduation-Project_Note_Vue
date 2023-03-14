<template>
  <header id="header">
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  props: {
    title: {
      type: String,
      default: '快乐笔记'
    }
  }
}
</script>

<style scoped>

</style>