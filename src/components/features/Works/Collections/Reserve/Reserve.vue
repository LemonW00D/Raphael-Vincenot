<template>
  <div>
    <router-link to="/works" data-title="">
      <h3 class="title-collection">Reserve</h3>
    </router-link>
    <div class="d-flex flex-row justify-content-center align-items-center px-5">
      <reserve-page></reserve-page>
    </div>
  </div>
</template>

<script>
import ReservePage from "./ReservePage";
import $ from "jquery";

export default {
  components: {
    ReservePage,
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
