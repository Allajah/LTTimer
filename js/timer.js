function Timer(){
 second=0; 
 minute=2;
 timerID=setInterval(function(){
 if(second<0 && minute > 0){
         second=59;
         minute--;
  }
  minuteString = (minute<10)?"0"+minute : minute;
  secondString = (second<10)?"0"+second : second;
  remainingtime=minuteString + ":" + secondString;
  
  document.getElementById("countdown").innerText=remainingtime;
    
  if(second==0 && minute==0){
   dora.play();
   dispAlert();
   
   clearInterval(timerID);
  }
  second--;
},1000);
}

function dispAlert(){
window.alert("Time Up");
}
