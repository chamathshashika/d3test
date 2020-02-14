//course 3 - creating bar chart
var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

var dataset = [1, 2, 3, 4, 5];

var svgWidth = 500,
    svgHidth = 300,
    barPadding = 5;
var barWidth = (svgWidth / dataset.length);

var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHidth);

var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([0, svgHidth])


var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d) {
        return svgHidth - yScale(d);
    })
    .attr("height", function(d) {
        return yScale(d);
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function(d, i) {
        var translate = [barWidth * i, 0];
        return "translate(" + translate + ")";
    });


var text = svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d) {
        return d;
    })
    .attr("y", function(d, i) {
        return svgHidth - d - 2;
    })
    .attr("x", function(d, i) {
        return barWidth * i;
    })
    .attr("fill", "#A64C38");



//course 2 - data binding
//var dataset = [1, 2, 3, 4, 5];
//
//d3.select('body')
//        .selectAll('p')
//        .data(dataset)
//        .enter()
//        .append('p')
////        .text('D3 is awesome..!');
//        .text(function (d) {
//            return d;
//        });




//course 1
//d3.select('h1').style('color','green')
//        .attr('class','heading')
//        .text("Update text method");
//
//d3.select('body').append('p').text('First paragraph.');
//d3.select('body').append('p').text('Second paragraph.');
//d3.select('body').append('p').text('Third paragraph.');
//
//d3.selectAll('p').style('color','blue');