<script>
import { animate, stagger } from "motion";
import Quest1 from "./Quest1.vue";
import Quest2 from "./Quest2.vue";
import Quest3 from "./Quest3.vue";

export default {
  components: { Quest1, Quest2, Quest3 },
  name: "QuestPage",

  created() {
    this.icon1 = true;
  },
  data() {
    return {
      icon1: false,
    };
  },
  watch: {
    icon1(newVal) {
      if (newVal === true) {
        animate(
          ".icon1",
          { y: -20 },
          { delay: stagger(0.1), duration: 0.5, easing: [0.22, 0.03, 0.26, 1] }
        );
      } else {
        animate(
          ".icon1",
          { y: 0.5 },
          { delay: stagger(0.1), duration: 0.5, easing: [0.22, 0.03, 0.26, 1] }
        );
      }
    },
  },
};
</script>

<template>
  <div id="quest">
    <h1 class="Ueberschrift">Quest</h1>
    <div class="bottom-navbar">
      <nav>
        <ul>
          <li>
            <router-link to="/" @click="icon1 = true">
              <div class="icon-container icon2">
                <i class="fas fa-home"></i>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/Quest" @click="icon2 = true">
              <div class="icon-container icon1">
                <i class="fas fa-scroll"></i>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/Stat" @click="icon3 = true">
              <div class="icon-container icon3">
                <i class="fas fa-chart-line"></i>
              </div>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <Quest1 />
    <br />
    <br />
    <quest-2 />
    <br />
    <br />
    <quest-3 />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>



<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100..800&display=swap");
* {
  background-color: rgb(41, 41, 41);
  color: #c5c0c0;
  font-family: "Playpen Sans", cursive;
}
.Ueberschrift {
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
}
/* Bottom Navbar Styling */
.bottom-navbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  padding: 0 30px;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 0;
  padding: 0;
}

nav ul li {
  flex-grow: 1;
  text-align: center;
}

nav ul li a {
  display: inline-block;
  text-decoration: none;
  color: inherit;
  background-color: #333;
  color: #c5c0c0;
}

.icon-container {
  background-color: rgb(41, 41, 41);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 40px;
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>
