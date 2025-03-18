console.log("Integral");

function myF(x){
    return 0.1*x*x;
}

var xStart = 0, xEnd = 5;
var numberOfIntervals = 100000000;
var deltaX = (xEnd - xStart) / numberOfIntervals;

console.log("xStart = " + xStart + "; xEnd = " + xEnd);    
console.log("Number of intervals = " + numberOfIntervals);
console.log("dX = " + deltaX);  

var area = 0;

for(let i = 0; i < numberOfIntervals; i++){
    var x0 = xStart + i*deltaX;
    var x1 = xStart + (i + 1)*deltaX;
    var middlePoint = (x0 + x1) / 2;
    var myFuncValue = myF(middlePoint);

    area += myFuncValue*deltaX;    
}

console.log(`Area = ${area}`);