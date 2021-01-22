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
          <a
            href="https://www.facebook.com/raphael.vincenot"
            target="_blank"
            rel="external nofollow noreferrer noopener"
            ><i class="fab fa-facebook mx-3"></i
          ></a>
          <a
            href="https://www.instagram.com/raphael_vincenot/"
            target="_blank"
            rel="external nofollow noreferrer noopener"
            ><i class="fab fa-instagram-square mx-3"></i
          ></a>
        </div>
      </div>
    </div>
    <div class="my-5 d-flex flex-column align-items-center">
      <h3><i class="fas fa-map-marked-alt"></i> Studio</h3>
      <a
        href="https://www.google.com/maps/place/1T+Rue+Pierre+et+Marie+Curie,+94200+Ivry-sur-Seine/@48.8146269,2.3601076,13.67z/data=!4m5!3m4!1s0x47e67232cdc6694b:0x5deffdbb0c584cd0!8m2!3d48.8156887!4d2.376717"
        target="_blank"
        rel="external nofollow noreferrer noopener"
        >1 Ter rue Pierre et Marie Curie <br />
        94200 IVRY-SUR-SEINE <br />
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
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d70648.9188749323!2d2.348742040832145!3d48.84855782759314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e1!4m0!4m5!1s0x47e67232cdc6694b%3A0x5deffdbb0c584cd0!2s1T%20Rue%20Pierre%20et%20Marie%20Curie%2C%2094200%20Ivry-sur-Seine!3m2!1d48.815688699999995!2d2.3767169999999997!5e0!3m2!1sfr!2sfr!4v1598290928258!5m2!1sfr!2sfr"
        width="350"
        height="375"
        frameborder="0"
        style="border:0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
    <footer>
      <p>
        © 2020 - www.raphaelvincenot.com - Painter | Created by :
        <a href="https://www.arnaud-tessier.fr" target="_blank" class="dev"
          >Arnaud Tessier<img
            class="dev-img"
            src="../../../assets/img/Arnaud-Tessier.png"
            alt="Arnaud Tessier"
        /></a>
      </p>
    </footer>
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

footer {
  position: sticky;
  text-align: center;
  margin: 0;
  margin-top: 11rem;

  p {
    margin: 0;
    font-size: 1.1rem;
  }

  .dev {
    font-size: 1.1rem;

    &:hover {
      text-decoration: underline;
      font-weight: bold;
    }
  }

  .dev-img {
    height: 20px;
    border-radius: 50%;
    margin-left: 0.5rem;
    filter: brightness(150%) contrast(125%);
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
  footer {
    margin-top: 5rem;
  }
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
