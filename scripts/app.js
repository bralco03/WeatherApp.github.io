const cityForm = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const containerH1 = document.querySelector('.container h1');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {
    const cityDet = data.cityDet;
    const weather = data.weather;

    //update details template
    details.innerHTML = `
    <div class="text-muted text-uppercase text-center details">
    <h5 class="my-3">${cityDet.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-3>
        <span style="display:block;" class="my-4">${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `;
    //Update night and day icons--------------------------
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);
    let timeSrc = null;
    if(weather.IsDayTime){timeSrc = 'img/day.svg';} else {timeSrc = 'img/night.svg';}

    time.setAttribute('src', timeSrc.trim());

    //remove d-none class if correct---------------------------
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
} 

const updateCity = async (city) => {
    const cityDet = await getCity(city);
    const weather = await getWeather(cityDet.Key);

    return {
        cityDet: cityDet,
        weather: weather
    };
}

cityForm.addEventListener('submit', e =>{
    //prevent default refresh
    e.preventDefault();
    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();
    //update UI with new city
    updateCity(city)
       .then(data => updateUI(data))
       .catch(err => console.log(err));
    containerH1.classList.add('d-none');
    
});

    if(localStorage.getItem('city')){
        updateCity(localStorage.getItem('city'))
           .then(data => updateUI(data))
           .catch(err => console.log(err));
    }