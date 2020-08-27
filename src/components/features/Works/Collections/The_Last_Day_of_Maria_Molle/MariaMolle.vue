<template>
  <div>        
    <a title="Back to collection"><h3 class="title-collection">The last day of Maria Molle</h3></a>    
    <div class="d-flex flex-row justify-content-center align-items-center px-5">
      <maria-molle-page></maria-molle-page>
    </div>
  </div>
</template>

<script>
import MariaMollePage from "./MariaMollePage";


export default {
  components: {
    MariaMollePage,
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
