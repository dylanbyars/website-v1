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
    <div className="display__container">
      <div className="display__location">{location}</div>
      <div className="display__temps">
        <div className="display__temps--metric">{tempMetric} &deg;C</div>
        <div className="display__temps--imperial">{tempImperial} &deg;F</div>
      </div>
      <div className="display__description">{weather}</div>
      <img className="display__icon" src={icon} alt={weather}/>
    </div>
  )
}