import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ForecastLoaction from './ForecastLocation'
import Spinner from '../components/WeatherLocation/Spinners'
import { FORECAST_URL, KEY } from '../constants/config'
import { transformForecastData } from '../services'

class ForecastExtended extends Component {
  constructor() {
    super()
    this.state = {
      forecastData: null
    }
    this.handleData = this.handleData.bind(this)
    // this.renderForecastDay = this.renderForecastDay.bind(this)
  }

  handleData(city) {
    const FORECAST_API = `${FORECAST_URL}?q=${city}&appid=${KEY}`
    fetch(FORECAST_API)
      .then(res => res.json())
      .then(res => {
        const dataTransform = transformForecastData(res)
        this.setState({
          forecastData: dataTransform
        })
      })
      .catch(err => console.log(err))
  }

  renderForecastDay(city, data) {
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

  componentDidMount() {
    this.handleData(this.props.city)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.city !== this.props.city) {
      this.setState({
        forecastData: null
      })
      this.handleData(nextProps.city)
    }
  }

  render() {
    const { city } = this.props
    const { forecastData } = this.state
    return (
      <div>
        <h2 className="forecastHeading">{city}</h2>
        {forecastData ? (
          this.renderForecastDay(city, forecastData)
        ) : (
          <Spinner />
        )}
      </div>
    )
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired
}

export default ForecastExtended
