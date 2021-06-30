
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize',function(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();

})


var x = 200;
var y = 200;
var v = 5;
function init(){

    requestAnimationFrame(init)
    ctx.clearRect(0,0,innerWidth,innerHeight)
    console.log("Hello");

    ctx.beginPath();
    ctx.arc(x,y,60,0,Math.PI * 2);
    ctx.strokeStyle = "crimson";
    ctx.stroke();

    canvas.addEventListener('mousemove',function(e){

        x = e.clientX;
        y = e.clientY;
        // console.log(e.clientX, e.clientY);

    })
}
init();

