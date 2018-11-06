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
              <nuxt-link to="/web">ビジネス</nuxt-link>
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
              <img src="~assets/img/business/pdca-00.png" alt="PDCA画像" class="image">
            </figuer>
            <div class="column">
              <nuxt-link to="/business/business-001" class="link-item">仕事を効率化するPDCAサイクルとは？</nuxt-link>
            </div>
          </div>
        </article>
        <!-- <article class="article-list ">
          <div class="columns is-mobile">
            <div class="column is-4">
              <div class="image aaa">aaa</div>
            </div>
            <div class="column">
              <nuxt-link to="/web/business-001" class="link-item">ためし</nuxt-link>
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
.article-newlist {
  padding: 20px 0px;
  @media screen and (max-width: 768px) {
    padding: 20px 10px;
  }
  // TODO あとで消す
  .aaa {
    background: pink;
    height: 300px;
  }
}

.article-list {
  border-top: solid #DDDDDD 1px;
  padding: 20px 0px;
  @media screen and (max-width: 768px) {
    padding: 20px 10px;
  }
  // TODO あとで消す
  .aaa {
    background: pink;
    height: 200px;
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
}
</style>
