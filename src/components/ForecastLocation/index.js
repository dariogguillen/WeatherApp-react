import React from 'react'
import PropTypes from 'prop-types'
import WeatherData from '../WeatherLocation/WeatherData'

const ForecastLocation = ({ weekDay, hour, data }) => {
  return (
    <div>
      <h3>{`${weekDay.toUpperCase()} - ${hour}:00 hrs`}</h3>
      <WeatherData data={data} />
    </div>
  )
}

ForecastLocation.propTypes = {
  city: PropTypes.string.isRequired
}

export default ForecastLocation
