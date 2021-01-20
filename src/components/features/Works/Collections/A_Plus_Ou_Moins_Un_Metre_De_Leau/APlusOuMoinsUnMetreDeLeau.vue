<template>
  <div>
    <router-link to="/works" data-title="">
      <h3 class="title-collection">À plus ou moins un mètre de l'eau</h3>
    </router-link>
    <div class="d-flex flex-row justify-content-center align-items-center px-5">
      <a-plus-ou-moins-un-metre-de-leau-page></a-plus-ou-moins-un-metre-de-leau-page>
    </div>
  </div>
</template>

<script>
import APlusOuMoinsUnMetreDeLeauPage from "./APlusOuMoinsUnMetreDeLeauPage";

export default {
  components: {
    APlusOuMoinsUnMetreDeLeauPage,
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
