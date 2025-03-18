console.log("Integral");

function myF(x){
    return 0.1*x*x;
}

var xStart = 0, xEnd = 5;
var numberOfIntervals = 5;
var deltaX = (xEnd - xStart) / numberOfIntervals;