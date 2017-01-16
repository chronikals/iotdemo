var s = Snap("#uno");
Snap.load("./assets/fixed/abb-pps-generator-unknown.svg", onSVGLoaded);

function onSVGLoaded(data) {
    s.append(data);
    var svg = s.select("svg");
    svg.attr({id: "element"});
    console.log('loaded');
}

function changeDimension() {
    console.log('changing dimension');
    var element = Snap.select("#element");
    //element.clear();
    var dim = element.attr("width") == 64 ? "48" : "64";
    element.attr({
        width: dim,
        height: dim
    });
    console.log(s);
}