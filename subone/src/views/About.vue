<template>
  <div class="about">
    <h1>应用1介绍页</h1>
  </div>
</template>
<script>
export default {
  mounted () {
    window.a = 1
    console.log(window.a, 'subone')
  }
}
</script>
<style>
/* 测试全局css污染 */
h1{
  color: #4074e1;
}
</style>
