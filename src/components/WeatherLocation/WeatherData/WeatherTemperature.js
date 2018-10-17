import React from 'react'
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types'
import './styles.css'

const WeatherTemperature = ({ temperature, weatherIcon }) => {
  return (
    <div className="weatherTemperatureCont">
      <WeatherIcons className="wicon" name={weatherIcon} size="4x" />
      <span className="temperature">
        {`${temperature}`}
        <span className="temperatureIcon">℃</span>
      </span>
    </div>
  )
}

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherIcon: PropTypes.string
}

export default WeatherTemperature
