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
    circle.setText(value + ' %');
  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';


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

bar.animate((total[total.length - 1] -12) / 12);  // Number from 0.0 to 1.0


$("#currentTotal").html(getChangeIndicator(total) + " " + total[total.length - 1] + " %");
$("#currentProductEngineeringIS24").html(getChangeIndicator(productEngineeringIS24) + " " + productEngineeringIS24[productEngineeringIS24.length - 1] + " %");
$("#currentProductEngineeringAS24").html(getChangeIndicator(productEngineeringAS24) + " " + productEngineeringAS24[productEngineeringAS24.length - 1] + " %");
$("#currentPlatformEngineering").html(getChangeIndicator(platformEngineering) + " " + platformEngineering[platformEngineering.length - 1] + " %");
$("#currentDataEngineering").html(getChangeIndicator(dataEngineering) + " " + dataEngineering[dataEngineering.length - 1] + " %");


function getChangeIndicator(data) {
    if (total.length == 1) {
        return "<i class=\"fa fa-arrow-right\" aria-hidden=\"true\" style=\"color:orange;\"></i>";
    }
    
    var current = total[total.length - 1];
    var last = total[total.length - 2];
    if (current > last) {
        return "<i class=\"fa fa-arrow-up\" aria-hidden=\"true\" style=\"color:green;\"></i>";
    } else if (current < last) {
        return "<i class=\"fa fa-arrow-down\" aria-hidden=\"true\" style=\"color:red;\"></i>";
    } else {
        return "<i class=\"fa fa-arrow-right\" aria-hidden=\"true\" style=\"color:orange;\"></i>";
    }
}

var xLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

createChartFor("productEngineeringIS24Chart", productEngineeringIS24);
createChartFor("productEngineeringAS24Chart", productEngineeringAS24);
createChartFor("platformEngineeringChart", platformEngineering);
createChartFor("dataEngineeringChart", dataEngineering);
createChartFor("totalChart", total);


createTableFor("#productEngineeringIS24Table", productEngineeringIS24);
createTableFor("#productEngineeringAS24Table", productEngineeringAS24);
createTableFor("#platformEngineeringTable", platformEngineering);
createTableFor("#dataEngineeringTable", dataEngineering);
createTableFor("#totalTable", total);

function createTableFor(elementId, data) {
    data.forEach(function (value, i) {
        $(elementId).append(createTableEntry(xLabels[i], data[i]));
    });
    
}

function createTableEntry(month, value) {
    return "<div class=\"grid gutter-s\">" +
                "<div class=\"grid-item two-thirds\">" + month + "</div>" +
                "<div class=\"grid-item one-third align-right\">" + value +  " %</div>" +
            "</div>";
}



function createChartFor(canvasId, data) {    
    var barBackgroundColor = "rgba(255,117,0,0.6)";
    var barBorderColor = "rgba(255,117,0,1)";
    var chartLabel = '% of Female Engineers';
    

    var chartOptions = {
        scales: { 
            yAxes: [ 
                { 
                    ticks: {
                        beginAtZero:true,
                        max: 80, 
                        stepSize: 10
                    }
                }
            ]
        },
        animation: {
            onComplete: function() {
                var ctx = this.chart.ctx;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                var chart = this;
                var datasets = this.config.data.datasets;

                datasets.forEach(function (dataset, i) {
                    ctx.font = "12px Arial";
                    ctx.fillStyle = "White";
                    chart.getDatasetMeta(i).data.forEach(function (p, j) {
                        ctx.fillText(datasets[i].data[j], p._model.x, p._model.y + 10);
                    });
                });
            
        }
    }
        
        
        
    };

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




