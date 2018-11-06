<template>
  <div>
    <section class="section-breadcrumb is-hidden-mobile">
      <div class="main-container">
        <nav class="breadcrumb has-arrow-separator is-small" aria-label="breadcrumbs">
          <ul>
            <li>
              <nuxt-link to="/" class="">HOME</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/web" class="">web</nuxt-link>
            </li>
            <li class="is-active">
              <nuxt-link to="/web/web-001" class="">Nuxtってどう使うの？〜忘れた過去を取り戻す〜</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
    <section class="section">
      <div class="main-container">
        <div class="columns">
          <div class="column">
            <h1 class="title is-3 is-size-4-mobile is-textline-15">
              Nuxtってどう使うの？
              <br>〜忘れた過去を取り戻す〜
            </h1>
            <figuer>
              <img src="~assets/img/web/html.jpg" alt="コードイメージ画像" class="image">
            </figuer>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="main-container">
        <div class="columns">
          <div class="column">
            <p><br class="is-hidden-mobile">
              皆さんどうも、こんにちは。突然ですが<strong>Nuxtってご存知ですか？ </strong>Nuxtは、Vue.jsベースで出来ておりで、
              アプリ開発やサイト制作に適した<strong class="text-emphasis">JavaScriptフレームワーク</strong>のことです。
              <br>実はこのサイトも、Nuxtで作成されているのですが…正直、使い方を忘れています（笑）
              この記事を書くのも、コードを最後に触れてから半年以上経過しており、iTermを立ち上げるのも覚束ない感じでした…
              <br>せっかく一度覚えた技術です。忘れるのはもったいないので、私の思い出しを含めて、今回の記事をまとめつつ改めて勉強してきたいと思います！
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="is-sabtitle-style">
              <h2 class="title is-4 is-size-5-mobile">
                そもそもNuxtってなんだっけ？？
              </h2>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <p>
              そもそも論ですが、Nuxtとはどういったもので、どんなメリット・デメリットがあるのでしょうか？
              軽くまとめていきたいと思います。
            </p>
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5">
                Nuxtのメリット
              </h3>
            </div>
            <p>
              ブラウザの大まかな機能は、<strong>ユーザーの選択したWEBデータをサーバーに要求してウィンドウに表示させる</strong>ことです。
              <br class="is-hidden-mobile">基本ブラウザが無いとWEBデータで作られたネットを見ることは出来ません。
              <br class="is-hidden-mobile">その為、基本的に殆どのデバイス（PC、スマホ等）に、ブラウザは搭載されています。
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
.is-textline-15 {
  line-height: 1.5;
}
</style>
