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
          title: 'Giants',
          description: `
            <p>Pastel sur papier</p>
            <p>3x   70cm x 50cm</p>
            <br>
            <p>1/3</p>`,
          src: require("../../../../../assets/img/odyssey/Giants.jpg"),
        },
        {
          title: 'Red procession',
          description: `
            <p>Pastel sur papier</p>
            <p>3x   70cm x 50cm</p>
            <br>
            <p>2/3</p>`,
          src: require("../../../../../assets/img/odyssey/Redprocession.jpg"),
        },
        {
          title: 'Trojan trees',
          description: `
            <p>Pastel sur papier</p>
            <p>3x   70cm x 50cm</p>
            <br>
            <p>3/3</p>`,
          src: require("../../../../../assets/img/odyssey/Trojantrees.jpg"),
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
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

}

.title-collection {
  text-align: center;
  margin: 4rem 0 2.5rem 0;
  &:hover{
      cursor: pointer;
  }
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
  width: 250px;
  margin: 0 2rem;
    
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