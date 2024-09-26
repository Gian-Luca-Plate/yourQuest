<script>
import { animate, stagger } from "motion";

export default {
  name: "Quest",
  data() {
    return {
      icon1: false,
      PushUpValue: localStorage.getItem("pushup")
        ? parseInt(localStorage.getItem("pushup"), 10)
        : 0,
      lastDay: localStorage.getItem("lastDay"),
      currentDay: "",
      MopuschUps: localStorage.getItem("MopuschUps"),
      DipuschUps: localStorage.getItem("DipuschUps"),
      MipuschUps: localStorage.getItem("MipuschUps"),
      DopuschUps: localStorage.getItem("DopuschUps"),
      FrpuschUps: localStorage.getItem("FepuschUps"),
      SapuschUps: localStorage.getItem("SapuschUps"),
      SopuschUps: localStorage.getItem("SopuschUps"),
    };
  },
  created() {
    this.checkDay();
    if (this.currentDay === this.lastDay) {
      return
    } else {
      localStorage.setItem("pushup", 0);
       this.chekDayPuschups();
    }
  },
  methods: {
    checkDay() {
      // Liste der Wochentage
      const days = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
      const currentDayIndex = new Date().getDay();
      this.currentDay = days[currentDayIndex];
    },
    chekDayPuschups() {
      if (this.currentDay === "Mo") {
        localStorage.setItem("MopuschUps" ,this.PushUpValue )
        localStorage.setItem(
          "Totalpushups",
          JSON.stringify([
            this.PushUpValue,
            this.DipuschUps,
            this.MipuschUps,
            this.DopuschUps,
            this.FrpuschUps,
            this.SapuschUps,
            this.SopuschUps,
          ])
        );
      }
      if (this.currentDay === "Di") {
        localStorage.setItem("DipuschUps" ,this.PushUpValue )
        localStorage.setItem(
          "Totalpushups",
          JSON.stringify([
            this.MopuschUps,
            this.PushUpValue,
            this.MipuschUps,
            this.DopuschUps,
            this.FrpuschUps,
            this.SapuschUps,
            this.SopuschUps,
          ])
        );
      }
      if (this.currentDay === "Mi") {
        localStorage.setItem("MipuschUps" ,this.PushUpValue )
        localStorage.setItem(
          "Totalpushups",
          JSON.stringify([
            this.MopuschUps,
            this.DipuschUps,
            this.PushUpValue,
            this.DopuschUps,
            this.FrpuschUps,
            this.SapuschUps,
            this.SopuschUps,
          ])
        );
      }
      if (this.currentDay === "Do") {
        localStorage.setItem("DopuschUps" ,this.PushUpValue )
        localStorage.setItem(
          "Totalpushups",
          JSON.stringify([
            this.MopuschUps,
            this.DipuschUps,
            this.MipuschUps,
            this.PushUpValue,
            this.FrpuschUps,
            this.SapuschUps,
            this.SopuschUps,
          ])
        );
      }
      if (this.currentDay === "Fr") {
        localStorage.setItem("FrpuschUps" ,this.PushUpValue )
        localStorage.setItem(
          "Totalpushups",
          JSON.stringify([
            this.MopuschUps,
            this.DipuschUps,
            this.MipuschUps,
            this.PushUpValue,
            this.FrpuschUps,
            this.SapuschUps,
            this.SopuschUps,
          ])
        );
      }
    },
    increasePushUpValue() {
      if (this.PushUpValue < 200) {
        this.PushUpValue += 10;
        localStorage.setItem("pushup", this.PushUpValue);
        this.chekDayPuschups();
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
      <h2>Push Ups</h2>
      <!-- Slider und Anzeige des Slider-Werts nebeneinander -->
      <div class="slider-container">
        <input
          type="range"
          :value="PushUpValue"
          disabled
          min="0"
          max="200"
          class="slider"
        />
        <div class="slider-value">{{ PushUpValue }}/200</div>
      </div>
      <!-- Button -->
      <button class="yellow-button" @click="increasePushUpValue">+10</button>
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
