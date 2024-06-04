let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');



let dd = document.getElementById('dd')
let hh = document.getElementById('hh')
let mm = document.getElementById('mm')
let ss = document.getElementById('ss')


let endDate = '06/15/2024  00:00:00';

//formats mm/dd/yyyy, hh:mm:ss

let x = setInterval(function(){
     let now = new Date(endDate). getTime();

     let countdown = new Date().getTime();

     let distance = now - countdown;

     //time calculation

     let d = Math.floor(distance / (1000 * 60 * 60 * 24) );
     let h = Math.floor((distance % (1000 * 60 * 60 * 24) )/ (1000 * 60 * 60));
     let m = Math.floor((distance % (1000 * 60 * 60))/ (1000 * 60 ));
     let s = Math.floor((distance % (1000 * 60))/ (1000 ));


    //output results

    days.innerHTML= d + "<br><span>Days</span>";

    hours.innerHTML = h + "<br><span>Hours</span>";

    minutes.innerHTML = m +  "<br><span>Minutes</span>"

    seconds.innerHTML = s + "<br><span>Seconds</span>"


    //Animate stroke

    dd.style.strokeDashoffset = 440 - (440 * d) / 365;

    hh.style.strokeDashoffset = 440 - (440 * h) / 24;

    mm.style.strokeDashoffset = 440 - (440 * m) / 60;

    ss.style.strokeDashoffset = 440 - (440 * s) / 60;


    //if the countdown is over

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").style.display = "none"

        document.getElementById("text").style.display = "none"

        document.querySelector(".weddingDay").style.display = "block"


        let duration = 30 * 1000;
        let end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 7,
                angle: 60,
                spread: 55,
                origin:{ x:0}

            });


            confetti({
                particleCount: 7,
                angle: 120,
                spread: 55,
                origin:{ x:1}
                
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }())

        // confetti();


    } 


})