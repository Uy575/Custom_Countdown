const input = document.getElementById("inputForm");
const datepicker = document.getElementById("datePicker");
const cd = document.getElementById("Countdown");
const FormData = document.getElementById("form");
const reset = document.getElementById("reset");
const title = document.getElementById("title");
const timerSpans = document.querySelectorAll("span");
const cc = document.getElementById('countdownCompletion');
const setAgain = document.getElementById('setAgain');

let setid = '';

let date = new Date().toISOString().split("T")[0];
datepicker.setAttribute("min", date);

const sec = 1000;
const min = sec * 60;
const hours = min * 60;
const day = hours * 24;
const year = day * 365;

function formsubmitted(e) {
  e.preventDefault();
  if (title.value === "" || !datepicker.value) {
    alert("fill out field first");
  }
  else {
    let counterValue = Date;
    console.log(counterValue);

    counterValue = new Date(datepicker.value).getTime();

   setid =  setInterval(() => {
     let today = new Date().getTime();
     let distance = counterValue - today;
      let tareekh = Math.floor(distance / day);
      let ghantay = Math.floor((distance % day) / hours);
      let minute = Math.floor((distance % hours) / min);
      let lamhy = Math.floor((distance % min) / sec);
      timerSpans[0].textContent = `${tareekh}`;
      timerSpans[1].textContent = `${ghantay}`;
      timerSpans[2].textContent = `${minute}`;
      timerSpans[3].textContent = `${lamhy}`;
      console.log(tareekh, ghantay, minute, lamhy);

      input.hidden = true;
      cd.hidden = false;

      if(distance < 0){
        clearInterval(setid);
        cd.hidden = true;
        cc.hidden = false;
  
      }

    }, sec);

  }
}

function resetting() {
  input.hidden = false;
  cd.hidden = true;
  title.value = "";
  datepicker.value = "";
  clearInterval(setid);
}

function settingAgain(){
    input.hidden = false;
    cc.hidden = true;
}
reset.addEventListener("click", resetting);
FormData.addEventListener("submit", formsubmitted);
setAgain.addEventListener('click', settingAgain);
