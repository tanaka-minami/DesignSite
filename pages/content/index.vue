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
              <nuxt-link to="/content">コンテンツ</nuxt-link>
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
              <img src="~assets/img/content/interview.jpg" alt="インタビューイメージ画像" class="image">
            </figuer>
            <div class="column">
              <nuxt-link to="/content/content-001" class="link-item">インタビューをする時の、自分なりルールを作ってみた</nuxt-link>
            </div>
          </div>
        </article>
        <!-- <article class="article-list ">
          <div class="columns is-mobile">
            <div class="column is-4">
              <div class="image aaa">aaa</div>
            </div>
            <div class="column">
              <nuxt-link to="/" class="link-item">ためし</nuxt-link>
            </div>
          </div>
        </article> -->
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
