<template>
  <div class="home-container">
    <!--主应用非控制台页面展示区：比如登录-->
    <router-view v-if="status.viewType === 'full'"></router-view>
    <!--控制台页面展示区-->
    <div style="width: 100%;height: 100%;" v-show="status.viewType !== 'full'">
      <div class="home-header box">
        <header-nav :menuType=status.menuType></header-nav>
      </div>
      <div class="home-content box">
        <div class="home-nav">
          <ul class="nav-menu-admin">
            <li class="nav-menu-item" v-for="(item, i) in navActive" @click="skip(item.path)">
              <span slot="title">{{item.name}}</span>
            </li>
          </ul>
        </div>
        <!--主应用页面展示区-->
        <router-view v-show="status.viewType === 'control_main'"></router-view>
        <!--子应用页面展示区-->
        <div id="subapp-viewport" class="flex" v-show="status.viewType === 'control_sub'"></div>
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
        }
    })
    export default class App extends Vue {
        $router: any;
        private isLoading: boolean = true;
        private $window: any;
        private user: any = {
            email: 'admin'
        };

        private status: any = {
            viewType: 'control_main', // 页面视图类型 {String} --full:非控制台部分| control_main:控制台主应用|control_sub:控制台子应用；用于控制试图展示区切换 
            menuType: 'sysA' // 导航类型 {String} -- sysA:系统A| sysB:系统B；用于控制左侧菜单切换
        }

        private nav: any = {
            sysA: [
              {
                name:'总览页',
                path:'/gernal'
              },
              {
                name:'子应用1首页',
                path:'/subone/home'
              },
              {
                name:'子应用1介绍页',
                path:'/subone/about'
              },
            ], 
            sysB: [
              {
                name:'子应用2首页',
                path:'/subtwo/home'
              },
              {
                name:'子应用2介绍页',
                path:'/subtwo/about'
              }
            ] 
        };
        private navActive:any = [];

        

        @Watch('$route') changeRoute(to: any, from: any) {
            this.navActive = this.nav[this.status.menuType];
            console.log(to, from)
            let menuType = to.path.split('/')[1];
            this.filterMenu(to);
            this.getPageStatus(menuType);
        }

        /**重置头部导航/侧栏菜单显示 */
        private filterMenu(route: any) {
            let menuType = route.path.split('/')[1];
            switch (menuType) {
                case 'subtwo':
                    this.status.menuType = 'sysB';
                    break;
                default:
                    this.status.menuType = 'sysA';
                    break;
            }
            this.navActive = this.nav[this.status.menuType];
        }
        /*重置容器显示情况*/ 
        private getPageStatus(index: any) {
          console.log(index)
            if (['login'].indexOf(index) > -1) {
                this.status.viewType = "full";
            } else if ([ 'gernal'].indexOf(index) > -1) {
                this.status.viewType = "control_main"
            } else {
                this.status.viewType = "control_sub"
            }
            this.$forceUpdate();
        }

        private skip(url:any) {
          this.$router.push(url);
        }

        private mounted() {
            /**整理页面 */
            let menuType = this.$route.path.split('/')[1];
            this.getPageStatus(menuType);
            /**整理导航 */
            this.filterMenu(this.$route);
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