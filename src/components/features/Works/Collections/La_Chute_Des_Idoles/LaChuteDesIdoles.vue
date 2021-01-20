<template>
  <div>
    <router-link to="/works" data-title="">
      <h3 class="title-collection">La chute des idoles</h3>
    </router-link>
    <div class="d-flex flex-row justify-content-center align-items-center px-5">
      <la-chute-des-idoles-page></la-chute-des-idoles-page>
    </div>
  </div>
</template>

<script>
import LaChuteDesIdolesPage from "./LaChuteDesIdolesPage";

export default {
  components: {
    LaChuteDesIdolesPage,
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
