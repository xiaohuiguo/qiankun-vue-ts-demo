<template>
  <h1 class="home">
    应用1首页
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
  color: #4074e1;
}
</style>
