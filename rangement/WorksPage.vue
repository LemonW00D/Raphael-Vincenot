<template>
  <works-collection-list :collections="collections" class="p-3"></works-collection-list>
</template>

<script>
import WorksCollectionList from './WorksCollectionList';
import { eventBus } from '../../../../main';


export default {
  components: {
    WorksCollectionList,
  },
  data() {
    return {
      collections: []
    }
  },
  created() {
    this.collections = eventBus.collections;
    eventBus.$on('update:collections', (collections) => {
      this.collections = collections;
    })
  }
}
</script>

<style>

</style>