import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import LocationList from '../components/LocationList'

import { setSelectedCity } from '../store/actions'

export class LocationListContainer extends Component {
  handleOnClickApp = city => {
    this.props.setCity(city)
  }

  render() {
    const { cities } = this.props
    return <LocationList onClickApp={this.handleOnClickApp} cities={cities} />
  }
}

LocationListContainer.propTypes = {
  cities: PropTypes.array.isRequired,
  setCity: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    setCity: city => dispatch(setSelectedCity(city))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(LocationListContainer)
