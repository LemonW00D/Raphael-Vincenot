<template>
  <div
    class="container d-flex flex-row flex-wrap justify-content-start align-items-center py-5"
  >
    <!-- Colossus -->
    <router-link
      to="/works/colossus"
      class=" product-container d-flex flex-column justify-content-center align-items-center "
    >
      <div class="image-collection">
        <!-- 
        <img src="../../../assets/img/colossus/Boxer.jpg" alt="Colossus" /> -->
        <h3>Colossus</h3>
      </div>
    </router-link>

    <!-- Hats -->
    <router-link
      to="/works/hats"
      class=" product-container d-flex flex-column justify-content-center align-items-center "
    >
      <div class="image-collection">
        <!-- 
        <img src="../../../assets/img/hats/bigwhitehands.jpg" alt="Hats" /> -->
        <h3>Hats</h3>
      </div>
    </router-link>

    <!-- Odyssey -->
    <router-link
      to="/works/odyssey"
      class=" product-container d-flex flex-column justify-content-center align-items-center "
    >
      <div class="image-collection">
        <!--
        <img src="../../../assets/img/odyssey/Giants.jpg" alt="Odyssey" /> -->
        <h3>Odyssey</h3>
      </div>
    </router-link>

    <!-- The last day of Maria Molle -->
    <router-link
      to="/works/maria-molle"
      class=" product-container d-flex flex-column justify-content-center align-items-center "
    >
      <div class="image-collection">
        <!--
        <img
          src="../../../assets/img/the_last_day_of_maria_molle/Bluesmoke.jpg"
          alt="Maria Molle"
        /> -->
        <h3>The last day of Maria Molle</h3>
      </div>
    </router-link>

    <!-- Few objects composition -->
    <router-link
      to="/works/few-objects-composition"
      class=" product-container d-flex flex-column justify-content-center align-items-center "
    >
      <div class="image-collection">
        <!--
        <img
          src="../../../assets/img/few_objects_composition/FO.jpg"
          alt="Few objects composition"
        /> -->
        <h3>Few objects composition</h3>
      </div>
    </router-link>

    <!-- Reserve -->
    <router-link
      to="/works/reserve"
      class=" product-container d-flex flex-column justify-content-center align-items-center "
    >
      <div class="image-collection">
        <!--
        <img src="../../../assets/img/reserve/cactus.jpg" alt="Reserve" /> -->
        <h3>Reserve</h3>
      </div>
    </router-link>

    <!-- Some skeleton variation -->
    <router-link
      to="/works/some-skeleton-variation"
      class=" product-container d-flex flex-column justify-content-center align-items-center "
    >
      <div class="image-collection">
        <!--
        <img
          src="../../../assets/img/some_skeleton_variation/greeneye.jpg"
          alt="Some skeleton variation"
        /> -->
        <h3>Some skeleton variation</h3>
      </div>
    </router-link>

    <!-- Punch and crack -->
    <router-link
      to="/works/punch-and-crack"
      class=" product-container d-flex flex-column justify-content-center align-items-center "
    >
      <div class="image-collection">
        <!--
        <img
          src="../../../assets/img/punch_and_crack/nocturnestreet.jpg"
          alt="Punch and crack"
        /> -->
        <h3>Punch and crack</h3>
      </div>
    </router-link>

    <!-- How they hold on -->
    <router-link
      to="/works/how-they-hold-on"
      class=" product-container d-flex flex-column justify-content-center align-items-center "
    >
      <div class="image-collection">
        <!--
        <img
          src="../../../assets/img/how_they_hold_on/Bluelightning.jpg"
          alt="How they hold on"
        /> -->
        <h3>How they hold on</h3>
      </div>
    </router-link>

    <!-- Two circles and one skeletonn -->
    <router-link
      to="/works/two-circles-and-one-skeleton"
      class=" product-container d-flex flex-column justify-content-center align-items-center "
    >
      <div class="image-collection">
        <!--
        <img
          src="../../../assets/img/two_circles_and_one_skeleton/Birdcemetery.jpg"
          alt="How they hold on"
        /> -->
        <h3>Two circles and one skeleton <b-badge>New</b-badge></h3>
      </div>
    </router-link>
  </div>
</template>

<script>
import { BBadge } from "bootstrap-vue";

export default {
  components: {
    BBadge,
  },
};
</script>

<style lang="scss">
@import "../../../../src/assets/scss/style.main.scss";

.product-container {
  margin: auto;
  min-height: 100px;
  height: auto;
  min-width: 225px;
  max-width: 250px;
  padding: 0;
}

.image-collection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;

  img {
    height: 150px;
    cursor: pointer;
  }

  h3 {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 1px;
    &:hover {
      filter: grayscale(1);
      text-decoration: underline;
      cursor: pointer;
    }
  }

  &:hover {
    filter: grayscale(1);
    text-decoration: underline;
    cursor: pointer;
  }
}

@media screen and (min-width: 1200px) {
  .product-container {
    margin: 3rem auto;
  }
  .container {
    padding: 3rem 10rem;
  }
}
</style>
