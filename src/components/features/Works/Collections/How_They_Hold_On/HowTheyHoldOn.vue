<template>
  <div>
    <a title="Back to collection"><h3 class="title-collection">How they hold on</h3></a>
    <div class="d-flex flex-row justify-content-center align-items-center px-5">
      <how-they-hold-on-page></how-they-hold-on-page>
    </div>
  </div>
</template>

<script>
import HowTheyHoldOnPage from "./HowTheyHoldOnPage";


export default {
  components: {
    HowTheyHoldOnPage,
  },
};
</script>

<style lang="scss" scoped>
.title-collection {
  text-align: center;
  margin-bottom: 5rem;
}
</style>
