var circle = document.getElementById("circle");
var wx = document.getElementsByTagName("BODY")[0].offsetWidth;
var hy = document.getElementsByTagName("BODY")[0].offsetHeight;
var medx = wx / 2;
var medy = hy / 2;
var num = 4;

circle.style.top = medy + "px";
circle.style.left = medx + "px";

if (window.DeviceMotionEvent != undefined) {
    window.ondevicemotion = function(event) {
        circle.style.top = medy - ((Math.round(event.accelerationIncludingGravity.y) * (medy / 10)) * -1) + "px";
        circle.style.left = medx - (Math.round(event.accelerationIncludingGravity.x) * (medy / 10)) + "px";
        circle.style.width = num + Math.round(event.accelerationIncludingGravity.y) + "vw";
        if (Math.round(event.accelerationIncludingGravity.y) <= -2) {
            circle.style.height = num - 2 + "vw";
            circle.style.width = num - 2 + "vw";
        } else {
            circle.style.height = num + Math.round(event.accelerationIncludingGravity.y) + "vw";
            circle.style.width = num + Math.round(event.accelerationIncludingGravity.y) + "vw";
        }


        // event.interval = 1000;
        document.getElementById("infox").innerHTML = (Math.round(event.accelerationIncludingGravity.x));
        document.getElementById("infoy").innerHTML = (Math.round(event.accelerationIncludingGravity.y));
        document.getElementById("infoz").innerHTML = (Math.round(event.accelerationIncludingGravity.z));

        // document.getElementById("infoa").innerHTML = event.rotationRate.alpha;
        // document.getElementById("infob").innerHTML = event.rotationRate.beta;
        // document.getElementById("infog").innerHTML = event.rotationRate.gamma;




    }
} else {
    alert("no soportado");
}