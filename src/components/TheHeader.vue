<template>
  <transition name="nav-top" appear>
    <nav class="navbar navbar-expand-md">
      <div>
        <a class="navbar-brand black" href="#">RAPHAËL VINCENOT</a>
      </div>
      <button class="navbar-toggler navbar-light dark w-100">
        <span
          class="navbar-toggler-icon w-100"
          v-trigger-collapse="'collapse'"
        ></span>
      </button>
      <div id="collapse" class="collapse navbar-collapse">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item mx-2">
            <router-link class="nav-link black" to="/home">HOME</router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link class="nav-link black" to="/works">WORKS</router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link class="nav-link black" to="/about">ABOUT</router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link class="nav-link black" to="/contact"
              >CONTACT</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </transition>
</template>

<script>
export default {
  directives: {
    triggerCollapse: {
      inserted(el, binding) {
        window.addEventListener("click", () => {
          nav.classList.remove("show");
        });
        const nav = document.querySelector(`#${binding.value}`);
        el.addEventListener("click", (event) => {
          if (nav.classList.contains("show")) {
            nav.classList.remove("show");
          } else {
            nav.classList.add("show");
          }
          event.stopPropagation();
        });
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../src/assets/scss/style.main.scss";

nav {
  padding: 1.5rem 2rem;
  background: white;
  z-index: 999999;
}

li {
  a {
    cursor: pointer;
    font-size: 1.4rem;
    line-height: 2.4rem;
    margin: 0 0.25rem;
  }
}

.navbar-brand {
  font-size: 2.4rem;
  line-height: 2.4rem;
  padding: 1rem 0 1rem 0;
  margin-right: -26.625rem;
  font-weight: bold;
  word-spacing: 10px;
}

li {
  letter-spacing: 1px;
  line-height: 2.1rem;
}

.black {
  color: black;
}

@keyframes fromTop {
  from {
    transform: translateY(-100px);
  }
  to {
  }
}

.nav-top-enter-active {
  animation: fromTop 1s;
}

.router-link-active {
  font-weight: bold;
  color: black;
  border-bottom: 1px solid black;
}

@include md {
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .navbar-toggler {
    margin-top: 1rem;
  }
  .navbar-brand {
    margin-right: 0;
  }
}
</style>
