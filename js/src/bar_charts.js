var data = [
    parseInt(Math.random()*20),
    parseInt(Math.random()*20),
    parseInt(Math.random()*20),
    parseInt(Math.random()*20),
    parseInt(Math.random()*20)
];

function initialize() {
    d3.select(".chart")
        .selectAll("div")
        .data(data)
        .enter().append("div")
        .attr("class", "bar")
        .style("width", function (d) {
            return x(d) + "px";
        })
        .text(function (d) {
            return d;
        });
}
var x = d3.scaleLinear()
                .domain([0, d3.max(data)])
                .range([0, 500]);

document.addEventListener("DOMContentLoaded", function (event) {
    initialize();
});