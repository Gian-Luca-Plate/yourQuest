export const planetChartData = {
    type: "bar",
    data: {
      labels: ["Push Ups", "Sit Ups", "Squats"], // Exercise labels
      datasets: [
        {
          label: "Number of Exercises OT",
          type: 'bar',
          data: [
            localStorage.getItem("Totalpushup") || 0,  // Fetch push-ups from localStorage
            localStorage.getItem("Totalsitups") || 0,  // Fetch sit-ups from localStorage
            localStorage.getItem("Totalsquats") || 0   // Fetch squats from localStorage
          ],
          backgroundColor: "rgb(255,255,0)",
          borderColor: "#c5c0c0",
          borderWidth: 3
          
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              padding: 2
            }
          }
        ]
      }
    }
};

export default planetChartData;
