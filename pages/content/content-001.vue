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
              <nuxt-link to="/content">コンテンツ</nuxt-link>
            </li>
            <li class="is-active">
              <nuxt-link to="/content/content-001">インタビューをする時の、自分なりルールを作ってみた</nuxt-link>
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
              インタビューをする時の、自分なりルールを作ってみた
            </h1>
            <figuer>
              <img src="~assets/img/content/interview.jpg" alt="インタビューイメージ画像" class="image">
            </figuer>
            <p>
              最近お仕事でインタビューをさせて頂くことが増えてきました。私は基本的に話を聞くことは好きなのですが、正直インタビューが得意ではありません。インタビューはただ話を聞くだけじゃないんですよね。的を得た質問をしたり、話しやすい空気作りも大切になってきます。
              <br>今回は、そんな難しいインタビューを、難しいと思わなくなる為の、自分ルールを作ったのでまとめてみたいと思います。
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="is-sabtitle-style">
              <h2 class="title is-4 is-size-5-mobile">
                インタビューをする前の準備
              </h2>
            </div>
            <p>
              事前準備はインタビュイーに対しての礼儀であり、インタビューを成功させる為の鍵でもあります。
              しっかり用意して挑むようにしましょう。
            </p>
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5">
                １．書きたい内容を整理して、質問を考える
              </h3>
            </div>
            <p>
              基本インタビュイーは受け身の姿勢なので、インタビュアーから質問を投げかけない限り会話は進行しません。インタビュイーを戸惑わせない為にも、しっかりと書きたい内容を整理して、質問を考えましょう。
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <h4 class="title is-5">
              書きたい内容のイメージを膨らませる
            </h4>
            <p>
              書きたい内容のイメージをしておくと、必然的にそのイメージに沿った質問内容が生まれ、書き起こす時にも「聞いておけばよかった」などの聞き漏れを防ぐことができます。
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <h4 class="title is-5">
              MustとWantで質問内容を考える
            </h4>
            <p>
              聞き忘れなどが決しないように<strong class="text-emphasis">絶対に聞く（Must）質問</strong>と<strong class="text-emphasis">時間があればする（Want）質問</strong>に分けて、質問を用意しておきましょう。
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <h4 class="title is-5">
              承・転・結を意識した質問も用意しておく
            </h4>
            <p>
              基本的に質問は<strong>起・承・転・結</strong>を意識しながら考えていくのですが…私は質問する内容に迷った時、起承転結の<strong>起</strong>を抜いた<strong class="text-emphasis">承・転・結</strong>を意識しながら質問を考えるようにしています。
              <strong>起は、物語で例えるならエピローグになる箇所</strong>だと私は思っているので、重要度は高くありません。その為、起以外の３つを意識しながら質問を用意します。
            </p>
            <div class="content">
              <ul>
                <li><strong>起（物語が始まる前のエピローグ）</strong></li>
                  <p>周りの環境は？ 最近気になっていることは？</p>
                <li><strong>承（物語の始まり）</strong></li>
                  <p>最初の印象は？ 出会いは？ いつごろ？ なぜ気になっている？</p>
                <li><strong>転（以外な事が起こる）</strong></li>
                  <p>なにがおこった？どのように起こった？</p>
                <li><strong>結（結果どうなったのか）</strong></li>
                  <p>結果は？ 今はどんな気持ち？</p>
              </ul>
            </div>
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5">
                ２．インタビュイーに情報を共有しておく
              </h3>
            </div>
            <p>
              <strong>インタビューの目的、話してもらいたいテーマなど出来る限りインタビュイーに共有</strong>します。インタビューの目的を共有することで、<strong>インタビュイーに目的に沿う話をしよう</strong>という意識が生まれるだけではなく、<strong>インタビュイーに話す為の心の準備をしてもらう</strong>ことが出来ます。
              <strong class="text-emphasis">自分の事を話すのは勇気のいること</strong>です。ましてや、親しい間柄ではない人に話すわけですから、不安にもなります。だからこそ、少しでもインタビュイーに心の余裕を作ってもらうことは大切になってきます。
            </p>
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5">
                ３．ボイスレコーダーとメモ帳の準備
              </h3>
            </div>
            <p>
              インタビューは<strong>基本ボイスレコーダーで録音することをオススメ</strong>します。ちゃんと録音できるか事前にチェックしておきましょう。私はインタビュー直前に「録音良いですか？」と一声かけ、許可を頂きます。
              <br>メモ帳は、<strong>相手の名前（漢字とフリガナ）と聞きたい質問を単語でまとめたもの</strong>を書いておきます。質問内容を忘れたときのためのカンニングメモ帳を作っておきましょう。
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="is-sabtitle-style">
              <h2 class="title is-4 is-size-5-mobile">
                インタビュー中に意識していること
              </h2>
            </div>
            <p>
              インタビュー中だからこそ、意識した行動が大切になってきます。ただ、私は一般常識も少なく会話を広げる事も上手ではありません。あくまで私独自のコツを説明してきます。
            </p>
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5">
                １．その人をもっと知りたい！と素直に思うこと
              </h3>
            </div>
            <p>
              インタビューで大切なのは、<strong>その人をどこまで知れるか？</strong>だと私は思います。<strong class="text-emphasis">純粋にその人自身を知りたい、もっと話を聞きたいと思うと、不思議と質問が増えていきます</strong>。
              <br>インタビュイーは、想像以上に緊張される方が多いです。「目的に沿った話をしないとダメだ」や「もっと上手い言い回しが出来れば」などといった、インタビューに対しての気遣いを沢山してくれます。
              だからこそ、インタビュアーは<strong>どんな言葉でも良いのです！貴方自身を教えてください！</strong>と態度で伝える事が大切になっていきます。
              <br><strong>たとえ話が脱線しても、その時は事前準備で考えたMustの質問を投げれば良い</strong>のです。インタビュー時は進行などを深く考えず、その人を知ることに集中しましょう。
            </p>
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5">
                ２．基本メモは取らない
              </h3>
            </div>
            <p>
              ボイスレコーダーが使えない場合を除き、<strong>基本インタビュー中のメモは取らない</strong>ようにしましょう。<strong class="text-emphasis">インタビュー中のメモは、かなり話の流れを遮ります</strong>。話は海の波と同じです。穏やかな波もありますが、時には大きな津波のような「衝撃的な話」が流れ込んで来ることもあります。
              それをメモを取るという行為で塞き止めるのは凄く勿体無いことです。塞き止めてしまった波は、再び起らないのですから。
            </p>
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5">
                ３．カンニングはどんどんしよう
              </h3>
            </div>
            <p>
              上記で<strong>基本メモは取らない</strong>と述べましたが、メモ帳を見ること自体は問題ないです。むしろ<strong class="text-emphasis">話題に詰まったときなど、確認するようにしましょう</strong>。
              <br>質問内容の確認もできますし、<strong>話題が途切れた時の不自然な間を埋める</strong>こともできます。<strong>ポイントは堂々と見ること</strong>です。堂々と見ることで、インタビュイーに「この間は、質問内容の確認の間。不自然な間ではないぞ！」と行動で伝える事ができます。
              <br>私がお手本にしているのは、ドキュメンタリーTV番組などである「一対一対の雑談」です。司会の女性がカンペを持って進行を進めるイメージで、メモ帳を見るよう心がけています。
            </p>
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5">
                ４．その場を楽しもう
              </h3>
            </div>
            <p>
              インタビューをしていると、どうしても「次はどんな質問をしよう？」「あの質問していなから、絶対しなくちゃ」などと、今相手から聞いている話とは関係のないことを考えがちです。
              もちろん話を進行させるには必要なことですが、そういった<strong>話しとは関係の無い思考は不思議と相手に伝わってしまします</strong>。
              <br>ここは思い切って<strong>その場を楽しもうと考える</strong>ようにしましょう。どんな人で<strong class="text-emphasis">自分の話を聞いて楽しんでくれる人が、話しをしていて一番気持ちが良いもの</strong>です。インタビュー前に沢山用意して、メモ帳も手元にはあるかと思います。だから安心して、その場を楽しんで話を聞くようにしましょう。
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="is-sabtitle-style">
              <h2 class="title is-4 is-size-5-mobile">
                インタビューが終わったら
              </h2>
            </div>
            <p>
              当日のインタビューが終了したから完全終了ではありません。相手の時間をもらって行なうインタビューだからこそ、最後はしっかり感謝を伝えます。
            </p>
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5">
                １．感謝の連絡を必ず送る
              </h3>
            </div>
            <p>
              インタビューが終了し、その場でお礼を伝え終了。にせず、<strong class="text-emphasis">その日、もしくは後日感謝の言葉を連絡するようにしましょう</strong>。<strong>お礼は時間を空けて二回伝えると、本当の意味で伝わりやすくなります</strong>。
              <br>これは私自身の事になりますが、二度目の感謝をきちんとすることで、自分自身も「携われてよかったと」と感じる事が多いです。なにより、感謝されて嫌な気分になる人はいませんから。（笑）お礼はきちんと伝えるようにしましょう。
            </p>
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5">
                ２．記事になったら連絡する
              </h3>
            </div>
            <p>
              最後です。これは伝えられる場合のみになりますが、<strong>行ったインタビューが記事になったら、インタビュイーに伝える</strong>ようにすると良いでしょう。
              <br>自分が話した内容は、少なからず気になるものです。例え二度と合わない相手でも、連絡を取れるようなら伝えることをオススメします。
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
              インタビューをして思ったことを自分なりにまとめてみましたが…いかがだったでしょうか？
              <br class="is-hidden-mobile">私は今後も、仕事的にインタビューが増えると思うので、日々勉強して、インタビュイーが話しやすいインタビューを出来ればと思います。
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
