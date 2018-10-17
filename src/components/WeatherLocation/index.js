import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Location from './Location'
import WeatherData from './WeatherData'
import { transformWeatherData } from '../../services'
import { WEATHER_URL, KEY } from '../../constants/config'
import Spinner from './Spinners'

import './styles.css'

class WeatherLocation extends Component {
  constructor(...props) {
    super(...props)
    this.state = {
      city: this.props.city,
      data: null
    }
    this.handleData = this.handleData.bind(this)
  }

  handleData() {
    const CITY = this.state.city
    const WEATHER_API = `${WEATHER_URL}?q=${CITY}&appid=${KEY}`
    fetch(WEATHER_API)
      .then(res => res.json())
      .then(res => {
        const data = transformWeatherData(res)
        return data
      })
      .then(data => this.setState({ data }))
      .catch(err => console.log(err))
  }

  componentWillMount() {
    this.handleData()
  }

  render() {
    const { city, data } = this.state
    return (
      <div
        onClick={this.props.onClickLocationList}
        className="weatherLocationCont"
      >
        <Location city={city} />
        {data ? (
          <WeatherData data={data} />
        ) : (
          <div className="weatherDataCont">
            <Spinner />
          </div>
        )}
      </div>
    )
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onClickLocationList: PropTypes.func.isRequired
}

export default WeatherLocation
