<template>
  <div>
    <a title="Back to collection"><h3 class="title-collection">Few Objects Composition</h3></a>
    <div class="d-flex flex-row justify-content-center align-items-center px-5">
      <few-objects-composition-page></few-objects-composition-page>
    </div>
  </div>
</template>

<script>
import FewObjectsCompositionPage from "./FewObjectsCompositionPage";


export default {
  components: {
    FewObjectsCompositionPage,
  },
};
</script>

<style lang="scss" scoped>
.title-collection {
  text-align: center;
  margin-bottom: 5rem;
}
</style>
