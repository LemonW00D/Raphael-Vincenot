<template>
  <div>
    <works-page></works-page>
    <div class="d-flex flex-column w-100">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import WorksPage from "./WorksPage";

export default {
  components: {
    WorksPage
  }
};
</script>

<style lang="scss" scoped></style>
