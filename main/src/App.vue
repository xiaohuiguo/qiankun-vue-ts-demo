<template>
  <div class="home-container">
    <!--主应用非控制台页面展示区：比如登录注册-->
    <router-view v-if="status.page === 'full'"></router-view>
    <!--控制台页面展示区-->
    <div style="width: 100%;height: 100%;" v-show="status.page !== 'full'">
      <div class="home-header box">
        <header-nav></header-nav>
      </div>
      <div class="home-content box">
        <div class="home-nav">
          <ul class="nav-menu-admin">
            <li class="nav-menu-item" @click="skip('/home')">
              <span slot="title">首页</span>
            </li>
            <li class="nav-menu-item" @click="skip('/about')">
              <span slot="title">介绍页</span>
            </li>
            <li class="nav-menu-item" @click="skip('/hello-world')">
              <span slot="title">初始页</span>
            </li>
            <li class="nav-menu-item" @click="skip('/subone/about')">
              <span slot="title">子应用1介绍页</span>
            </li>
            <li class="nav-menu-item" @click="skip('/subone/home')">
              <span slot="title">子应用1首页</span>
            </li>
            <li class="nav-menu-item" @click="skip('/subtwo/about')">
              <span slot="title">子应用2介绍页</span>
            </li>
            <li class="nav-menu-item" @click="skip('/subtwo/home')">
              <span slot="title">子应用2首页</span>
            </li>
          </ul>
        </div>
        <!--子应用页面展示区-->
        <div id="subapp-viewport" class="flex" v-show="status.page === 'son'"></div>
        <!--主应用页面展示区-->
        <router-view v-show="status.page === 'main'"></router-view>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
    import {
        Component,
        Vue,
        Watch
    } from 'vue-property-decorator';
    import HeaderNav from "@/components/header-nav/header-nav.vue";

    @Component({
        components: {
            HeaderNav
        },
    })

    export default class App extends Vue {
        $router: any;
        private isLoading: boolean = true;
        private current: string = '/resource/';
        private $window: any;
        private user: any = {
            email: 'admin'
        };

        private status: any = {
            page: 'main', // 页面属性 {String} -- main:控制台主项目|son:控制台子项目 | full:非控制台部分
            menuType: 'main' // 导航类型 {String} -- main:主项目（运营管理）| subone:子应用1| subtwo:子应用2
        }

        @Watch('$route') changeRoute(to: any, from: any) {
            console.log(to, from)
            let menuType = to.path.split('/')[1];
            this.filterMenu(to);
            this.getPageStatus(menuType);
        }

        /**整理导航显示 */
        private filterMenu(route: any) {
            let menuType = route.path.split('/')[1];
            switch (menuType) {
                case 'subone':
                case 'subtwo':
                    this.status.menuType = menuType;
                    break;
                default:
                    this.status.menuType = 'main';
                    break;
            }
        }
        /*检查容器显示情况*/ 
        private getPageStatus(index: any) {
          console.log(index)
            if (['', 'login'].indexOf(index) > -1) {
                this.status.page = "full";
            } else if ([ 'about', 'home', 'hello-world'].indexOf(index) > -1) {
                this.status.page = "main"
            } else {
                this.status.page = "son"
            }
            this.$forceUpdate();
        }

        private skip(url:any) {
          this.$router.push(url);
        }


        private created() {
        }

        private mounted() {
            /**整理页面 */
            let menuType = this.$route.path.split('/')[1];
            this.getPageStatus(menuType);
        }

        /**导航栏横向变动回调 */
        private indentChange($event: any) {
            this.status.headerIndent = $event ? '60' : '190';
        }
    }
</script>
<style lang="scss">
  html,
  body {
    margin: 0 !important;
    padding: 0;
  }
  
  
  .github-corner:hover .octo-arm {
    animation: octocat-wave 560ms ease-in-out
  }
  
  @keyframes octocat-wave {
    0%,
    100% {
      transform: rotate(0)
    }
    20%,
    60% {
      transform: rotate(-25deg)
    }
    40%,
    80% {
      transform: rotate(10deg)
    }
  }
  
  @media (max-width: 500px) {
    .github-corner:hover .octo-arm {
      animation: none
    }
    .github-corner .octo-arm {
      animation: octocat-wave 560ms ease-in-out
    }
  }
  
  .home-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .home-header {}
    .home-content {
      height: calc(100% - 56px);
      .home-nav {
        position: relative;
        height: 100%;
        border-right: 1px solid #d7e9fc;
      }
    }
  }
  
  /*侧栏样式重置*/
  
  .home-container .home-content .home-nav {
    border-right: 1px solid #d7e9fc;
    background: #323b40;
    color: #fff;
  }
  
  .nav-menu-admin {
    width: 190px;
    height: 100%;
    font-size: 14px;
    color: #fff;
    position: relative;
    background: #373d41;
  }
  
  .nav-menu-item {
    display: box!important;
    display: flex!important;
    align-items: center!important;
    width: 100%;
    height: 50px;
    position: relative;
    padding-left: 20px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    cursor: pointer;
  }
  
  .nav-menu-item:hover {
    background: #202529;
    color: #009fef;
  }
</style>