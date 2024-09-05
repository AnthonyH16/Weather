let locationWanted;
let fetchURL ;
let dataIWant
const searchForm = document.querySelector('.searchForm');
searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    locationWanted = document.querySelector('.location').value;
    fetchURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationWanted}?key=CAV64FEY3BMSS798QD5U53KA5`
    getWeather(fetchURL);        
})


async function getWeather(){
    const response = await fetch(fetchURL);
    const weatherData = await response.json();
    console.log(weatherData);
    dataIWant = weatherData.currentConditions;
    console.log(dataIWant);
    showData(dataIWant);
}


function showData(object){
    for (let key in object){       
        let currentWeather = document.querySelector('.currentWeather');
        currentWeather.innerHTML += `${key}: ${object[key]} `       
    }
}



