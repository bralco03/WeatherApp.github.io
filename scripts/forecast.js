const key = 'PkR4wi25IzD1IxA2QvRVly4Gl0prSrN6';

//--------------------- GET WEATHER

const getWeather = async (id) => {
    const baseURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`
    const response = await fetch(baseURL + query)
    const data = await response.json();

    return data[0];
};

//-----------------Get city function   
const getCity = async (city) => {
    const baseURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(baseURL + query);
    const data = await response.json();

    return data[0];
};

// getCity('manchester')
//    .then(data => {
//        return getWeather(data.Key);
//     }).then(data => {
//        console.log(data);
//     }).catch(err => console.log(err)); 






    
