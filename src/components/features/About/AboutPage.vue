<template>
  <div class="about">
    <div class="resume">
      <h4>EXHIBITIONS</h4>
      <br />
      <h6>2019</h6>
      <p>
        Résidence, Sao PAULO, <span class="italic">Projeto FIDALGA</span>,
        exposition galerie Fidalaga.
      </p>
      <br />
      <h6>2016</h6>
      <p>
        <span class="italic">Who Cares</span>, Anne de Villepoix gallery, Paris,
        France.
      </p>
      <br />
      <h6>2013</h6>
      <p>Trafic Gallery, Ivry-sur-Seine, France.</p>
      <p>
        <span class="italic">Tout va bien</span>, Quai Est gallery, currated by
        Jean-Michel Marchais, Ivry-sur-Seine, France.
      </p>
      <p>
        <span class="italic">L’avenue</span>, Cultural Department of Gentilly,
        France.
      </p>
      <br />
      <h6>2012</h6>
      <p>
        Charlotte Norberg Gallery, curated by Jean-Michel Marchais, Paris,
        France.
      </p>
      <p>
        <span class="italic">Les Figures du Sommeil</span>, Vitry-sur-Seine town
        gallery, currated by Catherine Viollet, France.
      </p>
      <p>
        Nominated for the <span class="italic">Marin Prize</span>, entered by
        Jan Voos, Arcueil, France.
      </p>
      <br />
      <h6>2011</h6>
      <p>
        <span class="italic">Young Heart</span>, Trafic Gallery, Ivry-sur-Seine,
        currated by Jean Michel Marchais, France.
      </p>
      <p>
        <span class="italic">Novembre à Vitry</span>, Vitry-sur-Seine town
        gallery, France.
      </p>
      <br />
      <h6>2009</h6>
      <p>
        <span class="italic">Parcours Mixtes</span>, Michel Journiac gallery,
        Paris, France.
      </p>
      <br />
      <h6>2008</h6>
      <p>
        <span class="italic">Gedanken zur Revolution</span>, Spinnerei, Leipzig,
        Germany.
      </p>
      <p>
        <span class="italic">Travaux en cours</span>, Saint-Etienne Modern Art
        Museum, France.
      </p>
      <br />
    </div>
    <div class="portrait">
      <h4>PORTRAIT</h4>
      <br />
      <img src="../../../assets/img/Raphael.jpg" alt="Portrait Raphael" />
      <p>Born in 1983, lives and works in Paris, France.</p>
      <br />
    </div>
    <div class="education">
      <h4>EDUCATION</h4>
      <br />
      <h6>2009</h6>
      <p>
        Graduated with Master Degree, Ecole des Beaux Arts de Nantes, France.
      </p>
      <h6>2008</h6>
      <p>Exchange Student at the Universität der Kunst, Berlin, Germany.</p>
      <h6>2007</h6>
      <p>
        Exchange Student at the Hochshule für grafik und buchkunst, Leipzig,
        Germany.
      </p>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
@import "../../../../src/assets/scss/style.main.scss";

p,
h6,
h4 {
  letter-spacing: 1px;
}

h4 {
  font-size: 1.4rem;
}

p {
  font-size: 1.2rem;
}

.about {
  margin-top: 2rem;
  display: grid;
  grid:
    "resume portrait" auto
    "resume education" auto
    / 1fr 1fr;
}

.italic {
  font-style: italic;
}

.resume {
  grid-area: resume;
  margin: 0 5rem;
}

.portrait {
  grid-area: portrait;
  margin: 0 5rem;
  width: 300px;
}

.education {
  grid-area: education;
  margin: 0 5rem;
}

@include md {
  .about {
    grid:
      "portrait" auto
      "resume" auto
      "education" auto
      / 1fr;
    grid-gap: 2.5rem;
  }
}
</style>
