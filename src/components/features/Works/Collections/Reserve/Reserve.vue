<template>
  <div>
    <a title="Back to collection"><h3 class="title-collection">Reserve</h3></a>
    <div class="d-flex flex-row justify-content-center align-items-center px-5">
      <reserve-page></reserve-page>
    </div>
  </div>
</template>

<script>
import ReservePage from "./ReservePage";


export default {
  components: {
    ReservePage,
  },
};
</script>

<style lang="scss" scoped>
.title-collection {
  text-align: center;
  margin-bottom: 5rem;
}
</style>
