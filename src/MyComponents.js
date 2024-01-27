import React, { useState } from "react";
import { cityToPincode, fetchWeatherData } from "./pincodes";

function Mycomponent() {
  const [option, setOption] = useState("");
  const [apiData, setApiData] = useState(null);

  const handleOption = (event) => {
    setOption(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const pincode = cityToPincode[option];
    try {
      const data = await fetchWeatherData(pincode);
      setApiData(data);
    } catch (error) {
      // Handle error if needed
    }
  };

  return (
    <div id="dropdown">
      <h2>Select city whose weather do you want {option}</h2>
      <form onSubmit={handleSubmit}>
        <select onChange={handleOption} value={option}>
          {Object.keys(cityToPincode).map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <input type="submit" value="Submit" />
      </form>

      {apiData && (
        <div>
          <h2>Weather Data for {apiData.data[0].city_name}</h2>
          <p>Temperature: {apiData.data[0].temp}&deg;C</p>
          <p>Weather: {apiData.data[0].weather.description}</p>
          <p>Wind Speed: {apiData.data[0].wind_spd} m/s</p>
          <p>Humidity: {apiData.data[0].rh}%</p>
          {/* Add more relevant information as needed */}
        </div>
      )}
    </div>
  );
}

export default Mycomponent;
