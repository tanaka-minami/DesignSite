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
              <nuxt-link to="/business">ビジネス</nuxt-link>
            </li>
            <li class="is-active">
              <nuxt-link to="/web/business-001">仕事を効率化するPDCAサイクルとは？</nuxt-link>
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
              仕事を効率化するPDCAサイクルとは？
            </h1>
            <figuer>
              <img src="~assets/img/business/pdca-00.png" alt="PDCA画像" class="image">
            </figuer>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <p>
              仕事でPDCAサイクルについて理解する必要があったので、
              <br class="is-hidden-mobile">せっかくならと私なりの解釈でまとめてみました。
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="is-sabtitle-style">
              <h2 class="title is-4 is-size-5-mobile is-textline-15">
                PDCAサイクルって何？
              </h2>
            </div>
            <p>
              PDCAサイクルとは<strong class="text-emphasis">Plan（計画）→ Do（実行）→ Check（評価）→ Action（改善）</strong>を繰り返すことで、今おこなている業務を改善させていく手法のことです。
              <br class="is-hidden-mobile">PDCAサイクルを回すことで、<strong>目標や目的が明確になり、現状把握もできる</strong>ようになります。目標を成し遂げるには、その目標を達成する為の目的を明確にする必要があります。そもそも目的があって、目標が生まれるわけですから。目的を忘れて、目標に進んでしまうのは本末転倒ですね。
              <br class="is-hidden-mobile">PDCAサイクルは、そうした<strong>本末転倒になりかねるリスクを軽減</strong>し、今の<strong>現状から向上させる</strong>為に役立つ手法といえるでしょう。
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="is-sabtitle-style">
              <h2 class="title is-4 is-size-5-mobile is-textline-15">
                Plan（計画）：何をするか具体的に考える
              </h2>
            </div>
            <p>
              <strong class="text-emphasis">目標を設定し、目標達成のために何をするべきか計画をたてます</strong>。<strong>いつ？ どこで？ だれが？ なにを？ なぜ？ どのように？ </strong>といった<strong class="text-emphasis">5W1H</strong>を基本に、詳しく掘り下げ考えていきます。
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5 is-textline-15">
                １．目標を数字で分かるようにする
              </h3>
            </div>
            <figuer>
              <img src="~assets/img/business/pdca-01.png" alt="イメージ画像" class="image">
            </figuer>
            <p>
              例えば、夏までに痩せることが目標なら、<strong>夏に海へ行きたいから<strong class="text-emphasis">７月までに、体重50キロ</strong>になる</strong>というように理由を具体的にし、数字化します。ここで大切なのが、<strong class="text-emphasis">期日と目標を数字化し、その理由を明確にする</strong>ことです。
            </p>
            <div class="content">
              <ul>
                <li><strong>なぜ</strong>７月までに痩せたい？ → <strong>７月後半に海へ行くから</strong></li>
                <li><strong>どうして</strong>50キロなの？ → <strong>可愛い水着が着れるから</strong></li>
              </ul>
            </div>
            <p>
              などと、<strong>いつ？ なぜ？ </strong>を明確にしておきましょう。
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5 is-textline-15">
                ２．目標と現状の差を洗いだす
              </h3>
            </div>
            <!-- <figuer>
              <img src="~assets/img/business/diet_before_after.png" alt="太っているイメージ画像" class="image">
            </figuer> -->
            <p>
              今の現状を書き出し、目標との差を出します。例え今が悪くても悲観的にならず、<strong>ありのまま書き出すのがポイント</strong>です。
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5 is-textline-15">
                ３．目標と現状の差を埋めるための課題を考える
              </h3>
            </div>
            <p>
              2でおこなった<strong>目標と現状の差の洗い出し</strong>で出た<strong class="text-emphasis">差を埋めるための課題を考えます</strong>。ここでは「お金がない」「時間が無い」「現実的に難しい」などといった<strong>制限をかけず、思いつく限りの課題を考えましょう</strong>。
            </p>
            <div class="content">
              <ul>
                <li>目標から逆算すると、自分には何が必要？</li>
                <li>伸ばせる長所はない？</li>
                <li>周りでうまくいっている人は、どんな工夫をしている？</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5 is-textline-15">
                ４．課題の優先順位を付けし、実行する課題を3つに絞ぼる
              </h3>
            </div>
            <p>
              出した課題に優先順位を決め<strong>実行するか？ 実行しないか？</strong>を決めましょう。課題を多くしすぎてしまうと、課題に対するプレッシャーや課題に対して時間をかけすぎてしまうなど、新たな問題が生じてしまいます。
              <br>それらを防ぐためにも、<strong class="text-emphasis">課題を３つまでに絞ぼり自分が達成しやすい課題</strong>をみつけていきましょう。
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5 is-textline-15">
                優先順位の付け方
              </h3>
            </div>
            <p>
              <strong class="text-emphasis">「効果」「時間」「気軽さ」</strong>をふまえながら、優先順位をつけましょう。
            </p>
            <div class="content">
              <ul>
                <li><strong>効果</strong>：もっとも効果がありそうなもの</li>
                <li><strong>時間</strong>：課題を達成するまでにかかる予測時間</li>
                <li><strong>気軽</strong>：心理的に気軽にを取り組めるもの</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5 is-textline-15">
                ５．決めた課題をKPI化（数値化）する
              </h3>
            </div>
            <p>
              <strong>KPIとは（Key Performance Indicator：重要業績評価指標）</strong>の略で目標を達成する為の経過（プロセス）を計測するために、<strong class="text-emphasis">実行の度合い（パフォーマンス）を数値で示すこと</strong>を言います。
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5 is-textline-15">
                ６．KPIを達成する為の解決案を考え、解決案に優先順位をつける
              </h3>
            </div>
            <p>
              新たに考えたKPIに対しても優先順位を決めましょう。優先順位の付け方は、上記の<strong>優先順位付けを基準</strong>に行っていきましょう。
              ただ、KPIの優先順位付けに限っては <strong class="text-emphasis">出来る限り効果が高いものを選び、短時間で終わるものであれば効果が少なくても行いましょう。</strong>
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5 is-textline-15">
                ７．計画の可視化（見える化）する
              </h3>
            </div>
            <p>
              <strong class="text-emphasis">作った計画を常に目のつく状態にしましょう。</strong>計画を書いた紙を常に見える場所に貼ったり、携帯のカレンダーに登録し、時間になったら表示させたりなど、<strong>自分で意識しなくても、常に目に留まる状態にしておきましょう</strong>。
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="is-sabtitle-style">
              <h2 class="title is-4 is-size-5-mobile is-textline-15">
                Do（実行）：考えた計画を実行に移す　
              </h2>
            </div>
            <p>
              考えた計画を実行に移していきましょう。
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5 is-textline-15">
                １．行動に優先順位をつけ、やることを絞る
              </h3>
            </div>
            <p>
              <strong>優先順位の付け方を見ながら、行動に優先順位を付け</strong>をしましょう。解決案につき最低一つは実行に移すようにしましょう。
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5 is-textline-15">
                ２．行動を数値化する
              </h3>
            </div>
            <p>
              計画に対してどれだけ進んでいるかを、一日の最後に記録しましょう。<strong>結果が出るまでは時間がかかっても、行動を可視化しチェックする</strong>ようにしましょう。
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5 is-textline-15">
                ３．行動をTODOに落とし込み、数値化した目的の達成率を確認する
              </h3>
            </div>
            <p>
              行動が決まったら今度はそれをスケジュールに落とし込みましょう。目的の達成率を確認するために、必ず手帳などに記載して<strong class="text-emphasis">スケジュール管理を行う</strong>ようにしましょう
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="is-sabtitle-style">
              <h2 class="title is-4 is-size-5-mobile is-textline-15">
                Check（検証）：実行したものを検証する
              </h2>
            </div>
            <p>
              考えた計画をきちんと実行できたか？実行してどうだったのか？検証しましょう。
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5 is-textline-15">
                １．実行したものを検証・評価する
              </h3>
            </div>
            <p>
              <strong class="text-emphasis">「効果」「時間」「気軽さ」</strong>をふまえながら、優先順位をつけましょう。
            </p>
            <div class="content">
              <ol>
                <li>数値化した<strong>目的の達成率を確認</strong></li>
                <li<strong>KPIの達成率を検証</strong></li>
                <li>数値化した<strong>行動の達成率を確認</strong></li>
              </ol>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5 is-textline-15">
                ２．課題を達成できなかった要因・達成できた要因をつきとめる
              </h3>
            </div>
            <p>
              <p>
                成果を出すには<strong class="text-emphasis">悪い要因も、良い要因も客観的に見直すことが大切</strong>です。悲観的にならず、起こった事実を書き出していくことをオススメします。
              </p>
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="is-sabtitle-style">
              <h2 class="title is-4 is-size-5-mobile is-textline-15">
                ACTION（改善）：検証した内容の改善をおこなう
              </h2>
            </div>
            <p>
              検証した内容を、再度どう実行するのか？次はどうすれば良くなるのか改善案を考えます。
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5 is-textline-15">
                １．検証結果をふまえ、改善案を考える
              </h3>
            </div>
            <p>
              まずは、課題を達成できなかった原因を、<strong>どう行動すれば改善（出来るようになるのか）考えましょう</strong>。同じように達成できた要因に対しも、どう行動すれば更に成果を出せるか考えましょう。
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="is-second-sabtaitle-style">
              <h3 class="title is-5 is-textline-15">
                ２．改善案に優先順位をつけ、やることを絞り、次のサイクルへ
              </h3>
            </div>
            <p>
              優先順位を参考に、改善案に優先順位を付けましょう。改善案で上手く行かなかった時は、再度<strong>Plan（計画）を行い、Do（実行）し、Check（検証）し、Action（改善）</strong>するといったように、PDCAサイクルを回していきましょう。
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
              文章にしつつ思ったのですが、仕事の基本は「PDCAサイクルを回すことにあり」だと感じました。「プロジェクトを立てる→実行する→プロジェクトの検証→見直す」というサイクルは、どの会社でも行っているサイクルだと思います。
              <br>PDCAはそのサイクルを、明文化し、改めてそのサイクルの重要性を教えるものだと私は思いました。チームで行なう仕事に迷った時などは、PDCAのサイクルがしっかり回っているのか確認することが大切なのかなぁ？と私は考えたところで、今日のまとめを終了したいと思います。閲覧ありがとうございました。
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
