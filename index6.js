let now = new Date();

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let days = daysOfWeek[now.getDay()];
let mins = now.getMinutes();
let secs = now.getSeconds();
let p = document.querySelector("p");
p.innerHTML = `${days} ${mins}:${secs}`;


function showTemp(response){
    let country = document.querySelector('.country');
    country.innerHTML = `${response.data.name}`;
    let temp = document.querySelector('.temp1');
    temp.innerHTML = `${response.data.main.temp}`;
    let prep = document.querySelector('#prep');
    prep.innerHTML = `${response.data.main.pressure}`;
    let wind = document.querySelector('#wind');
    wind.innerHTML = `${response.data.wind.speed}`;
    let descrip = document.querySelector('#des');
    descrip.innerHTML = `${response.data.weather[0].description}`;
    console.log(response.data);
} 

function searchCity(city){
    let apiKey = '8c48afa47a9a9c24f3500c7039d50aaa';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metrics`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemp);
}

function handleCity(){
    let searchInput = document.querySelector('#search').value;
    searchCity(searchInput);
}


function searchPosition(position){
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metrics`;
    let apiKey = '8c48afa47a9a9c24f3500c7039d50aaa';
    axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemp);
}
function getPosition(){
   navigator.geolocation.getCurrentPosition(searchPosition);
}

let button = document.querySelector('#currentbtn');
    button.addEventListener("click",  getPosition);

let select = document.querySelector('#searchbtn');
select.addEventListener("click" , handleCity);
