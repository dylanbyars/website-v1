import React from 'react';

export const WeatherDisplay = ({ data }) => {

  let {
    location,
    coord,
    temp,
    weather,
    icon
  } = data

  const celciusToFahrenheit = (num) => {
    return num * (9 / 5) + 32
  }

  const tidyNumber = (num) => {
    return Math.round(num)
  }

  const tempMetric = tidyNumber(temp)

  const tempImperial = tidyNumber(celciusToFahrenheit(temp))

  return (
    <div className="container__weather-display">
      <div className="weather-display__location">{location}</div>
      <div className="weather-display__temps">
        <div className="weather-display__temps--metric">{tempMetric} &deg;C</div>
        <div className="weather-display__temps--imperial">{tempImperial} &deg;F</div>
      </div>
      <div className="weather-display__description">{weather}</div>
      <img className="weather-display__icon" src={icon} alt={weather}/>
    </div>
  )
}