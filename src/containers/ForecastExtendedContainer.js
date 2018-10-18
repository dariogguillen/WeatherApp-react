import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ForecastExtended from '../components/ForecastExtended'

import { getForecastDataFromCities, getCity } from '../store/reducers'

export class ForecastExtendedContainer extends Component {
  render() {
    const { city, forecastData } = this.props
    return <ForecastExtended city={city} forecastData={forecastData} />
  }
}

ForecastExtendedContainer.propTypes = {
  city: PropTypes.string
}

const mapStateToProps = state => ({
  city: getCity(state),
  forecastData: getForecastDataFromCities(state)
})

export default connect(
  mapStateToProps,
  null
)(ForecastExtendedContainer)
