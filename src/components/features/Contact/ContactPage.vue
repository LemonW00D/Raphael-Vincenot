<template>
  <div>
    <div class="contact">
      <div class="d-flex flex-column item">
        <h3><i class="fas fa-phone-alt mr-2"></i> Phone</h3>
        <a href="tel:0686806284" class="tel">06 86 80 62 84</a>
      </div>

      <div class="d-flex flex-column item">
        <h3><i class="fas fa-at mr-2"></i> Mail</h3>
        <a href="mailto:rvincenot@yahoo.fr">rvincenot@yahoo.fr</a>
      </div>

      <div class="d-flex flex-column item">
        <h3><i class="fas fa-user-plus mr-2"></i> Networks</h3>
        <div class="d-flex flex-raw justify-content-center">
          <a href="https://www.facebook.com/raphael.vincenot"
            ><i class="fab fa-facebook mx-3"></i
          ></a>
          <a href="https://www.instagram.com/raphael_vincenot/"
            ><i class="fab fa-instagram-square mx-3"></i
          ></a>
        </div>
      </div>
    </div>
    <div class="my-5 d-flex flex-column align-items-center">
      <h3><i class="fas fa-map-marked-alt"></i> Studio</h3>
      <a
        href="https://www.google.fr/maps/dir//75+Avenue+Foch,+75116+Paris/@48.8561616,2.3057654,13z/data=!4m17!1m7!3m6!1s0x47e66ff622a9ac65:0xa96848772163f13c!2s75+Avenue+Foch,+75116+Paris!3b1!8m2!3d48.8713742!4d2.2789494!4m8!1m0!1m5!1m1!1s0x47e66ff622a9ac65:0xa96848772163f13c!2m2!1d2.2789494!2d48.8713742!3e1"
        target="_blank"
        rel="external nofollow noreferrer noopener"
        >75 avenue Foch <br />
        75116 PARIS <br />
        FRANCE</a
      >
      <hr />
    </div>
    <div class="studio">
      <img
        src="../../../assets/img/contact.jpg"
        alt="Photo du studio"
        class="d-block"
      />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d59383.073422315945!2d2.3026782906196903!3d48.86992016345792!3m2!1i1024!2i768!4f13.1!4m8!3e1!4m0!4m5!1s0x47e66ff622a9ac65%3A0xa96848772163f13c!2s75%20Avenue%20Foch%2C%2075116%20Paris!3m2!1d48.8713742!2d2.2789493999999997!5e0!3m2!1sfr!2sfr!4v1597767148657!5m2!1sfr!2sfr"
        width="350"
        height="375"
        frameborder="0"
        style="border:0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
@import "../../../../src/assets/scss/style.main.scss";

.contact {
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

h3 {
  font-size: 1.4rem;
  letter-spacing: 1px;
  cursor: default;
}

a {
  text-decoration: none;
  text-align: center;
  color: black;
  letter-spacing: 1px;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    color: black;
  }
}

.fab {
  font-size: 2rem;
}

.fa-facebook {
  &:hover {
    color: #0b84ed;
  }
}

.fa-instagram-square {
  border-radius: 7.5px;
  display: inline-block;
  &:hover {
    background: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.studio {
  display: flex;
  flex-direction: row;
  justify-content: center;

  img {
    width: auto;
    max-height: 375px;
    margin: 0;
    margin-right: 4rem;
    border-radius: 5px;
  }
  iframe {
    border-radius: 5px;
    filter: grayscale(0.75);
  }
}

@include xs {
  .contact {
    flex-direction: column;
  }
  .item {
    margin-top: 3rem;
  }
}

@include md {
  .studio {
    flex-direction: column;
    align-items: center;

    img {
      margin: 0;
    }

    iframe {
      margin-top: 4rem;
    }
  }
}
</style>
