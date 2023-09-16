const inputValue = document.querySelector(".inputbox");
const SearchBtn =document.querySelector("#searchBtn");
const weatherImg=document.querySelector(".weatherImg");
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const not_found = document.querySelector('.not-found');
const weather_body = document.querySelector('.weatherBody');



 async function checkWeather(city){

     const Api = '10bef5039422f6e7406e83981cb2f79c';
     const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api}`;
     const weatherData = await fetch(`${url}`).then(response =>response.json());
     console.log (weatherData);

     if (weatherData.cod ==='404')
     {
       not_found.style.display='flex';
       weather_body.style.display='none';
       console.log("error");

     }
     else{

     not_found.style.display='none';
     weather_body.style.display='flex';

     temperature.innerHTML=`${ Math.round(weatherData.main.temp-273.15)}°C`;
     description.innerHTML=`${(weatherData.weather[0].description)}`;
     humidity.innerHTML=`${weatherData.main.humidity}%`;
     wind_speed.innerHTML =`${weatherData.wind.speed}Km/H`;

     switch(weatherData.weather[0].main)
     {
        case 'Clouds':
            weatherImg.src = "./cloud.png";
            break;
        case 'Clear':
           weatherImg.src = "./clear.png";
            break;
        case 'Rain':
           weatherImg.src = "./rain.png";
            break;
        case 'Mist':
           weatherImg.src = "./mist.png";
            break;
        case 'Snow':
           weatherImg.src = "./snow.png";
            break;

       }
     
    }

}

SearchBtn.addEventListener('click',()=>{
      checkWeather(inputValue.value);
})