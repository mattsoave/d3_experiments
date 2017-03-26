"use strict";

var data = [{
    "name": "A",
    "value": 10 + Math.random() * 20
}, {
    "name": "B",
    "value": 10 + Math.random() * 20
}, {
    "name": "C",
    "value": 10 + Math.random() * 20
}, {
    "name": "D",
    "value": 10 + Math.random() * 20
}, {
    "name": "E",
    "value": 10 + Math.random() * 20
}, {
    "name": "F",
    "value": 10 + Math.random() * 20
}];

function update() {
    //    
    //    for (let datum of data) {
    //        datum.value += Math.random()*5 - 1
    //    }

    //    d3.select(".chart").selectAll("div").data(data).enter().append("div")

    var selection = d3.select(".chart").selectAll("div").data(data);

    // Update existing
    selection // UPDATE
    .classed("new", false);

    // Add new
    selection.enter() // ENTER
    .append("div").classed("bar", true).classed("new", true).on("click", function (d, i) {
        console.log(d);
        console.log(i);
        data.splice(i, 1);
        update();
    }).merge(selection) // ENTER and UPDATE
    .style("width", function (d) {
        return x(d.value) + "%";
    }).text(function (d) {
        return d.name + ": " + d.value.toFixed(1);
    });

    // Remove old 
    selection.exit() // EXIT
    .remove();
}

function addData() {
    data.push({
        "name": "New",
        "value": 10 + Math.random() * 20
    });

    update();
}
function updateData() {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var datum = _step.value;

            datum.value += Math.random();
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    update();
}

var x = d3.scaleLinear().domain([0, d3.max(data, function (d) {
    return d.value;
})]).range([0, 100]);

document.addEventListener("DOMContentLoaded", function (event) {
    update();
});