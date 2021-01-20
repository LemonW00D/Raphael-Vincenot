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
          title: "Dreamwalker",
          description: `
            <p>Pastel gras sur papier marouflé</p>
            <p>120cm x 70cm</p>
            <br>
            <p>1/9</p>`,
          src: require("../../../../../assets/img/the_grapes_of_wrath/Dreamwalker.jpg"),
        },
        {
          title: "Forge",
          description: `
            <p>Pastel gras sur papier marouflé</p>
            <p>120cm x 70cm</p>
            <br>
            <p>2/9</p>`,
          src: require("../../../../../assets/img/the_grapes_of_wrath/Forge.jpg"),
        },
        {
          title: "Grapes of wrath",
          description: `
            <p>Pastel gras sur papier marouflé</p>
            <p>60cm x 60cm</p>
            <br>
            <p>3/9</p>`,
          src: require("../../../../../assets/img/the_grapes_of_wrath/Grapesofwrath.jpg"),
        },
        {
          title: "Lady",
          description: `
            <p>Pastel gras sur papier marouflé</p>
            <p>60cm x 60cm</p>
            <br>
            <p>4/9</p>`,
          src: require("../../../../../assets/img/the_grapes_of_wrath/Lady.jpg"),
        },
        {
          title: "Old blue sock",
          description: `
            <p>Pastel gras sur papier marouflé</p>
            <p>60cm x 60cm</p>
            <br>
            <p>5/9</p>`,
          src: require("../../../../../assets/img/the_grapes_of_wrath/Oldbluesock.jpg"),
        },
        {
          title: "Pinata",
          description: `
            <p>Pastel gras sur papier marouflé</p>
            <p>40cm x 29cm</p>
            <br>
            <p>6/9</p>`,
          src: require("../../../../../assets/img/the_grapes_of_wrath/Pinata.jpg"),
        },
        {
          title: "Shot and smoke",
          description: `
            <p>Pastel gras sur papier marouflé</p>
            <p>120cm x 70cm</p>
            <br>
            <p>7/9</p>`,
          src: require("../../../../../assets/img/the_grapes_of_wrath/Shotandsmoke.jpg"),
        },
        {
          title: "The fool on the hill",
          description: `
            <p>Pastel gras sur papier marouflé</p>
            <p>60cm x 60cm</p>
            <br>
            <p>8/9</p>`,
          src: require("../../../../../assets/img/the_grapes_of_wrath/Thefoolonthehill.jpg"),
        },
        {
          title: "Workhorse",
          description: `
            <p>Pastel gras sur papier</p>
            <p>120cm x 70cm</p>
            <br>
            <p>9/9</p>`,
          src: require("../../../../../assets/img/the_grapes_of_wrath/Workhorse.jpg"),
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
  }
}
</style>
