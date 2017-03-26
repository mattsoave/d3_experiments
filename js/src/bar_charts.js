var data = [
    {
        "name": "A",
        "value": 10 + Math.random()*20
    },
    {
        "name": "B",
        "value": 10 + Math.random()*20
    },
    {
        "name": "C",
        "value": 10 + Math.random()*20
    },
    {
        "name": "D",
        "value": 10 + Math.random()*20
    },
    {
        "name": "E",
        "value": 10 + Math.random()*20
    },
    {
        "name": "F",
        "value": 10 + Math.random()*20
    }
];


function update() {
//    
//    for (let datum of data) {
//        datum.value += Math.random()*5 - 1
//    }
    
//    d3.select(".chart").selectAll("div").data(data).enter().append("div")
    
    var selection = d3.select(".chart")
        .selectAll("div")
        .data(data);
    
    selection.classed("new", false)
        .style("width", function (d) {
            return x(d.value) + "%";
        });
    
    selection.enter()
        .append("div")
        .classed("bar", true)
        .classed("new", true)
        .style("width", function (d) {
            return x(d.value) + "%";
        })
        .text(function (d) {
            return d.name + ": " + d.value.toFixed(1);
        });
    
    selection.exit()
        .remove();
}

function addData() {
    data.push({
        "name": "New",
        "value": 10 + Math.random()*20
    });
    
    update();
}

var x = d3.scaleLinear()
                .domain([0, d3.max(data, function(d) { return d.value; })])
                .range([0, 100]);


document.addEventListener("DOMContentLoaded", function (event) {
   update();
});