function updateTime(){

const time =document.getElementById('time');
const localTime=new Date().toLocaleTimeString();
time.innerHTML=`${localTime}`;
console.log("working")
}
setInterval(updateTime,1000)