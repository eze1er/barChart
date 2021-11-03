const drawBarChart = function(data, options, element) { 

  const myBarChart: chart(ctx, {
     type: 'bar',
    data: data,
    options: options
  });

  let data = {
    datasets: [{
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        data: [10, 20, 30, 40, 50, 60, 70]
    }]
  };

  let options = {
    scales: {
      xAxes: [{
          gridLines: {
              offsetGridLines: true
          }
      }]
    }
  };

// Chart.defaults.bar is the default value

let defaultValue = (y,x);
let data = [[5,6], [-3,-6]];

let stackedBar = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
      scales: {
          xAxes: [{
              stacked: true
          }],
          yAxes: [{
              stacked: true
          }]
      }
  }
});

var myBarChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: data,
  options: options
});

}
