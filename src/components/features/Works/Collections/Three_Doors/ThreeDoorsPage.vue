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
          title: "Arche",
          description: `
            <p>Pastel gras sur papier</p>
            <p>42cm x 29cm</p>
            <br>
            <p>1/6</p>`,
          src: require("../../../../../assets/img/three_doors/Arche.jpg"),
        },
        {
          title: "At lunch",
          description: `
            <p>Pastel gras sur papier</p>
            <p>42cm x 29cm</p>
            <br>
            <p>2/6</p>`,
          src: require("../../../../../assets/img/three_doors/Atlunch.jpg"),
        },
        {
          title: "Fondation",
          description: `
            <p>Pastel gras sur papier</p>
            <p>120cm x 80cm</p>
            <br>
            <p>3/6</p>`,
          src: require("../../../../../assets/img/three_doors/Fondation.jpg"),
        },
        {
          title: "Full",
          description: `
            <p>Pastel gras sur papier</p>
            <p>42cm x 29cm</p>
            <br>
            <p>4/6</p>`,
          src: require("../../../../../assets/img/three_doors/Full.jpg"),
        },
        {
          title: "Geographers",
          description: `
            <p>Pastel gras sur papier marouflé</p>
            <p>3x   150cm x 75cm</p>
            <br>
            <p>5/6</p>`,
          src: require("../../../../../assets/img/three_doors/Geographers.jpg"),
        },
        {
          title: "Three doors",
          description: `
            <p>Pastel gras sur papier</p>
            <p>42cm x 29cm</p>
            <br>
            <p>6/6</p>`,
          src: require("../../../../../assets/img/three_doors/Threedoors.jpg"),
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
