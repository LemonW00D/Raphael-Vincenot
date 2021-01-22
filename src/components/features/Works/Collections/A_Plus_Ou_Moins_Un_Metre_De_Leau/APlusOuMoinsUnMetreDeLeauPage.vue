<template>
  <div id="modal-temp">
    <div
      class="container d-flex flex-row flex-wrap justify-content-around align-items-center rawmod"
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
          title: "Au puit",
          description: `
            <p>Huile sur toile</p>
            <p>40cm x 40cm</p>
            <br>
            <p>1/5</p>`,
          src: require("../../../../../assets/img/a_plus_ou_moins_un_metre_de_l'eau/Aupuit.jpg"),
        },
        {
          title: "La jeune fille",
          description: `
            <p>Pastel gras sur papier</p>
            <p>150cm x 110cm</p>
            <br>
            <p>2/5</p>`,
          src: require("../../../../../assets/img/a_plus_ou_moins_un_metre_de_l'eau/Lajeunefille.jpg"),
        },
        {
          title: "Le fumeur d'opium",
          description: `
            <p>Pastel gras sur papier</p>
            <p>100cm x 100cm</p>
            <br>
            <p>3/5</p>`,
          src: require("../../../../../assets/img/a_plus_ou_moins_un_metre_de_l'eau/Lefumeurdopium.jpg"),
        },
        {
          title: "Le valet",
          description: `
            <p>Huile sur toile</p>
            <p>200cm x 180cm</p>
            <br>
            <p>4/5</p>`,
          src: require("../../../../../assets/img/a_plus_ou_moins_un_metre_de_l'eau/Levalet.jpg"),
        },
        {
          title: "Ptomaïnes toxiques",
          description: `
            <p>Pastel gras sur papier marouflé</p>
            <p>150cm x 150cm</p>
            <br>
            <p>5/5</p>`,
          src: require("../../../../../assets/img/a_plus_ou_moins_un_metre_de_l'eau/Ptomainestoxiques.jpg"),
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
  height: 200px;
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
