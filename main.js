// Clock Function
const clock = document.getElementById('clock'); //display clock
    function updateTime(){
        const now = moment();
        //utcOffset updates the timezone, but the momentjs doc appears to use numbers to update the zone; ie denver: -6.00, charlotte: -4.00, 
        //site to find utc: https://24timezones.com/Los-Angeles/time
        const humanReadable = now.utcOffset(-4.00).format("MMMM Do YYYY, h:mm:ss");

        clock.textContent=humanReadable;
    }
    setInterval(updateTime, 1000); //updates every second
    updateTime();

//getting classes from html
var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var temp = document.querySelector('.temp');
var city = document.querySelector('.city');
var desc = document.querySelector('.desc');
var icon = document.querySelector('.icon')

//fetch data with button click
button.addEventListener('click', function(){
//fetch data by zipcode
    fetch('https://api.openweathermap.org/data/2.5/weather?zip=' + inputValue.value + ',us' + '&appid=b278274f83cd4f81b715ce235212c73c')
.then(response => response.json())
.then(data=>
{
    //define each value as related to object
    var cityValue = data['name'];
    var tempValue = (data['main']['temp'])=(Math.floor(data['main']['temp'])-273) + " ° Celsius" //convert temp from kelvin to farenheit
    var descValue =data['weather'][0]['description'];

    //print values to HTML
    city.innerHTML=cityValue;
    temp.innerHTML=tempValue;
    desc.innerHTML=descValue;
    console.log(data);
})


.catch(err => alert("Not a valid Zipcode!"))
})

