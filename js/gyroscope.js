var circle = document.getElementById("circle");
var wx = document.getElementsByTagName("BODY")[0].offsetWidth;
var hy = document.getElementsByTagName("BODY")[0].offsetHeight;
var medx = wx / 2;
var medy = hy / 2;

circle.style.top = medy + "px";
circle.style.left = medx + "px";

if (window.DeviceMotionEvent != undefined) {
    window.ondevicemotion = function(event) {
        circle.style.top = medy - (event.accelerationIncludingGravity.y * (medy / 10)) + "px";
        circle.style.left = medx - (event.accelerationIncludingGravity.x * (medy / 10)) + "px";
        // var x = event.accelerationIncludingGravity.x;
        // var y = event.accelerationIncludingGravity.y;
        // var z = event.accelerationIncludingGravity.z;

        // event.interval = 1000;
        // document.getElementById("infox").innerHTML = event.accelerationIncludingGravity.x;
        // document.getElementById("infoy").innerHTML = event.accelerationIncludingGravity.y;
        // document.getElementById("infoz").innerHTML = event.accelerationIncludingGravity.z;

        // document.getElementById("infoa").innerHTML = event.rotationRate.alpha;
        // document.getElementById("infob").innerHTML = event.rotationRate.beta;
        // document.getElementById("infog").innerHTML = event.rotationRate.gamma;




    }
} else {
    alert("no soportado");
}