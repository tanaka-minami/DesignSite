<template>
  <div>
    <section class="section">
      <article class="asdf">
        <div class="profile-tile">
          田中ってどんな人？
        </div>
        <figuer>
          <img src="~assets/img/top/tanaka-img.svg" alt="田中の顔" class="image img-siz">
        </figuer>
        <div>
          デザイン専門学校卒・元DTPオペレータで、現在は一般企業のデザイナーとして紙媒体をメインに制作しています。
          WEBもグラフィックも実務未経験から初める、勉強記録です。
        </div>
      </article>
    </section>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.section {
  @media screen and (min-width: 768px) {
    padding-right: 10px;
    padding-left: 0px;
  }
  @media screen and (max-width: 768px) {
    padding-top: 0px;
  }
}

.img-siz {
  max-width: 150px;
  margin: 7px auto 7px;
}

.asdf {
  text-align: justify;
  @media screen and (min-width: 768px) {
    max-width: 300px;
  }
}

.profile-tile {
  font-weight: 600;
  background-color: #F3F3F3;
  padding: 10px;
  border-radius: 4px;
}


</style>
