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
          title: "Bound",
          description: `
            <p>Huile sur toile</p>
            <p>40cm x 40cm</p>
            <br>
            <p>1/12</p>`,
          src: require("../../../../../assets/img/how_to_kill/Bound.jpg"),
        },
        {
          title: "Entregent",
          description: `
            <p>Huile sur toile</p>
            <p>40cm x 40cm</p>
            <br>
            <p>2/12</p>`,
          src: require("../../../../../assets/img/how_to_kill/Entregent.jpg"),
        },
        {
          title: "Escape with ladder",
          description: `
            <p>Huile sur toile</p>
            <p>30cm x 30cm</p>
            <br>
            <p>3/12</p>`,
          src: require("../../../../../assets/img/how_to_kill/Escapewithladder.jpg"),
        },
        {
          title: "Handcuffed",
          description: `
            <p>Huile sur toile</p>
            <p>40cm x 40cm</p>
            <br>
            <p>4/12</p>`,
          src: require("../../../../../assets/img/how_to_kill/Handcuffed.jpg"),
        },
        {
          title: "Holiday murder",
          description: `
            <p>Pastel gras sur papier</p>
            <p>42cm x 29cm</p>
            <br>
            <p>5/12</p>`,
          src: require("../../../../../assets/img/how_to_kill/Holidaymurder.jpg"),
        },
        {
          title: "Knife and beast",
          description: `
            <p>Huile sur toile</p>
            <p>40cm x 40cm</p>
            <br>
            <p>6/12</p>`,
          src: require("../../../../../assets/img/how_to_kill/Knifeandbeast.jpg"),
        },
        {
          title: "Prisoner",
          description: `
            <p>Huile sur toile</p>
            <p>40cm x 40cm</p>
            <br>
            <p>7/12</p>`,
          src: require("../../../../../assets/img/how_to_kill/Prisoner.jpg"),
        },
        {
          title: "Sawmill",
          description: `
            <p>Pastel gras sur papier</p>
            <p>42cm x 29cm</p>
            <br>
            <p>8/12</p>`,
          src: require("../../../../../assets/img/how_to_kill/Sawmill.jpg"),
        },
        {
          title: "The butcher",
          description: `
            <p>Huile sur toile</p>
            <p>40cm x 40cm</p>
            <br>
            <p>9/12</p>`,
          src: require("../../../../../assets/img/how_to_kill/Thebutcher.jpg"),
        },
        {
          title: "The exit",
          description: `
            <p>Huile sur toile</p>
            <p>40cm x 40cm</p>
            <br>
            <p>10/12</p>`,
          src: require("../../../../../assets/img/how_to_kill/Theexit.jpg"),
        },
        {
          title: "The spell",
          description: `
            <p>Huile sur toile</p>
            <p>40cm x 40cm</p>
            <br>
            <p>11/12</p>`,
          src: require("../../../../../assets/img/how_to_kill/Thespell.jpg"),
        },
        {
          title: "Twins head",
          description: `
            <p>Huile sur toile</p>
            <p>40cm x 40cm</p>
            <br>
            <p>12/12</p>`,
          src: require("../../../../../assets/img/how_to_kill/Twinshead.jpg"),
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
