<template>
  <div>
    <section class="section-breadcrumb is-hidden-mobile">
      <div class="main-container">
        <nav class="breadcrumb has-arrow-separator is-small" aria-label="breadcrumbs">
          <ul>
            <li>
              <nuxt-link to="/">HOME</nuxt-link>
            </li>
            <li class="is-active">
              <nuxt-link to="/web">WEB作成</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
    <section class="section">
      <div class="main-container">
        <article class="article-newlist">
          <div class="columns">
            <figuer class="column is-5">
              <img src="~assets/img/web/web-005.jpg" alt="githubイメージ画像" class="image">
            </figuer>
            <div class="column">
              <nuxt-link to="/web/web-005" class="link-item">Gitを使ってみた</nuxt-link>
            </div>
          </div>
        </article>
        <!-- <article class="article-list ">
          <div class="columns is-mobile">
            <figuer class="column is-4">
              <img src="~assets/img/web/html.jpg" alt="コードイメージ画像" class="image">
            </figuer>
            <div class="column">
              <nuxt-link to="/web/web-001" class="link-item">タグちゃんと使えてる！？divタグ以外もちゃんと使えるよう学んでみた</nuxt-link>
            </div>
          </div>
        </article> -->
        <article class="article-list ">
          <div class="columns is-mobile">
            <figuer class="column is-4">
              <img src="~assets/img/web/pc-operation.jpg" alt="パソコンイメージ画像" class="image">
            </figuer>
            <div class="column">
              <nuxt-link to="/web/web-002" class="link-item">ブラウザの仕組みについてちゃんと理解してみた</nuxt-link>
            </div>
          </div>
        </article>
        <article class="article-list ">
          <div class="columns is-mobile">
            <figuer class="column is-4">
              <img src="~assets/img/web/adaptive-img.jpg" alt="アダプティブイメージ図" class="image">
            </figuer>
            <div class="column">
              <nuxt-link to="/web/web-003" class="link-item">アダプティブデザインとレスポンシブデザインの特徴を調べてみた</nuxt-link>
            </div>
          </div>
        </article>
        <article class="article-list ">
          <div class="columns is-mobile">
            <figuer class="column is-4">
              <img src="~assets/img/web/copyright.png" alt="コピーライトイメージ画像" class="image">
            </figuer>
            <div class="column">
              <nuxt-link to="/web/web-004" class="link-item">©マークは必要あるの？</nuxt-link>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>

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
