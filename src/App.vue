<template>
  <div id="app">
    <Header></Header>
    <transition name="fade">
      <router-view class="content" />
    </transition>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="less">
@import './common/style/public.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
