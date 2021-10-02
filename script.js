// url = https://api.openweathermap.org/data/2.5/weather?q=london&appid=




let api= '4de445494bf430dd553ee1d7d4b8180a';


let searchBtn = document.querySelector('.searchBtn');
let weatherBox = document.querySelector('.weather');
let weatherData = document.querySelector('.weather-data');
let container = document.querySelector('.container');

let closeBtn = document.querySelector('.close');


    
closeBtn.onclick = ()=> {weatherBox.classList.remove('active')
container.classList.remove('container-active');
}

searchBtn.addEventListener('click', ()=>{
  
  let Inplocation = document.querySelector('.location').value;

  if(Inplocation == ''){
    Inplocation = "Lucknow";
    Inplocation.innerHTML = "Lucknow";
  }
  else{
    Inplocation = Inplocation;
  }

  let uiString;
  getWeather(Inplocation).then((data)=>{
    weatherBox.classList.add('active');
    weatherData.classList.add('show');
    container.classList.add('container-active');

    console.log(data);
    let currentTemp = Math.floor(data['main'].temp - 273.15);
    

      uiString = `
      <img src="http://openweathermap.org/img/wn/${data['weather'][0].icon}@2x.png" alt="">
      <p>${data.name}, ${data['sys'].country}</p>
      <p>${currentTemp}°C</p>
      <p>${data['weather'][0].main}</p>
      <p>Humidity: ${data['main'].humidity}%</p>`
    
      ;

    weatherData.innerHTML = uiString;

  })

})






async function getWeather(city){
  let Inpcity = city;
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Inpcity}&appid=${api}`);
  let preData = await response.json();
  return preData;
}


