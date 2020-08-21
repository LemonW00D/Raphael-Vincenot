<template>
    <div id="modal-temp">        
        <a @click="reloadPage"><h3 class="title-collection">Some Skeleton Variation</h3></a>
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
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css';

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
          title: 'Greeneye',
          description: `
            <p>Pastel sur papier</p>
            <p>70cm x 60cm</p>
            <br>
            <p>1/7</p>`,
          src: require("../../../../../assets/img/some_skeleton_variation/greeneye.jpg"),
        },
        {
          title: 'Heap',
          description: `
            <p>Pastel sur papier</p>
            <p>70cm x 60cm</p>
            <br>
            <p>2/7</p>`,
          src: require("../../../../../assets/img/some_skeleton_variation/heap.jpg"),
        },
        {
          title: 'Large Pink Straw',
          description: `
            <p>Pastel sur papier</p>
            <p>70cm x 60cm</p>
            <br>
            <p>3/7</p>`,
          src: require("../../../../../assets/img/some_skeleton_variation/largepinkstraw.jpg"),
        },
        {
          title: 'Hip In The Miror',
          description: `
            <p>Pastel sur papier</p>
            <p>70cm x 60cm</p>
            <br>
            <p>4/7</p>`,
          src: require("../../../../../assets/img/some_skeleton_variation/hipinthemiror.jpg"),
        },
        {
          title: 'Look Behind',
          description: `
            <p>Pastel sur papier</p>
            <p>70cm x 60cm</p>
            <br>
            <p>5/7</p>`,
          src: require("../../../../../assets/img/some_skeleton_variation/lookbehind.jpg"),
        },
        {
          title: 'Should Turn Left',
          description: `
            <p>Pastel sur papier</p>
            <p>70cm x 60cm</p>
            <br>
            <p>6/7</p>`,
          src: require("../../../../../assets/img/some_skeleton_variation/shouldturnleft.jpg"),
        },
        {
          title: 'Strange Vibration',
          description: `
            <p>Pastel sur papier</p>
            <p>70cm x 60cm</p>
            <br>
            <p>7/7</p>`,
          src: require("../../../../../assets/img/some_skeleton_variation/strangevibration.jpg"),
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
#modal-temp{
    a{
        &:hover{
            text-decoration: underline;
            cursor: pointer;
        }
    }
}

p{
    font-size: 1.2rem;
}
.title-collection {
  text-align: center;
  margin: 4rem 0 2.5rem 0;
  &:hover{
      cursor: pointer;
  }
}
.images-wrapper {
  justify-content: space-between;
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
  margin: 5rem;
    
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
  }
  .images-wrapper{
    justify-content: space-around;
    margin-right: 4rem;
  }
}
</style>