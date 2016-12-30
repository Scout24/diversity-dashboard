var bar = new ProgressBar.Circle(container, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#6fae72', width: 1 },
  to: { color: '#0f7914', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + ' %');
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(0.5);  // Number from 0.0 to 1.0

var productEngineeringIS24 = new Array();
var productEngineeringAS24 = new Array();
var platformEngineering = new Array();
var dataEngineering = new Array();
var total = new Array();

for (var i = 1; i <= 12; i++) {
    $.ajax({url:"data/" + i + ".json", type:"GET", crossDomain: true, dataType: "json", async: false, success:onDataReceived});
}

function onDataReceived(data) {
    productEngineeringIS24.push(data.productEngineeringIS24);
    productEngineeringAS24.push(data.productEngineeringAS24);
    platformEngineering.push(data.platformEngineering);
    dataEngineering.push(data.dataEngineering);
    total.push(data.total);
}

createChartFor("productEngineeringIS24Chart", productEngineeringIS24);
createChartFor("productEngineeringAS24Chart", productEngineeringAS24);
createChartFor("platformEngineeringChart", platformEngineering);
createChartFor("dataEngineeringChart", dataEngineering);

function createChartFor(canvasId, data) {    
    var barBackgroundColor = "rgba(255,117,0,0.4)";
    var barBorderColor = "rgba(255,117,0,1)";
    var chartLabel = '% of Female Engineers';
    var xLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var chartOptions = {scales: { yAxes: [{ticks: {beginAtZero:true,max: 80, stepSize: 5}}]}};

    new Chart(document.getElementById(canvasId), {
        type: 'bar',
        data: {
            labels: xLabels,
            datasets: [{
                label: chartLabel,
                data: data,
                backgroundColor: barBackgroundColor,
                borderColor: barBorderColor,
                borderWidth: 1
            }]
        },
        options: chartOptions
    });
}
