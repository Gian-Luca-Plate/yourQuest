<script>
import { animate, stagger } from "motion";

export default {
  name: "Quest",
  data() {
    return {
      icon1: false,
      situpsValue: localStorage.getItem("situps")
        ? parseInt(localStorage.getItem("situps"), 10)
        : 0,
      totalsitupss: localStorage.getItem("Totalsitups")
        ? parseInt(localStorage.getItem("Totalsitups"), 10)
        : 0,
      lastDay: localStorage.getItem("lastDay"),
      currentDay: "",
    };
  },
  created() {
    this.checkDay();
    if (this.currentDay === this.lastDay) {
      return;
    } else {
      localStorage.setItem("situps", 0);
    }
  },
  methods: {
    checkDay() {
      // Liste der Wochentage
      const days = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
      const currentDayIndex = new Date().getDay();
      this.currentDay = days[currentDayIndex];
    },

    increasesitupsValue() {
      this.situpsValue += 10;
      localStorage.setItem("situps", this.situpsValue);
    },
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
    situpsValue(newVal) {
      if (newVal > 200) {
        alert("Du hast 200 Push Ups geschafft 🥳");
        this.situpsValue = 200;
        localStorage.setItem("situps", 200);
        localStorage.setItem("lastDay", this.currentDay);
      }
      if (newVal === 200) {
        alert("Du hast 200 Push Ups geschafft 🥳");
        this.situpsValue = 200;
        this.totalsitupss += 200;
        localStorage.setItem("situps", 200);
        localStorage.setItem("lastDay", this.currentDay);
        localStorage.setItem("Totalsitups", this.totalsitupss);
      }
    },
  },
};
</script>
<template>
  <div id="quest1">
    <!-- Flexbox Container für das Layout -->
    <div class="container">
      <h2>Sit Ups</h2>
      <!-- Slider und Anzeige des Slider-Werts nebeneinander -->
      <div class="slider-container">
        <input
          type="range"
          :value="situpsValue"
          disabled
          min="0"
          max="200"
          class="slider"
        />
        <div class="slider-value">{{ situpsValue }}/200</div>
      </div>
      <!-- Button -->
      <button class="yellow-button" @click="increasesitupsValue">+10</button>
    </div>
  </div>
</template>



<style scoped>
* {
  background-color: rgb(41, 41, 41);
}
* {
  background-color: rgb(41, 41, 41);
}

/* Container für Flexbox-Layout */
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #333;
  width: 250px;
  height: 100px;
  border-radius: 20px;
  color: #c5c0c0;
  margin: 0 auto;
  padding: 20px;
}

/* Zentrierte Überschrift */
h2 {
  text-align: center;
  margin: 0;
  background-color: #333;
}

/* Flexbox-Container für Slider und Wert */
.slider-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333; /* Gleicher Hintergrund für beide Elemente */
  border-radius: 10px;
}

/* Slider kleiner und schmaler machen */
.slider {
  -webkit-appearance: none;
  width: 120px;
  height: 6px;
  background: #555;
  border-radius: 4px;
  outline: none;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  background: yellow;
  border-radius: 50%;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 16px;
  height: 16px;
  background: yellow;
  border-radius: 50%;
  cursor: pointer;
}

/* Anzeige des Slider-Wertes direkt neben dem Slider */
.slider-value {
  margin-left: 10px;
  font-size: 16px;
  color: #c5c0c0;
  background-color: #333; /* Gleicher Hintergrund */
  padding: 5px 10px;
  border-radius: 8px;
}

/* Gelber Button mit schwarzer Schrift */
.yellow-button {
  background-color: yellow;
  color: black;
  padding: 10px 36px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 5px;
  margin-bottom: 10px;
}
</style>
