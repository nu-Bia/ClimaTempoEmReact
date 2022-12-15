import React, { fragment, useState,useEffect}from 'react';
import './App.css';
import { Fragment } from 'react';
import axios from 'axios';

function Hello() {
const [location, setLocation]=useState(false);
/*Guardar os dados da api p/ dps exibir */
const [weather, setWeather]=useState(false);

/*responsavel por chamar a Api */
let getWeather = async (lat, long)=> {
  let res= await axios.get ("http://api.openweathermap.org/data/2.5/weather",{
params:{
  lat:lat,
  lon:long,
  appid:process.env.REACT_APP_OPEN_WHEATHER_KEY,
  lang:'pt',
  units:'metric'

}
  });
  setWeather(res.data)
}


useEffect(()=>{
  /*pedir autorização de localização */
  navigator.geolocation.getCurrentPosition ((position) =>  {
    getWeather(position.coords.latitude, position.coords.longitude);
    setLocation(true)
  })
}, [])

if (location==false) {
  return(
    <fragment>
      Por favor habilite a localização para continuar
    </fragment>
  )
}else if (weather==false) {
  return(
    <fragment> Estamos processando, por favor aguarde...
      
    </fragment>
  )
  
}
  
} else {

return (
  <Fragment>
    <h3>Clima nas suas cordenadas :({weather['weather'][0]['description']})</h3>
    <hr/>
    <ul>
      <li>Tempertaura Atual:{weather['main']['tep']}o</li>
      <li>Tempertaura máxima:{weather['main']['temp_max']}o</li>
      <li>Tempertaura miníma:{weather['main']['temp_min']}o</li>
      <li>Pressão vs hpa :{weather['main']['pressure']}hpa</li>
      <li>Umidade:{weather['main']['humidity']}%</li>
    </ul>
  </Fragment>

);
}
}

export default Hello;
