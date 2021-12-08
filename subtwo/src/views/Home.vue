<template>
  <h1 class="home">
    系统B：应用2首页
  </h1>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
<style>
/* 测试全局css污染 */
h1{
  color: #ff5722;
}
</style>
