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
              <nuxt-link to="/web/web-003" class="">アダプティブデザインとレスポンシブデザインの特徴を調べてみた</nuxt-link>
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
              アダプティブデザインと
              <br class="is-hidden-mobile">レスポンシブデザインの特徴を調べてみた
            </h1>
            <figuer class="">
              <img src="~assets/img/web/adaptive-img.jpg" alt="アダプティブイメージ図" class="image">
            </figuer>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <p>
              最近…でもありがませんが、アダプティブデザインが主流のサイトが多いような気がします。
              <br class="is-hidden-mobile">私もこのサイトを立てるにあたって、アダプティブデザインで作成しようか迷いました。結局は、レスポンシブで作ったのですが。
              <br class="is-hidden-mobile">悩んで調べたので、折角ならまとめて記事にしようと思ったので書いていきます。
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="is-sabtitle-style">
              <h2 class="title is-4 is-size-5-mobile">
                そもそもアダプティブデザインって何？
              </h2>
            </div>
            <figuer>
              <img src="~assets/img/web/adaptive.png" alt="アダプティブイメージ図" class="image">
            </figuer>
            <p>
              ざっくり説明すると<strong class="text-emphasis">特定のデバイスによって、HTML（CSS.JS等）自体をを分けてデザインと統計をすること</strong>です。例えば、スマホサイズの表示時には文言を１行にする。PCサイズの表示時には文言を３行。といったように、<strong>各デバイス事に表示が異なる文やデザインをHTML事に分けて作成</strong>することも可能です。
            </p>
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5">
                メリット
              </h3>
            </div>
            <div class="content">
              <ul>
                <li>
                  デバイスによって各HMTLファイルを読み込むので、デバイスごと（ファイルごと）に機能を盛り込みやすい
                </li>
                <li>
                  機能を盛り込んでも、HMTLファイルが分かれているので、読み込み速度が比較的早い
                </li>
                <li>
                  デバイスによってデザインに変化をしっかりと付けられるので、ユーザーの閲覧率を上げやすいサイトがつくれる
                </li>
              </ul>
            </div>
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5">
                デメリット
              </h3>
            </div>
            <div class="content">
              <ul>
                <li>
                  ファイル別にHTMLを書くので、管理がしにくい
                </li>
                <li>
                  デザイン統計したHTMLの想定表示サイズと、ユーザーのデバイスの表示サイズが違った場合、文章や画像が途切れて表示されてしまう
                </li>
                <li>
                  デバイスごとに別ファイルを読み込むので、その分、開発時間と費用がかかる
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="is-sabtitle-style">
              <h2 class="title is-4 is-size-5-mobile">
                レスポンシブデザインとは何？
              </h2>
            </div>
            <figuer>
              <img src="~assets/img/web/responsive.png" alt="レスポンシブのイメージ画像" class="image">
            </figuer>
            <p>
              <strong class="text-emphasis">画面幅に合わせて各パーツが可変（画面幅によってサイズが変わる）するデザイン</strong>のことです。
              <br class="is-hidden-mobile">その為、デザイナーはパーツのサイズが変わることを想定したデザインを組む必要があります。
            </p>
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5">
                メリット
              </h3>
            </div>
            <div class="content">
              <ul>
                <li>
                  どんなデバイス（画面サイズ）でも表示することが出来る
                </li>
                <li>
                  多くのブラウザでサポートされてるので、多くの人が閲覧できる
                </li>
              </ul>
            </div>
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5">
                デメリット
              </h3>
            </div>
            <div class="content">
              <ul>
                <li>
                  PCのテキスト量でスマホにも表示させるため、レイアウトの崩れを考慮してデザインや文の構成が必要になってくる
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="is-sabtitle-style">
              <h2 class="title is-4 is-size-5-mobile">
                結局どっちを使えば良いの？
              </h2>
            </div>
            <figuer>
              <!-- <img src="~assets/img/web/dog-question.jpg" alt="考える人のイメージ画像" class="image"> -->
            </figuer>
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5">
                比べた時のメリット
              </h3>
            </div>
            <div class="content">
              <p>
                <strong>アダプティブ</strong>
              </p>
              <ul>
                <li>
                  デバイス幅によってHTMLを変えているので、表示速度が早く、文もデザインをデバイス事に変更でき、ユーザーに寄り添ったデザインが作成しやすい
                </li>
              </ul>
              <p>
                <strong>レスポンシブ</strong>
              </p>
              <ul>
                <li>
                  ユーザーのデバイス関係なく表示することができるし、HTMLファイルが１つのため管理しやい
                </li>
              </ul>
            </div>
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5">
                比べた時のデメリット
              </h3>
            </div>
            <div class="content">
              <p>
                <strong>アダプティブ</strong>
              </p>
              <ul>
                <li>
                  デバイス幅によってHTMLを変えているので、一箇所変更したいと思ったら、全てのデバイス幅HTMLの変更が必要になる。単純に管理するHTMLファイルが増える為、時間やコストもその分かかる
                </li>
              </ul>
              <p>
                <strong>レスポンシブ</strong>
              </p>
              <ul>
                <li>
                  HTMLファイルが１つの為、表示に時間がかかる（ユーザーがサイトから離脱しやすい１番の理由）。表示が可変する事を考えたデザインにしないと行けない
                </li>
              </ul>
            </div>
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5">
                私個人の見解としては…
              </h3>
            </div>
            <p>
              あくまで私個人の見解としては、<strong>時間やお金があり、ユーザに寄り添ったデザインに拘りたいならアダプティブデザイン</strong>。<strong>それ以外はレスポンシブでいいんでない？</strong>と思います。
              <br class="is-hidden-mobile">私は表示処理速度が早いアダプティブデザインの方が魅力的に感じましたが、このサイトをつくる際、作業し終わった後でも文章やデザインを変更したくなるだろうと思い、データ管理が簡単なレスポンシブデザインでつくる事を決めました。
              <br class="is-hidden-mobile">でもまぁ、スマホの画面サイズって時代によって変化するから、やれアダプティブだ！レスポンシブだ！とガチガチに考えなくてもいいのかなって思います。
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
    padding-right: 0px;
    padding-left: 0px;
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
