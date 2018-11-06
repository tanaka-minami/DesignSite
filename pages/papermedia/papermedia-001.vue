<template>
  <div>
    <section class="section-breadcrumb is-hidden-mobile">
      <div class="main-container">
        <nav class="breadcrumb has-arrow-separator is-small" aria-label="breadcrumbs">
          <ul>
            <li>
              <nuxt-link to="/">HOME</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/content">紙媒体</nuxt-link>
            </li>
            <li class="is-active">
              <nuxt-link to="/paoermedia/papermedia-001">DTPの基礎・文字構成編</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
    <section class="section">
      <div class="main-container">
        <div class="columns">
          <div class="column">
            <h1 class="title is-3 is-size-4-mobile">
              DTPの基礎・文字構成編
            </h1>
            <!-- <figuer>
              <img src="~assets/img/" alt="" class="image">
            </figuer> -->
            <p>
              こんにちは、田中です。最近WEBではなく、グラフィックや冊子などをメインにデザインを行なうようになったので、振り返り勉強がてらDTPの基礎をまとめたいと思います。
              <br class="is-hidden-mobile">ただ、振り返る内容が多いので、各テーマごとまとめていこうかと思います。今回はタイトル通り<strong>文字構成</strong>をメインにまとめたいと思います。
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="is-sabtitle-style">
              <h2 class="title is-4 is-size-5-mobile">
                和文書体のつくり
              </h2>
            </div>
            <p>
              和文書体は大まかに<strong class="text-emphasis">明朝体、ゴシック体、それ以外の書体</strong>の３種類があります。書体にはそれぞれの個性があり、明朝体１つとっても何百種類ものデザインがあります。
            </p>
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5">
                明朝体とゴシック体
              </h3>
            </div>
            <p>
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="is-sabtitle-style">
              <h2 class="title is-4 is-size-5-mobile">
                まとめという名の感想
              </h2>
            </div>
            <p>
              aaa
              <br class="is-hidden-mobile">aaa
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
// パンくずリスト
.article-newlist {
  padding: 20px 0px;
  @media screen and (max-width: 768px) {
    padding: 20px 10px;
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
@media screen and (max-width: 768px) {
  .section {
    padding-right: 15px;
    padding-left: 15px;
  }
}
// テキスト強調させる（黄色）
.text-emphasis {
  background: yellow;
  padding: 2px 5px;
}
// サブタイトル
.is-sabtitle-style {
  background-color: #F3F3F3;
  border-radius: 4px;
  padding: 20px 20px;
  margin: 40px 0px 25px 0px;
}
.is-second-sabtaitle-style {
  border-top: 1.5px solid #757575;
  border-bottom: 1.5px solid #757575;
  padding: 15px 15px;
  margin: 40px 0px 25px 0px;
}

</style>
