S=0;
M=5;
MS=0;
second=S; 
  minute=M;
  minisecond=MS;
function Timer(){
 
  timerID=setInterval(function(){
    if(minisecond<0 ){
    minisecond=99;
    second--;
    }
    if(second<0 && minute > 0){
      second=59;
      minute--;
    }
    minisecString = (minisecond<10)?"0"+minisecond : minisecond;
    minuteString = (minute<10)?"0"+minute : minute;
    secondString = (second<10)?"0"+second : second;
    remainingtime=minuteString + ":" + secondString + ":" + minisecString;

    document.getElementById("countdown").innerText=remainingtime;

    if(minisecond==0 && second==0 && minute==0){
      dora.play();
      dispAlert();

      clearInterval(timerID);
    }
    minisecond--;
  },10);
}

function dispAlert(){
  window.alert("Time Up");
}

function Stop(){
clearInterval(timerID);
}

function Reset(){
  clearInterval(timerID);
  second=S;
  minute=M;
  minisecond=MS;
  minisecString = (minisecond<10)?"0"+minisecond : minisecond;
  minuteString = (minute<10)?"0"+minute : minute;
  secondString = (second<10)?"0"+second : second;
  remainingtime=minuteString + ":" + secondString + ":" + minisecString;

  document.getElementById("countdown").innerText=remainingtime
}
