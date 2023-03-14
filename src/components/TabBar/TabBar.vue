<template>
  <div id="footer">
    <ul>
      <router-link tag="li" to="/list">
        <i class=""></i>
        <p>全部笔记</p>
      </router-link>
      <router-link tag="li" to="/mine">
        <i class=""></i>
        <p>我的</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>

</style>