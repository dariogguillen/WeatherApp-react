import React from 'react'
import PropTypes from 'prop-types'
import WeatherTemperature from './WeatherTemperature'
import WeatherExtraInfo from './WeatherExtraInfo'
import './styles.css'

const WeatherData = ({ data }) => {
  const { temperature, weatherIcon, humidity, wind } = data
  return (
    <div className="weatherDataCont">
      <WeatherTemperature temperature={temperature} weatherIcon={weatherIcon} />
      <WeatherExtraInfo humidity={humidity} wind={wind} />
    </div>
  )
}

WeatherData.propTypes = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherIcon: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired
  })
}

export default WeatherData
