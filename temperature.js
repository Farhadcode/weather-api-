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

const weatherUpdate = (data) => {
    console.log(data);
    // console.log(data.name);
    //    
    let tem = `${data.main.temp - 273.15}`
    let temparatur = parseFloat(tem).toFixed(2);
    // console.log(data.weather[0].description);

    const div = document.getElementById('weather-update');

    div.innerHTML = `
       <h1>${data.name}</h1>
       <h4>${data.sys.country}</h4>
       <h3><span>${temparatur}</span>&deg;C</h3>
       <h1 class="lead">${data.weather[0].description}</h1>
    `

}