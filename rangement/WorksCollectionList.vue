<template>
  <div class="container d-flex flex-row flex-wrap justify-content-between align-items-center">
    <works-collection-items v-for="collection in collections" :key="collection.id" :collection="collection"></works-collection-items>
  </div>
</template>

<script>
import WorksCollectionItems from './WorksCollectionItems';

export default {
  components: {
    WorksCollectionItems
  },
  props: [ 'collections' ]
}
</script>

<style>

</style>