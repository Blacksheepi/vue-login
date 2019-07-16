<template>
  <div class="header">
    <div class="logo">
      <router-link to="/home">
        <img src="@/assets/TacoCloud.png" />
      </router-link>
    </div>
    <div class="topbar">
      <div class="topbaritems">
        <div class="topbaritem" style="font-size: 17pt;">
          <router-link to="/design" class="plainlink caps">Design a Taco</router-link>
        </div>
        <div class="topbaritem">
          <router-link to="/login" class="plainlink">
            <img
              src="@/assets/down-triangle.png"
              style="float: right; margin-right:15px; margin-top: 12px;"
            />
            <span class="caps small">Sign in</span>
            <br />
            <span class="smaller">or Create an Account</span>
          </router-link>
        </div>
        <div class="topbaritem" style="font-size: 17pt;">
          <router-link to="/cart" class="plainlink">
            <img src="@/assets/cart.png" align="center" />
            {{ cartTotalPrice | currency }}
          </router-link>
        </div>
      </div>
    </div>
    <div class="bottombar">
      <div class="bottombaritems">
        <div class="bottombaritem">
          <router-link to="/recents" class="plainlink">Latest designs</router-link>
        </div>
        <div class="bottombaritem">
          <router-link to="/specials" class="plainlink">Specials</router-link>
        </div>
        <div class="bottombaritem">
          <router-link to="/locations" class="plainlink">Locations</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('cart', ['cartTotalPrice']),
  },
};
</script>
<style lang="less" scoped>
.header {
  background-color: #76d6ff;
  background: linear-gradient(#76d6ff, white);
  width: 100%;
  height: 140px;
  border-radius: 10px;
  position: relative;
  color: #003366;
  .logo {
    position: absolute;
    top: 0px;
    width: 100px;
    height: 100px;
    img {
      width: 270px;
      height: 192px;
    }
  }
  .topbar {
    width: 100%;
    height: 70px;
    .topbaritems {
      width: 700px;
      height: 70px;
      float: right;
      .topbaritem {
        display: inline-block;
        padding-top: 20px;
        padding-left: 20px;
        width: 200px;
        height: 50px;
        vertical-align: middle;
        border-left: 1px solid aliceblue;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: bold;
      }
    }
  }
  .bottombar {
    border-top: 1px solid aliceblue;
    width: 100%;
    height: 70px;
    .bottombaritems {
      position: absolute;
      left: 300px;
      width: 800px;
      height: 70px;
      .bottombaritem {
        display: inline-block;
        width: 220px;
        height: 100%;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: bold;
        font-size: 18pt;
        padding-top: 20px;
        padding-right: 15px;
        text-align: center;
      }
    }
  }
  .caps {
    text-transform: uppercase;
  }

  .small {
    font-size: 12pt;
  }

  .smaller {
    font-size: 10pt;
  }

  .plainlink {
    text-decoration: none;
    color: inherit;
  }
}
</style>
