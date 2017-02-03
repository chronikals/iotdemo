nv.addGraph(function() {
    var chart2 = nv.models.multiBarChart()
            .reduceXTicks(true)   //If 'false', every single x-axis tick label will be rendered.
            .rotateLabels(0)      //Angle to rotate x-axis labels.
            .showControls(true)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
            .groupSpacing(0.1)    //Distance between each group of bars.
        ;

    chart2.xAxis
        .tickFormat(d3.format(',f'));

    chart2.yAxis
        .tickFormat(d3.format(',.1f'));

    d3.select('#stacked svg')
        .datum(exampleData())
        .call(chart2);

    nv.utils.windowResize(chart.update);

    return chart2;
});

//Generate some nice data.
function exampleData() {
    return stream_layers(3,10+Math.random()*100,.1).map(function(data, i) {
        return {
            key: 'Stream #' + i,
            values: data
        };
    });
}


nv.addGraph(function() {
    var chart2 = nv.models.multiBarChart()
            .reduceXTicks(true)   //If 'false', every single x-axis tick label will be rendered.
            .rotateLabels(0)      //Angle to rotate x-axis labels.
            .showControls(true)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
            .groupSpacing(0.1)    //Distance between each group of bars.
        ;

    chart2.xAxis
        .tickFormat(d3.format(',f'));

    chart2.yAxis
        .tickFormat(d3.format(',.1f'));

    d3.select('#stackedDark svg')
        .datum(exampleData())
        .call(chart2);

    nv.utils.windowResize(chart.update);

    return chart2;
});

//Generate some nice data.
function exampleData() {
    return stream_layers(3,10+Math.random()*100,.1).map(function(data, i) {
        return {
            key: 'Stream #' + i,
            values: data
        };
    });
}