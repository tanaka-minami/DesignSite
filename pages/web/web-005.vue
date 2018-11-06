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
              <nuxt-link to="/web">web</nuxt-link>
            </li>
            <li class="is-active">
              <nuxt-link to="/web/web-005">Git使ってみた〜まとめサイト引用〜</nuxt-link>
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
              GitHub使ってみた 〜まとめサイト引用〜
            </h1>
            <figuer>
              <img src="~assets/img/web/pc-operation.jpg" alt="パソコンイメージ画像" class="image">
            </figuer>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <p>
              かれこれ５年以上愛用しているmacがそろそろ危ないと感じているこの頃……ふと、このサイトのバックアップをとってないことに気が付きました。
              あんまり更新してないとはいえ、初めて自分で立ち上げたサイトなので、失うのは悲しい…ということで、いつ、何があっても良いようにGitHubを始めてみたいと思います！
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="is-sabtitle-style">
              <h2 class="title is-4 is-size-5-mobile">
                GitHubとは？
              </h2>
            </div>
            <p>
              GitHubとは、Gitを利用したプログラム管理を行うWEBサービスの一つで、Githubという企業が提供している。ソフトウェア開発のプラットフォームとも呼ばれ、
              エンジニアにとっては欠かせないツールの一つだよ。これがあると、同じコードを複数人で作業したりすることもできるよ。
            </p>
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5">
                そもそもGitってなに？
              </h3>
            </div>
            <p>
              <strong>Git</strong>とは、コンピュータ上で編集されたファイルの変更履歴を管理する<strong class="text-emphasis">バージョン管理システム</strong>のことだよ。
              自分が作業した（変更した）履歴を細かく保存しておくことで、変更前のデータを取り出したり、どんな変更をしたのか確認したりできるんだよ。
            </p>
            <p>
              詳しくは → <a src="https://backlog.com/ja/git-tutorial/">サルでもわかるGit入門</a>
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="is-sabtitle-style">
              <h2 class="title is-4 is-size-5-mobile">
                GitHubを使ってみる
              </h2>
            </div>
            <figuer>
              <img src="~assets/img/web/browser-figure.png" alt="ブラウザ構造イメージ画像" class="image">
            </figuer>
            <p>
              
            </p>
            <div class="content">
              <ol>
                <li>ユーザーインターフェイス</li>
                  <p>
                    人間の指示をコンピューターに伝えたり、コンピューターからのデータを人間に伝える為の要素
                    <br class="is-hidden-mobile">一般的に、コンピューターと周辺機器との接続部分のことを言う
                  </p>
                <li>ブラウザエンジン</li>
                  <p>
                    UIとレンダリングエンジンの間の処理を整理する要素
                    <br class="is-hidden-mobile">いわば仲介役
                  </p>
                <li>レンダリングエンジン</li>
                  <p>
                    コンテンツやデータを表示するためのレイアウトを、構築する為の要素
                  </p>
                <li>ネットワーキング</li>
                  <p>
                    HTTPリクエストなどのネットワークの呼び出す為に使用する要素
                  </p>
                <li>UIバックエンド</li>
                  <p>
                    ウィンドウなどの基本的なウィジェットの描画する為の要素
                  </p>
                <li>JavaScriotインタープリタ</li>
                  <p>
                    JavaScriptなどのコード解析と実行に使用する要素
                  </p>
                <li>データ・ストレージ</li>
                  <p>
                    データを生成したプログラムが終了してもそのデータが存続する特性のある要素
                  </p>
              </ol>
            </div>
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
              ブラウザに関して調べてわかったのですが、かなり奥が深い！
              <br class="is-hidden-mobile">ブラウザの説明に出て来るDOMの概念とか、説明できるぐらい理解するのは難しそうだと感じました。
              <br>ただ、DOMとかデータベースとかの単語がちらほら見えたので、後々、理解した知識が役立っていきそうだと感じと思いました。
            </p>
          </div>
        </div>
        <div class="box">
          <p>
            <strong>参照サイト様（外部リンク）</strong>
          </p>
          <div class="content">
            <ul>
              <li><a src="https://www.html5rocks.com/ja/tutorials/internals/howbrowserswork/">ブラウザの仕組み:最新ウェブブラウザの内部構造</a></li>
            </ul>
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

// ol、liタグの指定
ol > li {
  font-weight: 600;
}

</style>
