var state = false;
       var container = document.querySelector(".container") 
       var trigger = document.querySelector(".trigger")
       function switchOn() {
        trigger.addEventListener('click',() => {
            container.style.backgroundColor = 'blue';
            trigger.animate([

                {transform:"translateZ(50px) rotateX(60deg)",offset:1}
            ],{
                duration: 2000,
                easing: "linear",
                delay:10,
                iteration: Infinity,
                direction: "alternate",
                fill:"forwards"
            });
            state = true;
            console.log('ss');
        })
       }
        //switchOn()
        function switchOff(){
            trigger.addEventListener('click',() => {
            container.style.backgroundColor = 'red';
            trigger.animate([

                {transform:"translateZ(0px) rotateX(0deg)",offset:1}
            ],{
                duration: 2000,
                easing: "linear",
                delay:10,
                iteration: Infinity,
                direction: "alternate",
                fill:"forwards"
            });
            console.log('jj');
            state = false
        })  
        }
       //switchOff() 
       function lever(){
        state ? switchOff() : switchOn();
       }