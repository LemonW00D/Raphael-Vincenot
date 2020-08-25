<template>
    <div id="modal-temp">        
        <div class="container d-flex flex-row flex-wrap justify-content-between align-items-center rawmod">
                <CoolLightBox class="image-collection"
                    :items="items"
                    :index="index"
                    @close="index = null">
                </CoolLightBox>
                <div class="images-wrapper">
                <div
                    class="image"
                    v-for="(image, imageIndex) in items"
                    :key="imageIndex"
                    @click="index = imageIndex"
                    :style="{ backgroundImage: 'url(' + image.src + ')', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }"
                >
                
                </div>
                </div>
                </div>
            
        
    </div>    
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox';
import '../../../../../assets/scss/vue-cool-lightbox.min.css';

export default {
  name: "modal-temp",
  components: {
    CoolLightBox,
  },
  methods: {
    setIndex(index) {
      this.index = index
    },
    reloadPage(){
      window.location.reload()
    }
  },
  data: function () {
    return {
      items: [
        {
          title: 'Cactus',
          description: `
            <p>Pastel sur papier</p>
            <p>110cm x 72cm</p>
            <br>
            <p>1/6</p>`,
          src: require("../../../../../assets/img/reserve/cactus.jpg"),
        },
        {
          title: 'Sun and hand',
          description: `
            <p>Pastel sur papier</p>
            <p>110cm x 72cm</p>
            <br>
            <p>2/6</p>`,
          src: require("../../../../../assets/img/reserve/hand.jpg"),
        },
        {
          title: 'Broken hut',
          description: `
            <p>Pastel sur papier</p>
            <p>110cm x 72cm</p>
            <br>
            <p>3/6</p>`,
          src: require("../../../../../assets/img/reserve/hut.jpg"),
        },
        {
          title: 'Insect',
          description: `
            <p>Pastel sur papier</p>
            <p>110cm x 72cm</p>
            <br>
            <p>4/6</p>`,
          src: require("../../../../../assets/img/reserve/insect.jpg"),
        },
        {
          title: 'Japonese t-shirt',
          description: `
            <p>Pastel sur papier</p>
            <p>110cm x 72cm</p>
            <br>
            <p>5/6</p>`,
          src: require("../../../../../assets/img/reserve/japonesetshirt.jpg"),
        },
        {
          title: 'Two huts',
          description: `
            <p>Pastel sur papier</p>
            <p>110cm x 72cm</p>
            <br>
            <p>6/6</p>`,
          src: require("../../../../../assets/img/reserve/twohut.jpg"),
        },
      ],
      index: null
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
      default: 'rgb(0, 0, 0)'
    },
    slideshowColorBar: {
        type: String,
        default: '#fa4242'
    },
    closeOnClickOutsideMobile: {
        type: Boolean,
        default: true,
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../../../src/assets/scss/style.main.scss";

p{
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

.cool-lightbox{
    top: 13rem;
}

.rawmod{
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
    
  &:hover{
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
  .images-wrapper{
    justify-content: space-around;
    margin-right: 4rem;
  }
}
</style>