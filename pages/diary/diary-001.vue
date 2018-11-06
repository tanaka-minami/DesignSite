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
              <nuxt-link to="/diary" class="">日記</nuxt-link>
            </li>
            <li class="is-active">
              <nuxt-link to="/diary/diary-001" class="">Nuxtのバージョンのアプデ方法わかんないんだけど</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
    <section class="section">
      <div class="main-container">
        <div class="columns">
          <div class="column">
            <div class="is-sabtitle-style">
              <h2 class="title is-4 is-size-5-mobile">
                私は今、なんのバージョンでnuxtを触っているのか全くわからない件について
              </h2>
            </div>
            <p>
              久々にサイト更新しようと思ったはいいけど、全然アプデしてないなぁと気がついたので、アプデしようと考えたのはいいけど…
              私、アプデ方法何も知らないのね！てなことで、アプデ方法を記事にしようと調べてみた結果……
            </p>
            <p class="sabtitle">
              な〜〜〜んにも分かりません！！！！
            <p/>
            <p>
              むりむりむりむり！にわかでコード書いてるもん。いや一応、調べたんだけどね？
            </p>
            <figuer class="m-10">
              <img src="~assets/img/diary/001-1.png" alt="コピーライトイメージ画像" class="image">
            </figuer>
            <p>
              ほらみて？このオーガニック検索のスクショ。何個かのサイト見回ったのよ？でね、まずは現状のnuxtのバージョンを知ることが大事だと気づいわけさ。
              だからね、現状のバージョンを調べようコマンドを打ち込んだわけさ。したっけね？
            </p>
            <p class="sabtitle">
              ↓
            <p/>
            <figuer class="m-10">
              <img src="~assets/img/diary/001-2.png" alt="コピーライトイメージ画像" class="image">
            </figuer>
            <p class="sabtitle">
              「91% Error」…いいじゃん！あと9%ぐらい！！
            <p/>
            <p>
              コードってやつはさ。真面目だから。91%できてても駄目らしいんだ。てなことで、更に調べたんだけど…全くわからないから、
              とりあえずnuxtと親戚的立ち位置のvueのバージョン見れば良いかな？と思って。vueのバージョンを確認するコマンド調べて打ち込んだの。
            </p>
            <p class="sabtitle">
              ↓
            <p/>
            <figuer class="m-10">
              <img src="~assets/img/diary/001-3.png" alt="コピーライトイメージ画像" class="image">
            </figuer>
            <p>
              あぁ…2.8.1なんだなってわかったの。
            </p>
            <p class="sabtitle">
              で？
            <p/>
            <p>
              って感じじゃない？私、もう何がしたいのかわからなくなってね。とりあえず、npm installって最後に打ち込んで終了。
              もはや結局バージョンの確認もできないし、私のこの数時間はなんだったのか？と悲しくなって終了。
              悔しいから、日記って項目まで追加して愚痴をかいてるんだけどね？もうなんか、エンジニアの人すごいなって思いました。まる！
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
.m-10 {
  margin: 0px 10px;
}
.sabtitle {
  font-size: 1.5rem;
  font-weight: 600;
}
</style>
