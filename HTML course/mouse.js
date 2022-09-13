var balls = document.getElementsByClassName("ball");

function ballRoll(){
    var x = event.clientX * 100/ window.innerWidth + "%";
    var y = event.clientY * 100/ window.innerHeight + "%";

    for(var i = 0; i <2; i++){
        balls[i].style.left = x/2;
        balls[i].style.top = y/2;
        balls[i].style.transform = "translate("+x+","+y+")";
    }
}
function mouseMove(){
    ballRoll();
}
window.addEventListener('mousemove',mouseMove)