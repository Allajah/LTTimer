S=0;
M=5;
MS=0;
second=S; 
minute=M;
minisecond=MS;
interval=1000;
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
    if(interval==10) {
      //if your want to display minisec, add '+":"+ minisecString'
      remainingtime=minuteString + ":" + secondString;
    }else if(interval==1000) {
      //if your want to display minisec, add '+":"+ minisecString'
      remainingtime=minuteString + ":" + secondString;
    }
    document.getElementById("countdown").innerText=remainingtime;

    if(minisecond==0 && second==0 && minute==0){
      dora.play();
      dispAlert();

      clearInterval(timerID);
      second=S;
      minute=M;
      minisecond=MS;
    }
    if(interval==10) minisecond--;
    else if(interval==1000) second--;
  },interval);
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
  //if your want to display minisec, add '+":"+ minisecString'
  remainingtime=minuteString + ":" + secondString;

  document.getElementById("countdown").innerText=remainingtime
}
