<template>
  <div>
    <router-link to="/works" data-title="">
      <h3 class="title-collection">Three doors</h3>
    </router-link>
    <div class="d-flex flex-row justify-content-center align-items-center px-5">
      <three-doors-page></three-doors-page>
    </div>
  </div>
</template>

<script>
import ThreeDoorsPage from "./ThreeDoorsPage";

export default {
  components: {
    ThreeDoorsPage,
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
