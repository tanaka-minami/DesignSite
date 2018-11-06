<template>
  <div>
    <!-- header -->
    <base-header></base-header>
    <!-- main -->
    <div class="main-wrapper">
      <div class="columns">
        <div class="column">
          <nuxt/>
        </div>
        <div class="column is-4">
          <base-side></base-side>
        </div>
      </div>
    </div>
    <!-- footer -->
    <base-footer></base-footer>
  </div>
</template>

<script>
import BaseHeader from '~/components/layout/BaseHeader.vue'
import BaseFooter from '~/components/layout/BaseFooter.vue'
import BaseSide from '~/components/layout/BaseSide.vue'
export default {
  components: {
    BaseHeader,
    BaseFooter,
    BaseSide
  }
}
</script>


<style lang="scss">
p {
  line-height: 2;
  text-align: justify;
}

.main-container {
  max-width: 800px !important;
  margin: 0px 0px 0px auto;
  position: relative;
}
.main-wrapper {
  padding: 0px 10px;
}
</style>
