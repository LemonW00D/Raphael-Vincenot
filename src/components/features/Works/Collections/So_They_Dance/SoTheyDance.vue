<template>
  <div>
    <router-link to="/works" data-title="">
      <h3 class="title-collection">So they dance</h3>
    </router-link>
    <div class="d-flex flex-row justify-content-center align-items-center px-5">
      <so-they-dance-page></so-they-dance-page>
    </div>
  </div>
</template>

<script>
import SoTheyDancePage from "./SoTheyDancePage";
import $ from "jquery";

export default {
  components: {
    SoTheyDancePage,
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
