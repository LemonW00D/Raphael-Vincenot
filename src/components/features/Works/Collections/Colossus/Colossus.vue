<template>
  <div>
    <a @click="reloadPage" title="Back to collection"><h3 class="title-collection">Colossus</h3></a>
    <div class="d-flex flex-row justify-content-center align-items-center px-5">
      <colossus-page></colossus-page>
    </div>
  </div>
</template>

<script>
import ColossusPage from "./ColossusPage";


export default {
  components: {
    ColossusPage,
  },
  methods: {
    reloadPage(){
      window.location.reload();
    },
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
