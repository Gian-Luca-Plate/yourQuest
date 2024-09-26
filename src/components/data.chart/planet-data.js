export const planetChartData = {
  type: "line",
  data: {
    labels: ["Mo", "Di", "Mi","Do","Fr","Sa","So"],
    datasets: [
      {
        label: "Push Ups",
        data: [], 
        borderColor: "#c5c0c0", // Transparente rote Farbe
        pointStyle: 'circle',
        pointRadius: 10,
        pointHoverRadius: 15,
      },
      {
        label: "sit Ups",
        data: [],
        borderColor: "rgb(255,255,0)",
        pointStyle: 'circle',
        pointRadius: 10,
        pointHoverRadius: 15,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: (ctx) => 'Point Style: ' + ctx.chart.data.datasets[0].pointStyle,
      },
    },
  },
};

export default planetChartData;
