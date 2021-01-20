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

export default {
  name: "modal-temp",
  components: {
    CoolLightBox,
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
          title: "Blue fingers",
          description: `
            <p>Pastel gras sur papier</p>
            <p>3x   50cm x 65cm</p>
            <br>
            <p>1/9</p>`,
          src: require("../../../../../assets/img/so_they_dance/Bluefingers.jpg"),
        },
        {
          title: "Green eyes red hands",
          description: `
            <p>Pastel gras sur papier</p>
            <p>3x   50cm x 65cm</p>
            <br>
            <p>2/9</p>`,
          src: require("../../../../../assets/img/so_they_dance/Greeneyesredhands.jpg"),
        },
        {
          title: "Pink heads",
          description: `
            <p>Pastel gras sur papier</p>
            <p>3x   50cm x 65cm</p>
            <br>
            <p>3/9</p>`,
          src: require("../../../../../assets/img/so_they_dance/Pinkheads.jpg"),
        },
        {
          title: "The laugh",
          description: `
            <p>Pastel gras sur papier</p>
            <p>3x   50cm x 65cm</p>
            <br>
            <p>4/9</p>`,
          src: require("../../../../../assets/img/so_they_dance/Thelaugh.jpg"),
        },
        {
          title: "Two blue boots",
          description: `
            <p>Pastel gras sur papier</p>
            <p>3x   50cm x 65cm</p>
            <br>
            <p>5/9</p>`,
          src: require("../../../../../assets/img/so_they_dance/Twoblueboots.jpg"),
        },
        {
          title: "Two pink boots",
          description: `
            <p>Pastel gras sur papier</p>
            <p>3x   50cm x 65cm</p>
            <br>
            <p>6/9</p>`,
          src: require("../../../../../assets/img/so_they_dance/Twopinkboots.jpg"),
        },
        {
          title: "White clouds",
          description: `
            <p>Pastel gras sur papier</p>
            <p>3x   50cm x 65cm</p>
            <br>
            <p>7/9</p>`,
          src: require("../../../../../assets/img/so_they_dance/Whiteclouds.jpg"),
        },
        {
          title: "White gloves",
          description: `
            <p>Pastel gras sur papier</p>
            <p>3x   50cm x 65cm</p>
            <br>
            <p>8/9</p>`,
          src: require("../../../../../assets/img/so_they_dance/Whitegloves.jpg"),
        },
        {
          title: "Yellows hats",
          description: `
            <p>Pastel gras sur papier</p>
            <p>3x   50cm x 65cm</p>
            <br>
            <p>9/9</p>`,
          src: require("../../../../../assets/img/so_they_dance/Yellowshats.jpg"),
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
  margin: auto;
  width: auto;
}

.title-collection {
  text-align: center;
  margin: 4rem 0 2.5rem 0;
  &:hover {
    cursor: pointer;
  }
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
  width: 250px;
  margin: 0 2rem;

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
  }
}
</style>
