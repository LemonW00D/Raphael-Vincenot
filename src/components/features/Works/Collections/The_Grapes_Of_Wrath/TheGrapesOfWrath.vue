<template>
  <div>
    <router-link to="/works" data-title="">
      <h3 class="title-collection">The grapes of wrath</h3>
    </router-link>
    <div class="d-flex flex-row justify-content-center align-items-center px-5">
      <the-grapes-of-wrath-page></the-grapes-of-wrath-page>
    </div>
  </div>
</template>

<script>
import TheGrapesOfWrathPage from "./TheGrapesOfWrathPage";

export default {
  components: {
    TheGrapesOfWrathPage,
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
