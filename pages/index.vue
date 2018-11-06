<template>
  <div>
    <section class="section-breadcrumb is-hidden-mobile">
      <div class="main-container">
        <nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
          <ul>
            <li class="is-active">
              <nuxt-link to="/" class="">HOME</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
    <section class="section">
      <div class="main-container">
        <!-- <article class="article-newlist">
          <div class="columns">
            <div class="column is-5">
              <div class="image aaa">aaa</div>
            </div>
            <div class="column">
              <nuxt-link to="/" class="link-item">vue.jsについて学んでみた</nuxt-link>
            </div>
          </div>
        </article> -->
        <article class="article-list">
          <div class="columns is-mobile">
            <figuer class="column is-4">
              <img src="~assets/img/web/pc-operation.jpg" alt="パソコンイメージ画像" class="image">
            </figuer>
            <div class="column">
              <nuxt-link to="/web/web-002" class="link-item">ブラウザの仕組みについてちゃんと理解してみた</nuxt-link>
            </div>
          </div>
        </article>
        <article class="article-list">
          <div class="columns is-mobile">
            <figuer class="column is-4">
              <img src="~assets/img/web/adaptive-img.jpg" alt="アダプティブイメージ図" class="image">
            </figuer>
            <div class="column">
              <nuxt-link to="/web/web-003" class="link-item">アダプティブデザインとレスポンシブデザインの特徴を調べてみた</nuxt-link>
            </div>
          </div>
        </article>
      </div>
    </section>

  </div>
</template>

<script>
import BaseSide from '~/components/layout/BaseSide.vue'
export default {
  components: {
    BaseSide
  }
}
</script>

<style lang="scss" scoped>
.section {
  padding-top: 0px;
  @media screen and (max-width: 768px) {
    padding-right: 0px;
    padding-left: 0px;
  }
}
// パンくずリスト
.section-breadcrumb {
  padding: 0px 24px;
  a {
    font-size: 13px;
  }
}
// 記事
.article-newlist {
  padding: 20px 0px;
  @media screen and (max-width: 768px) {
    padding: 20px 10px;
  }
}
.article-list {
  border-top: solid #DDDDDD 1px;
  padding: 20px 0px;
  @media screen and (max-width: 768px) {
    padding: 20px 10px;
  }
}
.link-item {
  color: #333333;
  &:hover {
    transition: 0.3s;
    -webkit-transition: 0.3s;
    color: #DDDDDD;
  }
}


</style>
