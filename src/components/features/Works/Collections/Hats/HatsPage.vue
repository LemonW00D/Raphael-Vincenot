<template>
  <div id="modal-temp">
    <div
      class="container d-flex flex-row flex-wrap justify-content-between align-items-center rawmod"
    >
      <CoolLightBox
        class="image-collection"
        :items="items"
        :index="index"
        @close="index = null"
      >
      </CoolLightBox>
      <div class="images-wrapper">
        <div
          class="image"
          v-for="(image, imageIndex) in items"
          :key="imageIndex"
          @click="index = imageIndex"
          :style="{
            backgroundImage: 'url(' + image.src + ')',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import CoolLightBox from "vue-cool-lightbox";
import "../../../../../assets/scss/vue-cool-lightbox.min.css";
import $ from "jquery";

export default {
  name: "modal-temp",
  components: {
    CoolLightBox,
  },
  mounted: function() {
    $("#modal-temp > div.container > div.images-wrapper > div.image").click(
      function() {
        $("body").scrollTop(0);
        $("body").css("top", "0px");
      }
    );
  },
  methods: {
    setIndex(index) {
      this.index = index;
    },
    reloadPage() {
      window.location.reload();
    },
  },
  data: function() {
    return {
      items: [
        {
          title: "Big white hands",
          description: `
            <p>Pastel sur papier</p>
            <p>115cm x 75cm</p>
            <br>
            <p>1/12</p>`,
          src: require("../../../../../assets/img/hats/bigwhitehands.jpg"),
        },
        {
          title: "Blue beanie",
          description: `
            <p>Pastel sur papier</p>
            <p>115cm x 75cm</p>
            <br>
            <p>2/12</p>`,
          src: require("../../../../../assets/img/hats/bluebeanie.jpg"),
        },
        {
          title: "White hat",
          description: `
            <p>Pastel sur papier</p>
            <p>115cm x 75cm</p>
            <br>
            <p>3/12</p>`,
          src: require("../../../../../assets/img/hats/whitehat.jpg"),
        },
        {
          title: "Coal helmet",
          description: `
            <p>Pastel sur papier</p>
            <p>115cm x 75cm</p>
            <br>
            <p>4/12</p>`,
          src: require("../../../../../assets/img/hats/coalhelmet.jpg"),
        },
        {
          title: "Colional hat",
          description: `
            <p>Pastel sur papier</p>
            <p>115cm x 75cm</p>
            <br>
            <p>5/12</p>`,
          src: require("../../../../../assets/img/hats/colionalhat.jpg"),
        },
        {
          title: "Dog Pink hut",
          description: `
            <p>Pastel sur papier</p>
            <p>115cm x 75cm</p>
            <br>
            <p>6/12</p>`,
          src: require("../../../../../assets/img/hats/dogpinkhut.jpg"),
        },
        {
          title: "Driver",
          description: `
            <p>Pastel sur papier</p>
            <p>115cm x 75cm</p>
            <br>
            <p>7/12</p>`,
          src: require("../../../../../assets/img/hats/driver.jpg"),
        },
        {
          title: "Old hat",
          description: `
            <p>Pastel sur papier</p>
            <p>115cm x 75cm</p>
            <br>
            <p>8/12</p>`,
          src: require("../../../../../assets/img/hats/oldhat.jpg"),
        },
        {
          title: "Pink and blue",
          description: `
            <p>Pastel sur papier</p>
            <p>115cm x 75cm</p>
            <br>
            <p>9/12</p>`,
          src: require("../../../../../assets/img/hats/pinkandblue.jpg"),
        },
        {
          title: "Tropical surveyor",
          description: `
            <p>Pastel sur papier</p>
            <p>115cm x 75cm</p>
            <br>
            <p>10/12</p>`,
          src: require("../../../../../assets/img/hats/tropicalsurveyor.jpg"),
        },
        {
          title: "Up and down",
          description: `
            <p>Pastel sur papier</p>
            <p>115cm x 75cm</p>
            <br>
            <p>11/12</p>`,
          src: require("../../../../../assets/img/hats/upanddown.jpg"),
        },
        {
          title: "White hand",
          description: `
            <p>Pastel sur papier</p>
            <p>115cm x 75cm</p>
            <br>
            <p>12/12</p>`,
          src: require("../../../../../assets/img/hats/whitehand.jpg"),
        },
      ],
      index: null,
    };
  },
  props: {
    disableZoom: {
      type: Boolean,
      default: true,
    },
    loop: {
      type: Boolean,
      default: false,
    },
    useZoomBar: {
      type: Boolean,
      default: false,
    },
    overlayColor: {
      type: String,
      default: "rgb(0, 0, 0)",
    },
    slideshowColorBar: {
      type: String,
      default: "#fa4242",
    },
    closeOnClickOutsideMobile: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../../../src/assets/scss/style.main.scss";

p {
  font-size: 1.2rem;
}

.images-wrapper {
  justify-content: space-evenly;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 200px;
  width: auto;
}

.cool-lightbox {
  top: 13rem;
}

.rawmod {
  margin: 0 2rem;
}

.image-collection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.image {
  height: 200px;
  width: 150px;
  margin: 4rem;

  &:hover {
    cursor: pointer;
    filter: grayscale(1);
  }
}

@include xs {
  .image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5rem;
  }
  .images-wrapper {
    justify-content: space-around;
    margin-right: 4rem;
  }
}
</style>
