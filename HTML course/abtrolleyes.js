var eye = document.getElementsByClassName("eye");

function eyeRoll(){
    var x = event.clientX * 100/ window.innerWidth + "%";
    var y = event.clientY * 100/ window.innerHeight + "%";
    
    for(var i = 0; i <2; i++){
        eye[i].style.left = x/2;
        eye[i].style.top = y/2;
        eye[i].style.transform = "translate("+x+","+y+")";
    }
   
}
function mouseMove(){
    eyeRoll();
}
window.addEventListener("mousemove", mouseMove)