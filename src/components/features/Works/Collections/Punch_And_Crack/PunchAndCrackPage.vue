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
          title: "Nocturne street",
          description: `
            <p>Pastel sur papier</p>
            <p>65cm x 50cm</p>
            <br>
            <p>1/8</p>`,
          src: require("../../../../../assets/img/punch_and_crack/nocturnestreet.jpg"),
        },
        {
          title: "Punch",
          description: `
            <p>Pastel sur papier</p>
            <p>65cm x 50cm</p>
            <br>
            <p>2/8</p>`,
          src: require("../../../../../assets/img/punch_and_crack/punch.jpg"),
        },
        {
          title: "Watermelon",
          description: `
            <p>Pastel sur papier</p>
            <p>65cm x 50cm</p>
            <br>
            <p>3/8</p>`,
          src: require("../../../../../assets/img/punch_and_crack/watermelon.jpg"),
        },
        {
          title: "Blue slap",
          description: `
            <p>Pastel sur papier</p>
            <p>65cm x 50cm</p>
            <br>
            <p>4/8</p>`,
          src: require("../../../../../assets/img/punch_and_crack/blueslap.jpg"),
        },
        {
          title: "Crack",
          description: `
            <p>Pastel sur papier</p>
            <p>65cm x 50cm</p>
            <br>
            <p>5/8</p>`,
          src: require("../../../../../assets/img/punch_and_crack/crack.jpg"),
        },
        {
          title: "Hat slap",
          description: `
            <p>Pastel sur papier</p>
            <p>65cm x 50cm</p>
            <br>
            <p>6/8</p>`,
          src: require("../../../../../assets/img/punch_and_crack/hatslap.jpg"),
        },
        {
          title: "Rebound",
          description: `
            <p>Pastel sur papier</p>
            <p>65cm x 50cm</p>
            <br>
            <p>7/8</p>`,
          src: require("../../../../../assets/img/punch_and_crack/rebound.jpg"),
        },
        {
          title: "Watermelon hat",
          description: `
            <p>Pastel sur papier</p>
            <p>65cm x 50cm</p>
            <br>
            <p>8/8</p>`,
          src: require("../../../../../assets/img/punch_and_crack/watermelonhat.jpg"),
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
