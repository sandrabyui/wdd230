const apiURL = "//api.openweathermap.org/data/2.5/weather?q=fairbanks&units=imperial&appid=1aa89f37d116175977bfb29a44e97e60";



fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp').textContent = jsObject.main.temp;

    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
    const sped = jsObject.wind.speed;
        document.querySelector("#speed").textContent = sped;
    });
  