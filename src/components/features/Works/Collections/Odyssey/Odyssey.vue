<template>
  <div>
    <a title="Back to collection"><h3 class="title-collection">Odyssey</h3></a>
    <div class="d-flex flex-row justify-content-center align-items-center px-5">
      <odyssey-page></odyssey-page>
    </div>
  </div>
</template>

<script>
import OdysseyPage from "./OdysseyPage";


export default {
  components: {
    OdysseyPage,
  },
};
</script>

<style lang="scss" scoped>
.title-collection {
  text-align: center;
  margin-bottom: 5rem;
  &:hover{
      cursor: pointer;
      text-decoration: underline;
  }
}
</style>
