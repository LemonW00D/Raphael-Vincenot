<template>
  <div>
    <a @click="reloadPage" title="Back to collection"><h3 class="title-collection">Some Skeleton Variation</h3></a>
    <div class="d-flex flex-row justify-content-center align-items-center px-5">
      <some-skeleton-variation-page></some-skeleton-variation-page>
    </div>
  </div>
</template>

<script>
import SomeSkeletonVariationPage from "./SomeSkeletonVariationPage";


export default {
  components: {
    SomeSkeletonVariationPage,
  },
  methods: {
    reloadPage(){
      window.location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
.title-collection {
  text-align: center;
  margin-bottom: 5rem;
  &:hover{
      cursor: pointer;
      text-decoration: underline;
  }
}
</style>
