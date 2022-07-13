
const APIKey=""


const fetchData =()=>{
    const searchInput=document.getElementById('input');
    const searchText = searchInput.value;
    searchInput.value='';
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&APPID=${APIKey}&units=metric`;
    fetch(url)
    .then(res=> res.json())
    .then(data=>displayWeather(data));
}
const setAttribute= (id,text)=>{
document.getElementById(id).innerText=text;
}

const displayWeather=(data)=>{
console.log(data)
setAttribute('city',`${data.name}`);
setAttribute('temp',`${data.main.temp}`);
setAttribute('condition',`${data.weather[0].main}`)
/////////////icon setting//////////
const url=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
setAttribute('icon',url);
}
