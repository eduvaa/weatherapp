import './App.css';
import {useEffect, useState} from 'react'
import Weather from './components/Weather';

function App() {
const [lat, setLat] = useState(0);
const [lng, setLng] = useState(0);

useEffect(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    }, (error) => {
      alert(error);
    })
  }
  else {
    alert('Your browser does not support geolocation!')
  }

  }, [])

  return (
  <div className="content">
  <h3>Your position is </h3>
  <p>
  Position:
  {lat.toFixed(3)},
  {lng.toFixed(3)}
  </p>
  <Weather lat={lat} lng={lng}/>
 </div>

  );
  }
  export default App;