let locationWanted;
let fetchURL ;
let dataIWant
const errorMessage = document.querySelector('.errorMessage');
const searchForm = document.querySelector('.searchForm');
searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    locationWanted = document.querySelector('.location').value;
    fetchURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationWanted}?key=CAV64FEY3BMSS798QD5U53KA5`
    getWeather(fetchURL);        
})


async function getWeather(){
    try{
    const response = await fetch(fetchURL);
    const weatherData = await response.json();
    console.log(weatherData);
    dataIWant = weatherData.currentConditions;
    console.log(dataIWant);
    showData(dataIWant);
} catch (error) {
    console.error("Error fetching weather data: ", error);
    errorMessage.style.display = 'block';
}

}


function showData(object){
    for (let key in object){       
        let currentWeather = document.querySelector('.currentWeather');
        currentWeather.innerHTML += `${key}: ${object[key]} `       
    }
}



