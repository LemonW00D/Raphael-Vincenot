<template>
  <div class="my-5 product-container d-flex flex-column justify-content-center align-items-center ">
   <div class="image-collection" @click="goToCollection">   <!-- ici mettre un on click pour aller sur la page de la collection -->
      <img v-bind:src="collection.img" alt="collection" style="height: 150px">
    </div>
    <div>
      <h3>{{ collection.title }} <b-badge>New</b-badge></h3>      
    </div>
  </div>
</template>

<script>
//import { eventBus } from '../../../../main';
import { BBadge } from 'bootstrap-vue';

export default {
  components: {
    BBadge,
  },
  props: ['collection'],/*
  methods: {
    goToCollection() {
      eventBus.goToCollection({ ...this.collection })
    },*/
}
</script>

<style lang="scss">
@import "../../../../../src/assets/scss/style.main.scss";

.product-container {
  margin-top: 2rem;
  min-height: 200px;
  height: auto;
  min-width: 270px;
  max-width: 300px;
  padding: 0;
}

.image-collection{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover{
    filter: grayscale(1);
  }
}

@include md {
  .product-container{
    margin: auto;
  }
}

h3{
  text-align: center;
  font-size: 1.4rem;
  letter-spacing: 1px;
  cursor: pointer;
}
/*
a{
    display: block;
    text-align: end;
    p{
      font-size: 13px;     
      color: darkblue;
      margin-bottom: 10px;
      &:hover{
        font-weight: 700;
      }
    }
  }*/
</style>