const clock = document.getElementById('clock');
    function updateTime(){
        const now = moment();
        const humanReadable = now.format("MMMM Do YYYY, h:mm:ss a");

        clock.textContent=humanReadable;
    }
    setInterval(updateTime, 1000);
    updateTime();

// const showTime= function ()
// {
//   // instantiate a moment object
//   var NowMoment = moment();
  
//   // instantiate a JavaScript Date object
//   var NowDate = new Date();
  
//   // display value of moment object in #displayMoment div

//   var eDisplayMoment = document.getElementById('displayMoment');
//   eDisplayMoment.innerHTML = NowMoment;
  
//   // display value of Date object in #displayJsDate div
//   var eDisplayDate = document.getElementById('displayJsDate');
//   eDisplayDate.innerHTML = NowDate;
// };
// const m = moment();
//     console.log(m.format("h:mm:ss a"));
// var Moment = require('moment');

// var a = new Moment();
// console.log(a.format('h:mm:ss a')); //logs the current time

//call open weather data
// var api = 'https://api.openweathermap.org/data/2.5/weather?zip=';
// var zipCode = "28209,us";
// var apiKey = "&appid=b278274f83cd4f81b715ce235212c73c";
// //var units = '&units=metric';

// function setup(){
// var button = select('#submit');
// button.mousePressed(weather);
// input = select("zipcode")
// ;}

// function weather(){
// //var url=https://api.openweathermap.org/data/2.5/weather?zip=28209,us&appid=b278274f83cd4f81b715ce235212c73c
// var url = api + zipCode + apiKey + units;
// //var url = api + input.value() + apiKey + units;
// loadJSON(url, gotData)
// }

// function getData(data){
//     weather = data;
// }