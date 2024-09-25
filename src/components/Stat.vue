<script>
import { animate, stagger } from "motion";
import Chart from "chart.js";
import planetChartData from "./data.chart/planet-data";
export default {
  name: "Stat",
  data() {
    return {
      icon1: false,
      totalPushUps: 0,
      planetChartData: planetChartData,
    };
  },
  created() {
    this.icon1 = true;
    this.totalPushUps = localStorage.getItem("Totalpushup")
      ? parseInt(localStorage.getItem("Totalpushup"), 10)
      : 0;
  },
  watch: {
    icon1(newVal) {
      if (newVal === true) {
        animate(
          ".icon1",
          { y: -20 }, // Zielposition für die Animation
          { delay: stagger(0.1), duration: 0.5, easing: [0.22, 0.03, 0.26, 1] } // Animationsoptionen
        );
      } else {
        animate(
          ".icon1",
          { y: 0.5 }, // Zielposition für die Animation
          { delay: stagger(0.1), duration: 0.5, easing: [0.22, 0.03, 0.26, 1] } // Animationsoptionen
        );
      }
    },
  },
  mounted() {
    const ctx = document.getElementById("chart");
    new Chart(ctx, this.planetChartData);
  },
};
</script>
<template>
  <div id="stat">
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
              <div class="icon-container icon3">
                <i class="fas fa-scroll"></i>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/Stat" @click="icon3 = true">
              <div class="icon-container icon1">
                <i class="fas fa-chart-line"></i>
              </div>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
      <canvas id="chart"></canvas>
    
  </div>
</template>


<style scope>
* {
  background-color: rgb(41, 41, 41);
}
#chart{
  background-color: #333;
  margin-top: 350px;
  height: 200px;
}
.bottom-navbar {
  position: fixed;
  bottom: 0; /* Erhöht die Navbar etwas */
  left: 0;
  right: 0;
  top: 100;
  height: 60px; /* Macht die Navbar höher */
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
  color: inherit; /* Entfernt den blauen Link-Effekt */
  background-color: #333;
  color: #c5c0c0;
}
.icon-container {
  background-color: rgb(
    41,
    41,
    41
  ); /* Gleiche Hintergrundfarbe wie die Navbar */
  border-radius: 50%; /* Macht den Container rund */
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 40px; /* Mehr Abstand zwischen den Icons */
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>