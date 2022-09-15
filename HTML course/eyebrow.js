var hed = document.querySelector('.head');
var bb = document.getElementById("bb");
//var state = false;

function mmmm(){
    hed.animate([

        {transform:"rotate(10deg)",offset:1}
    ],{
        duration: 2000,
        easing: "linear",
        delay:10,
        iteration: Infinity,
        direction: "alternate",
        fill:"forwards"
    });
}
function abra(){
    hed.animate([

        {transform:"rotate(-10deg)",offset:1}
    ],{
        duration: 2000,
        easing: "linear",
        delay:10,
        iteration: Infinity,
        direction: "alternate",
        fill:"forwards"
    });
}
function hsh(e){
    var x = e.clientX;
    var y = e.clientY;
    if(x < 700 || y < 400){
            mmmm()
            console.log('mmm')
            }
}

//window.addEventListener('mousemove', ()=>{  
    //console.log('hjj')
    //hsh()
  //  state = true;
  
    //var x = event.clientX * 100/ window.innerWidth + "%";
    //var y = event.clientY * 100/ window.innerHeight + "%";
//for(var i = 0; i<2; i++){
  //  if(x < 700 || y < 400){
    //    mmmm()
      ///  console.log('mmm')
       // }
    //if(x>700 || y>400){
      //  console.log('55')
       // abra()
   // }
        
//}

//})

