import React from 'react'
import PropTypes from 'prop-types'
import WeatherLocation from './WeatherLocation'
import './styles.css'

const LocationList = ({ cities, onClickApp }) => {
  const strToComponent = cities =>
    cities.map(city => (
      <WeatherLocation
        onClickLocationList={() => onClickApp(city)}
        key={city}
        city={city}
      />
    ))

  return <div className="LocationListCont">{strToComponent(cities)}</div>
}

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onClickApp: PropTypes.func.isRequired
}

export default LocationList
