<script>
import { animate, stagger } from "motion";

export default {
  name: "Quest",
  data() {
    return {
      icon1: false,
      SitUpValue: localStorage.getItem("situps")
        ? parseInt(localStorage.getItem("situps"), 10)
        : 0,
      lastDay: localStorage.getItem("lastDay"),
      currentDay: "",
      MoSitUps: null, //localStorage.getItem("MopuschUps"),
      DiSitUps: null, //localStorage.getItem("DipuschUps"),
      MiSitUps: 200, //localStorage.getItem("MipuschUps"),
      DoSitUps: 0, //localStorage.getItem("DopuschUps"),
      FrSitUps: null, //localStorage.getItem("FepuschUps"),
      SaSitUps: null, //localStorage.getItem("SapuschUps"),
      SoSitUps: null, //localStorage.getItem("SopuschUps"),
    };
  },
  created() {
    this.checkDay();
    if (this.currentDay === this.lastDay) {
      return;
    } else {
      localStorage.setItem("situps", 0);
      this.cheDaysitups();
    }
  },
  methods: {
    checkDay() {
      // Liste der Wochentage
      const days = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
      const currentDayIndex = new Date().getDay();
      this.currentDay = days[currentDayIndex];
    },
    cheDaysitups() {
      if (this.currentDay === "Mo") {
        localStorage.setItem(
          "Totalsitups",
          JSON.stringify([
            this.SitUpValue,
            this.DiSitUps,
            this.MiSitUps,
            this.DoSitUps,
            this.FrSitUps,
            this.SaSitUps,
            this.SoSitUps,
          ])
        );
      } else if (this.currentDay === "Di") {
        localStorage.setItem(
          "Totalsitups",
          JSON.stringify([
            this.MoSitUps,
            this.SitUpValue,
            this.MiSitUps,
            this.DoSitUps,
            this.FrSitUps,
            this.SaSitUps,
            this.SoSitUps,
          ])
        );
      } else if (this.currentDay === "Mi") {
        localStorage.setItem(
          "Totalsitups",
          JSON.stringify([
            this.MoSitUps,
            this.DiSitUps,
            this.SitUpValue,
            this.DoSitUps,
            this.FrSitUps,
            this.SaSitUps,
            this.SoSitUps,
          ])
        );
      } else if (this.currentDay === "Do") {
        localStorage.setItem(
          "Totalsitups",
          JSON.stringify([
            this.MoSitUps,
            this.DiSitUps,
            this.MiSitUps,
            this.SitUpValue,
            this.FrSitUps,
            this.SaSitUps,
            this.SoSitUps,
          ])
        );
      } else if (this.currentDay === "Fr") {
        localStorage.setItem(
          "Totalsitups",
          JSON.stringify([
            this.MoSitUps,
            this.DiSitUps,
            this.MiSitUps,
            this.SitUpValue,
            this.FrSitUps,
            this.SaSitUps,
            this.SoSitUps,
          ])
        );
      } else if (this.currentDay === "Sa") {
        localStorage.setItem(
          "Totalsitups",
          JSON.stringify([
            this.MoSitUps,
            this.DiSitUps,
            this.MiSitUps,
            this.DoSitUps,
            this.FrSitUps,
            this.SitUpValue,
            this.SoSitUps,
          ])
        );
      } else if (this.currentDay === "So") {
        localStorage.setItem(
          "Totalsitups",
          JSON.stringify([
            this.MoSitUps,
            this.DiSitUps,
            this.MiSitUps,
            this.DoSitUps,
            this.FrSitUps,
            this.SaSitUps,
            this.SitUpValue,
          ])
        );
      }
    },

    increaseSitUpValue() {
      if (this.SitUpValue < 200) {
        this.SitUpValue += 10;
        localStorage.setItem("situps", this.SitUpValue);
        this.cheDaysitups();
        // Setze die Gesamtanzahl der Sit-Ups für den aktuellen Tag
      } else {
        this.lastDay = this.currentDay;
      }
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
          :value="SitUpValue"
          disabled
          min="0"
          max="200"
          class="slider"
        />
        <div class="slider-value">{{ SitUpValue }}/200</div>
      </div>
      <!-- Button -->
      <button class="yellow-button" @click="increaseSitUpValue">+10</button>
    </div>
  </div>
</template>

<style scoped>
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
