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

function initialize() {
    d3.select(".chart")
        .selectAll("div")
        .data(data)
        .enter().append("div")
        .attr("class", "bar")
        .style("width", function (d) {
            return x(d.value) + "%";
        })
        .text(function (d) {
            return d.name + ": " + d.value.toFixed(1);
        });
}
var x = d3.scaleLinear()
                .domain([0, d3.max(data, function(d) { return d.value; })])
                .range([0, 100]);


document.addEventListener("DOMContentLoaded", function (event) {
    initialize();
});