<template>
  <div>
    <router-link to="/works" data-title="">
      <h3 class="title-collection">Punch And Crack</h3>
    </router-link>
    <div class="d-flex flex-row justify-content-center align-items-center px-5">
      <punch-and-crack-page></punch-and-crack-page>
    </div>
  </div>
</template>

<script>
import PunchAndCrackPage from "./PunchAndCrackPage";

export default {
  components: {
    PunchAndCrackPage,
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
