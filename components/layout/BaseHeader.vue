<template>
  <div class="header-img">
    <section class="hero is-medium ">
      <div class="hero-body has-text-centered">
        <div class="container">
          <h1 class="title">
            田中のデザインノート
          </h1>
          <h2 class="sbutitle">
            未経験からWEBデザイナーを目指す
          </h2>
        </div>
      </div>
    </section>
    <section class="is-hidden-mobile">
      <div class="header-container">
        <div class="nav-menu">
          <nuxt-link to="/about" class="">サイトについて</nuxt-link>
          <nuxt-link to="/web" class="">WEB作成</nuxt-link>
          <nuxt-link to="/content" class="">コンテンツ</nuxt-link>
          <nuxt-link to="/business" class="">ビジネス</nuxt-link>
          <!-- <nuxt-link to="/papermedia" class="">紙媒体</nuxt-link> -->
          <nuxt-link to="/diary" class="">日記</nuxt-link>
        </div>
      </div>
    </section>
    <base-navburger class="is-hidden-tablet"></base-navburger>
  </div>
</template>

<script>
import BaseNavburger from '~/components/layout/BaseNavburger.vue'
export default {
  components: {
    BaseNavburger
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.header-img {
  background-image: url("~assets/img/top/header-bg.svg");
  background-repeat: no-repeat;
}
.header-container {
  max-width: 1000px;
  margin: 0 auto;
}

@media screen and (min-width: 768px) {
  .nav-menu {
    justify-content: flex-end;
    margin-left: auto;
    display: flex;
    align-items: stretch;
    margin: 10px 15px;
    a {
      padding: 0px 15px 5px;
      font-size: 14px;
      color: #333333;
      position: relative;
      display: inline-block;
      transition: .3s;
      &:hover {
        color: #DDDDDD;
      }
    }
    a:after {
      position: absolute;
      bottom: 0;
      left: 50%;
      content: '';
      width: 0;
      height: 1px;

      background-color: #333333;
      transition: .3s;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
    }
    a:hover::after {
      width: 70%;
    }
  }
}

</style>
