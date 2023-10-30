setInterval(()=>{
    const time = document.querySelector(".display #time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let millisec = Math.floor(date.getMilliseconds() / 10).toFixed(0);

    let day_night = "AM";
    if(hours > 12){
      day_night = "PM";
      hours = hours - 12;
    }
    if(seconds < 10){
      seconds = "0" + seconds;
    }
    if(millisec < 10){
      millisec = "0" + millisec;
    }
    if(minutes < 10){
      minutes = "0" + minutes;
    }
    if(hours < 10){
      hours = "0" + hours;
    }
    time.textContent = hours + ":" + minutes + ":" + seconds + ":" + millisec + " " + day_night;
  });
