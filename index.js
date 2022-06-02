setInterval(setClock,1000);

const hourHand=document.querySelector('[date-hour-hand]');
const minuteHand=document.querySelector('[date-minute-hand]');
const secondsHand=document.querySelector('[date-second-hand]');

function setClock(){
const currentTime=new Date();
const secondsRatio=currentTime.getSeconds()/60;
const minutesRatio=(secondsRatio+currentTime.getMinutes())/60;
const hoursRatio=(minutesRatio+currentTime.getHours())/12;
setRotation(hourHand,hoursRatio);
setRotation(minuteHand,minutesRatio);
setRotation(secondsHand,secondsRatio);
setDigital(currentTime.getHours(),currentTime.getMinutes(),currentTime.getSeconds());
}
setRotation=(element,ratio)=>{
    element.style.setProperty('--rotation',ratio*360);
}
const Digital=document.querySelector('[digital]');
setDigital=(hrs,mins,secs)=>{
    var timeZone="AM";
    if(hrs>12){
        hrs-=12;
        timeZone="PM"
    }
    if(hrs<10){
        hrs='0'+hrs
    }
    if(mins<10){
        mins='0'+mins
    }
    if(secs<10){
        secs='0'+secs
    }

    Digital.innerHTML=hrs+':'+mins+':'+secs+' '+timeZone;
}
setClock();

