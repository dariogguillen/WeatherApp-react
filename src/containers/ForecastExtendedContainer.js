import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ForecastExtended from '../components/ForecastExtended'
import Spinner from '../components/WeatherLocation/Spinners'


export class ForecastExtendedContainer extends Component {
  render() {
    const { city, forecastData } = this.props
    return (
      <React.Fragment>
        {!city ? (
          <div>
            <h2 className="forecastHeading">Selecciona una Ciudad</h2>
            <div>
              <Spinner />
            </div>
          </div>
        ) : (
          <ForecastExtended city={city} forecastData={forecastData} />
        )}
      </React.Fragment>
    )
  }
}

ForecastExtendedContainer.propTypes = {
  city: PropTypes.string
}

const mapStateToProps = ({ city, cities }) => ({
  city,
  forecastData: cities[city] && cities[city].forecastData
})

export default connect(
  mapStateToProps,
  null
)(ForecastExtendedContainer)
