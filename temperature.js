//console.log('hello');

const searchLocation = () => {
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;
    searchField.value = '';

    //console.log(searchValue);

    const url = ` https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=548796b88868abee2201c9d25d424d50 `
    fetch(url)
        .then(res => res.json())
        .then(data => weatherUpdate(data));
}
//searchLocation();

const weatherUpdate = (temperatur) => {
    //. console.log(temperatur);
    // console.log(data.name);
    //    
    let tem = `${temperatur.main.temp - 273.15}`
    let result = parseFloat(tem).toFixed(2);
    // console.log(data.weather[0].description);

    const div = document.getElementById('weather-update');

    div.innerHTML = `
    <img src="https://openweathermap.org/img/wn/${temperatur.weather[0].icon}.png" alt="">
       <h1>${temperatur.name}</h1>
       <h4>${temperatur.sys.country}</h4>
       <h3><span>${result}</span>&deg;C</h3>
       <h1 class="lead">${temperatur.weather[0].description}</h1>
    `

}