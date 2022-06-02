window.onload = function(){
    let seconds = 00;
    let tens = 00;
    let appentens = document.getElementById("info-time-2");
    let appenseconds = document.getElementById("info-time-1");
    let buttonStart = document.getElementById("Start");
    let buttonStop = document.getElementById("Stop");
    let buttonReset = document.getElementById("Reset");
    let Interval;

    buttonStart.onclick = function(){
        clearInterval(Interval);
        Interval=setInterval(starttimer,10)
    }
    buttonStop.onclick = function(){
        clearInterval(Interval); //stop count number
    }
    buttonReset.onclick = function(){
        clearInterval(Interval);
        tens=00;
        seconds=00;
        appentens.innerHTML = tens;
        appenseconds.innerHTML = seconds;
    }

    function starttimer(){
        tens++;
        if(tens<9){
            appentens.innerHTML="0"+tens;
        }
        if(tens>9){
            appentens.innerHTML = tens;
        }
        if(tens>99){
            seconds++;
            appenseconds.innerHTML ="0"+seconds;
            tens=0;
        }
        if(seconds>9){
            appenseconds.innerHTML = seconds;
        }
    }

}