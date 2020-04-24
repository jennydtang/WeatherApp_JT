//getting classes from html
var button = document.querySelector(".button");
var inputValue = document.querySelector(".inputValue");
//Add Keyup function
// $(".inputValue").keyup(function () {
//   if (event.keyCode === 13) {
//     $(".inputValue").append($(".inputValue").val());
//     $(this).val(" ");
//   }
// });
var temp = document.querySelector(".temp");
var city = document.querySelector(".city");
var desc = document.querySelector(".desc");
var icon = document.querySelector(".icon");
var timezone =
  //fetch data with button click
  button.addEventListener("click", function () {
    //fetch data by zipcode
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?zip=" +
        inputValue.value +
        ",us" +
        "&appid=b278274f83cd4f81b715ce235212c73c"
    )
      .then((response) => response.json())
      .then((data) => {
        //define each value as related to object
        var cityValue = data.name;
        var tempValue = (data["main"]["temp"] =
          (Math.floor(data["main"]["temp"] - 273.15) * 9) / 5 + 32 + " °F"); //convert temp from kelvin to farenheit
        var descValue = data["weather"][0]["description"];
        var timezone = data.timezone;
        //place clock function within the scope to call timezone
        const clock = document.getElementById("clock"); //display clock

        updateTime = () => {
          //set interval inside time function
          setInterval(() => {
            const now = moment()
              .utcOffset(timezone / 60) //divide by 60 to convert min to hrs
              .format("MMMM Do YYYY, h:mm a");
            clock.textContent = now;
          }, 1000);
        };
        //print values to HTML
        city.innerHTML = cityValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
        console.log(data);
        updateTime();
      })

      .catch((err) => alert("Not a valid Zipcode!"));
  });
