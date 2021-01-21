<template>
  <div>
    <router-link to="/works" data-title="">
      <h3 class="title-collection">How they hold on</h3>
    </router-link>
    <div class="d-flex flex-row justify-content-center align-items-center px-5">
      <how-they-hold-on-page></how-they-hold-on-page>
    </div>
  </div>
</template>

<script>
import HowTheyHoldOnPage from "./HowTheyHoldOnPage";
import $ from "jquery";

export default {
  components: {
    HowTheyHoldOnPage,
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
