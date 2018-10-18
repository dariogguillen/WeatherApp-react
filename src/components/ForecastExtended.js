import React from 'react'
import PropTypes from 'prop-types'
import ForecastLoaction from './ForecastLocation'
import Spinner from '../components/WeatherLocation/Spinners'

const renderForecastDay = (city, data) => {
  return data.map(item => (
    <ForecastLoaction
      city={city}
      key={`${item.weekDay}${item.hour}`}
      weekDay={item.weekDay}
      hour={item.hour}
      data={item.data}
    />
  ))
}
const ForecastExtended = ({ city, forecastData }) => {
    return (
      <div>
        <h2 className="forecastHeading">{city}</h2>
        {forecastData ? (
          renderForecastDay(city, forecastData)
        ) : (
          <Spinner />
        )}
      </div>
    )
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array
}

export default ForecastExtended
