<template>
  <div class="login-body">
    <div>
      <input class="login_text" type="text" placeholder="用户名">
    </div>
    <div>
      <input class="login_text" type="password" placeholder="请输入密码">
    </div>
    <div class="login_btn">
      <input type="submit" value="登录">
    </div>
    <div class="login_link">
      <a href="#">立即注册</a>
      <a href="#">找回密码</a>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login"
}
</script>

<style scoped>

</style>