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
              <img src="~assets/img/web/web-005.jpg" alt="githubイメージ画像" class="image">
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
            <p>
              さっそくGitHubを使い方をまとめようと思ったのですが…もう色んな方がまとめているようなので、<strong>私はそれをリンクするだけ</strong>にしようかと思います！（最低）
              一応、以下の順番通り進めて行きましたので、よければ以下の順番を参考に、素敵なサイト（投稿者）様方のまとめを読んで頂ければ幸いです。
              <br>※流石にリンクだけ乗せるのは失礼かと思い、サイト（投稿者）様の解説？おすすめポイント？をまとめています。
            </p>
            <div class="content">
              <ol>
                <li>
                  <a src="https://www.html5rocks.com/ja/tutorials/internals/howbrowserswork/">【GitHub超初心者入門】この前初めてGitHubを使い始めたエンジニア見習いが書くGitHubの使い方と実践～とりあえず一緒に動かしてみようぜ！～</a>
                </li>
                  <p>
                    GitHubを触ったことがない初心者にはオススメ。細かいところは省きつつ、丁寧にGitHubの仕組みや用語、リポジトリの作成方法が分かりやすく記述されています。
                    ※私はこの記事でGitHubの使い方を粗方学び、下の記事で改めて自分のサイトのリポジトリを作成しました
                  </p>
                <li>
                  <a src="https://qiita.com/devzip8/items/28ac253ea295ad6c2b73">ローカルのプロジェクトをGitHubへアップロードする方法</a>
                </li>
                  <p>
                    見出しの通り自分のローカルプロジェクト（私なら、このサイト）を、GitHubへアップロードする方法になります。元々ローカルに自分のサイトがあり、なおかつGitHubのアカウントだけ持っているという方にオススメの記事です
                  </p>
                <li>
                  <a src="https://qiita.com/0koara0/items/f41a3d5b58ff9038229c">【GitでのGitHubアカウント移行で失敗したこと</a>
                </li>
                  <p>
                    <strong>とくにエラーなどが出なかった人は、ここ飛ばしてください</strong>
                    <br>実は2年前、興味本位でGitHubにリポジトリを作成したのですが、どうやらその時のアカウント情報が残っていたらしく、新しいリポジトリで作業しようとコマンド打ったら「ちょっと以前とアカウント違うんだけど？！」的な
                    反応が返ってきてしまった…ので、色々調べた結果、この記事にたどり着きました。初心者向けの記事ではないけど、そもそも一度GitHubでアカウント作った人しか引っかからない所なので、解決する記事としては十分分かりやすかったです
                  <p>
                <li>
                  <a src="https://qiita.com/masamitsu-konya/items/abb572337156e4d003cf">GitHubにあるリポジトリをローカルにcloneする方法</a>
                </li>
                  <p>
                    GitHubで作成したリポジトリを、さっそく自分のローカルにクローン（コピー）していきます！やり方は上記の記事どおり、至ってシンプルです
                  </p>
                <li>$ npm install</li>
                  <p>
                    <strong>特に問題なくローカルにクローンできた人は読まなくてOKです</strong>
                    <br>自分のローカルにクローンできたと思った矢先…<span class="text-code">npm run dev</span>をしても動かない！なんて事態が私にはありました…結論から言うと、<span class="text-code">npm install</span>をすれば解決しました。
                    詳しくは分からない（ひどい）けど、GitHubにあるリポジトリの中に、必要なものが入っていなかった為動かなかった模様。だから、クローンした後に<span class="text-code">npm install</span>をして必要なものを加えれば、解決することだったみたいです。
                    nutx.jsとかvue.jeでは必要なことなのかもしれないです…（結論、何もわからない）
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
              正直、GitHubを使おうとしただけなのに、凄く手間取ってしましました。当たり前ですが、Gitの基礎知識が無いと何も出来ないなぁと感じ、改めて「エンジニア凄い」となりました（笑）
              ただ、沢山の方が「やり方」を記事にまとめてくださっているので、困っても手が止まることが無いというのは素晴らしいなぁ…なんて思いました。
            </p>
          </div>
        </div>
        <div class="box">
          <p>
            <strong>参照サイト様まとめ（外部リンク）</strong>
          </p>
          <div class="content">
            <ul>
              <li><a src="https://backlog.com/ja/git-tutorial/">サルでもわかるGit入門</a></li>
            </ul>
            <ul>
              <li><a src="https://www.html5rocks.com/ja/tutorials/internals/howbrowserswork/">【GitHub超初心者入門】この前初めてGitHubを使い始めたエンジニア見習いが書くGitHubの使い方と実践～とりあえず一緒に動かしてみようぜ！～</a></li>
            </ul>
            <ul>
              <li><a src="https://qiita.com/devzip8/items/28ac253ea295ad6c2b73">ローカルのプロジェクトをGitHubへアップロードする方法</a></li>
            </ul>
            <ul>
              <li><a src="https://qiita.com/0koara0/items/f41a3d5b58ff9038229c">【GitでのGitHubアカウント移行で失敗したこと</a></li>
            </ul>
            <ul>
              <li><a src="https://qiita.com/masamitsu-konya/items/abb572337156e4d003cf">GitHubにあるリポジトリをローカルにcloneする方法</a></li>
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
// コード用背景色（黄色）
.text-code {
  background: #F3F3F3;
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
