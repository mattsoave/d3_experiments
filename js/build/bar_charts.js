"use strict";

var data = [1, 2, 3, 4];
function initialize() {
    d3.select(".chart").selectAll("div").data(data).enter().append("div").attr("class", "bar").style("width", function (d) {
        return d * 10 + "px";
    }).text(function (d) {
        return d;
    });
}

document.addEventListener("DOMContentLoaded", function (event) {
    initialize();
});