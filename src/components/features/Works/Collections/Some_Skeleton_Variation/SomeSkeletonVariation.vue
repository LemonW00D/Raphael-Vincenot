<template>
  <div>
    <router-link to="/works" data-title="">
      <h3 class="title-collection">Some Skeleton Variation</h3>
    </router-link>
    <div class="d-flex flex-row justify-content-center align-items-center px-5">
      <some-skeleton-variation-page></some-skeleton-variation-page>
    </div>
  </div>
</template>

<script>
import SomeSkeletonVariationPage from "./SomeSkeletonVariationPage";
import $ from "jquery";

export default {
  components: {
    SomeSkeletonVariationPage,
  },
  mounted: function() {
    $(".title-collection").click(function() {
      $("body").scrollTop();
      $("body").css("top", "0px");
      $("body").css("position", "initial");
      $("body").css("overflow", "initial");
    });
  },
};
</script>

<style lang="scss" scoped>
.title-collection {
  text-align: center;
  margin-bottom: 5rem;
  cursor: pointer;
}
</style>
