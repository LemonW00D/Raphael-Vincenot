<template>
  <div>
    <router-link to="/works" data-title="">
      <h3 class="title-collection">Hats</h3>
    </router-link>
    <div class="d-flex flex-row justify-content-center align-items-center px-5">
      <hats-page></hats-page>
    </div>
  </div>
</template>

<script>
import HatsPage from "./HatsPage";

export default {
  components: {
    HatsPage,
  },
};
</script>

<style lang="scss" scoped>
.title-collection {
  text-align: center;
  margin-bottom: 5rem;
  cursor: pointer;
}

@media (max-width: 767px) {
  .title-collection {
    margin-bottom: 5rem;
  }
}
</style>
