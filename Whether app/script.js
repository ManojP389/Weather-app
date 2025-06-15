const apiKey="c2ca33fc6c4a8e84ca1e2ef40c112f8b";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
//getting city name as input from user
const searchBox = document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
//const for weathericon updation
const weatherIcon = document.querySelector(".weather-icon")



// fecthing the details into data variable from apiUrl and apiKey
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{

         var data = await response.json();
    
    //to update the details
     
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";


    //to update the weather icon
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src="images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="images/mist.png";
    }

    //code for showing weather details when user entered city name and clicked search icon 
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }
   
}       



//when user click button it should send city name from inputbox to checkweather function
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
