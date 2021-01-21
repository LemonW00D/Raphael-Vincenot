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
  },
  data: function() {
    return {
      items: [
        {
          title: "Birdcemetery",
          description: `
            <p>Pastel sur papier</p>
            <p>115cm x 75cm</p>
            <br>
            <p>1/11</p>`,
          src: require("../../../../../assets/img/two_circles_and_one_skeleton/Birdcemetery.jpg"),
        },
        {
          title: "Boxing gloves",
          description: `
            <p>Pastel sur papier</p>
            <p>115cm x 75cm</p>
            <br>
            <p>2/11</p>`,
          src: require("../../../../../assets/img/two_circles_and_one_skeleton/Boxing_gloves.jpg"),
        },
        {
          title: "Chinese shadow",
          description: `
            <p>Pastel sur papier</p>
            <p>115cm x 75cm</p>
            <br>
            <p>3/11</p>`,
          src: require("../../../../../assets/img/two_circles_and_one_skeleton/Chinese_shadow.jpg"),
        },
        {
          title: "Feets and hands",
          description: `
            <p>Pastel sur papier</p>
            <p>115cm x 75cm</p>
            <br>
            <p>4/11</p>`,
          src: require("../../../../../assets/img/two_circles_and_one_skeleton/Feets_and_hands.jpg"),
        },
        {
          title: "Mushrommfinder",
          description: `
            <p>Pastel sur papier</p>
            <p>115cm x 75cm</p>
            <br>
            <p>5/11</p>`,
          src: require("../../../../../assets/img/two_circles_and_one_skeleton/Mushrommfinder.jpg"),
        },
        {
          title: "One skeleton",
          description: `
            <p>Pastel sur papier</p>
            <p>115cm x 75cm</p>
            <br>
            <p>6/11</p>`,
          src: require("../../../../../assets/img/two_circles_and_one_skeleton/One_skeleton.jpg"),
        },
        {
          title: "Red hut",
          description: `
            <p>Pastel sur papier</p>
            <p>115cm x 75cm</p>
            <br>
            <p>7/11</p>`,
          src: require("../../../../../assets/img/two_circles_and_one_skeleton/Red_hut.jpg"),
        },
        {
          title: "Red mushromm",
          description: `
            <p>Pastel sur papier</p>
            <p>115cm x 75cm</p>
            <br>
            <p>8/11</p>`,
          src: require("../../../../../assets/img/two_circles_and_one_skeleton/Red_mushromm.jpg"),
        },
        {
          title: "Spell on blue",
          description: `
            <p>Pastel sur papier</p>
            <p>115cm x 75cm</p>
            <br>
            <p>9/11</p>`,
          src: require("../../../../../assets/img/two_circles_and_one_skeleton/Spell_on_blue.jpg"),
        },
        {
          title: "Ticket for two",
          description: `
            <p>Pastel sur papier</p>
            <p>115cm x 75cm</p>
            <br>
            <p>10/11</p>`,
          src: require("../../../../../assets/img/two_circles_and_one_skeleton/Ticket_for_two.jpg"),
        },
        {
          title: "Two circles",
          description: `
            <p>Pastel sur papier</p>
            <p>115cm x 75cm</p>
            <br>
            <p>11/11</p>`,
          src: require("../../../../../assets/img/two_circles_and_one_skeleton/Two_circles.jpg"),
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
