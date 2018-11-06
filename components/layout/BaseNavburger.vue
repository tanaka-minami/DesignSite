<template>
  <div>
    <section>
      <div class="navburger-section">
        <div class="nav-trigger" @click="showModal = true">
          <span></span>
        </div>
      </div>
      <div v-show="showModal" class="nav-menu">
        <div class="close-postion">
          <div @click="showModal = false" class="close-icon">
            <span></span>
          </div>
          <p class="menu-title">
            MENU
          </p>
        </div>
        <div class="nav-content" @click="showModal = false">
          <nuxt-link to="/about" class="">サイトについて</nuxt-link>
          <nuxt-link to="/web" class="">WEB作成</nuxt-link>
          <nuxt-link to="/content" class="">コンテンツ</nuxt-link>
          <nuxt-link to="/business" class="">ビジネス</nuxt-link>
          <!-- <nuxt-link to="/papermedia" class="">紙媒体</nuxt-link> -->
          <nuxt-link to="/diary" class="">日記</nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showModal: false
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-content {
  a {
    font-size: 14px;
    color: #333333;
    display: block;
    padding: 15px;
    border-bottom: 1px solid #DDDDDD;
  }
}

.menu-title {
  font-weight: 700;
}

.navburger-section {
  padding: 8px 15px 0px;
  background: #DDDDDD;
  height: 36px;
  width: 100%;
}

.nav-trigger {
  position: relative;
}

.nav-trigger span, .nav-trigger span:before, .nav-trigger span:after {
  position: absolute;
  right: 0;
  height: 3px;/*線の太さ*/
  width: 25px;/*長さ*/
  background: #555;
  display: block;
  content: '';
}
.nav-trigger span:before {
  bottom: -8px;
}
.nav-trigger span:after {
  bottom: -16px;
}

.nav-menu {
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 15;
  background: #fff;
}

.close-postion {
  position: relative;
  background: #DDDDDD;
  padding: 8px 10px;
  height: 40px;
  width: 100%;
}

.close-icon {
  position: absolute;
  top: 8px;
  right: 10px;
  margin: 0px 20px 0px 5px;
  padding: 0;
  width: 3px;
  height: 25px;
  background: #555;
  transform: rotate(45deg);
  &:before {
    display: block;
    content: "";
    position: absolute;
    top: 50%;
    left: -10px;
    width: 25px;
    height: 3px;
    margin-top: -2px;
    background: #555;
  }
}

</style>
