<template>
  <div class="login">
    <h1>登录页</h1>
    <button class="btn" @click="login()">点击登录</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Login extends Vue {
    $router: any;
    private login(route: any) {
        this.$router.push('/gernal');
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  text-align: center;
  height: 100%;
  background: #282830;
  color: #fff;
  padding-top: 20%;
}
.btn {
  padding: 10px 20px;
  font-size: 16px;
}

</style>
