<template>
  <div>
    <section class="section-breadcrumb is-hidden-mobile">
      <nav class="breadcrumb has-arrow-separator is-small" aria-label="breadcrumbs">
        <ul>
          <li>
            <nuxt-link to="/">HOME</nuxt-link>
          </li>
          <li class="is-active">
            <nuxt-link to="/about">サイトについて</nuxt-link>
          </li>
        </ul>
      </nav>
    </section>
    <section class="section">
      <div class="columns">
        <div class="column">
          2018年1月6日生まれ。nuxt.jsで作成されている
        </div>
      </div>
    </section>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
// パンくずリスト
.section-breadcrumb {
  padding: 0px 24px;
}
.breadcrumb {
  a {
    color: #333333;
    &:hover {
      color: #DDDDDD;
    }
  }
  .is-active a {
    color: #DDDDDD;
  }
}
.section {
  padding-top: 0px;
  // @media screen and (max-width: 768px) {
  //   padding-right: 0px;
  //   padding-left: 0px;
  // }
}
</style>
