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

export default {
  components: {
    SoTheyDancePage,
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
