let secondHand = document.getElementsByClassName("secondHand");
let minuteHand = document.getElementsByClassName("minuteHand");
let hourHand = document.getElementsByClassName("hourHand");

function getDegree(time,minute){
  if(minute){
    //calculating hour hand degree
    let hourDeg = time *30;
    let hourGapDeg = hourDeg+((minute/2));
    return Math.floor(hourGapDeg);
  }
  return time * 6;
}

function getTwoDigit(timeElement){
  return  timeElement < 10 ? '0'+timeElement : timeElement;
}

function runDigitalTimer(currentTime){
  let digitalElement = document.getElementsByClassName("digitalTime")[0];
  let hours = currentTime.getHours() % 12 ||12;
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let time = `${getTwoDigit(hours)}:${getTwoDigit(minutes)}:${getTwoDigit(seconds)}`;
  digitalElement.innerText = time;
}

setTimeout( () =>{
  document.querySelectorAll(".hand").forEach( (element) =>{
    element.classList.remove("anim");
  })
},2000);

setInterval( () =>{
  let currentTime = new Date();
  secondHand[0].style.transform = `rotate(${getDegree(currentTime.getSeconds())}deg)`; 
  minuteHand[0].style.transform = `rotate(${getDegree(currentTime.getMinutes())}deg)`; 
  hourHand[0].style.transform = `rotate(${getDegree(currentTime.getHours() %12 || 12,currentTime.getMinutes())}deg)`; 
  runDigitalTimer(currentTime);
},1000);

