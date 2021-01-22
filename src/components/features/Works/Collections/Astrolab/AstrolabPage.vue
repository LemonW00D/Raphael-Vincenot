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
          title: "Astrolab",
          description: `
            <p>Huile sur toile</p>
            <p>150cm x 150cm</p>
            <br>
            <p>1/13</p>`,
          src: require("../../../../../assets/img/astrolab/Astrolab.jpg"),
        },
        {
          title: "Monkeyshow",
          description: `
            <p>Huile sur toile</p>
            <p>150cm x 150cm</p>
            <br>
            <p>2/13</p>`,
          src: require("../../../../../assets/img/astrolab/Monkeyshow.jpg"),
        },
        {
          title: "Trojan horse",
          description: `
            <p>Huile sur toile</p>
            <p>146cm x 114cm</p>
            <br>
            <p>3/13</p>`,
          src: require("../../../../../assets/img/astrolab/Trojanhorse.jpg"),
        },
        {
          title: "Lightning house",
          description: `
            <p>Huile sur toile</p>
            <p>146cm x 114cm</p>
            <br>
            <p>4/13</p>`,
          src: require("../../../../../assets/img/astrolab/Lightninghouse.jpg"),
        },
        {
          title: "Stagnant water",
          description: `
            <p>Huile sur toile</p>
            <p>22cm x 35cm</p>
            <br>
            <p>5/13</p>`,
          src: require("../../../../../assets/img/astrolab/Stagnantwater.jpg"),
        },
        {
          title: "Storm",
          description: `
            <p>Huile sur toile</p>
            <p>22cm x 35cm</p>
            <br>
            <p>6/13</p>`,
          src: require("../../../../../assets/img/astrolab/Storm.jpg"),
        },
        {
          title: "Burning",
          description: `
            <p>Pastel gras sur papier</p>
            <p>42cm x 29cm</p>
            <br>
            <p>7/13</p>`,
          src: require("../../../../../assets/img/astrolab/Burning.jpg"),
        },
        {
          title: "Coffee",
          description: `
            <p>Pastel gras sur papier</p>
            <p>100cm x 100cm</p>
            <br>
            <p>8/13</p>`,
          src: require("../../../../../assets/img/astrolab/Coffee.jpg"),
        },
        {
          title: "Fargo",
          description: `
            <p>Huile sur toile</p>
            <p>33cm x 55cm</p>
            <br>
            <p>9/13</p>`,
          src: require("../../../../../assets/img/astrolab/Fargo.jpg"),
        },
        {
          title: "Manufacture",
          description: `
            <p>Pastel gras sur papier</p>
            <p>120cm x 120cm</p>
            <br>
            <p>10/13</p>`,
          src: require("../../../../../assets/img/astrolab/Manufacture.jpg"),
        },
        {
          title: "New Amsterdam",
          description: `
            <p>Pastel gras sur papier</p>
            <p>42cm x 29cm</p>
            <br>
            <p>11/13</p>`,
          src: require("../../../../../assets/img/astrolab/NewAmsterdam.jpg"),
        },
        {
          title: "Parachuting",
          description: `
            <p>Pastel gras sur papier</p>
            <p>100cm x 100cm</p>
            <br>
            <p>12/13</p>`,
          src: require("../../../../../assets/img/astrolab/Parachuting.jpg"),
        },
        {
          title: "Shooting sunset",
          description: `
            <p>Pastel gras sur papier marouflé</p>
            <p>100cm x 100cm</p>
            <br>
            <p>13/13</p>`,
          src: require("../../../../../assets/img/astrolab/Shootingsunset.jpg"),
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
    margin-right: 4rem;
  }
}
</style>
