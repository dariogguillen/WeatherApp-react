import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import LocationList from './components/LocationList'
import ForecastExtende from './components/ForecastExtended'
import Spinner from './components/WeatherLocation/Spinners'
import './App.css'

const CITIES = [
  'Mexico City',
  'Buenos Aires',
  'New York',
  'London',
  'Paris',
  'Tokyo',
  'Russia'
]

class App extends Component {
  constructor() {
    super()
    this.state = {
      city: null
    }
    this.handleOnClickApp = this.handleOnClickApp.bind(this)
  }
  handleOnClickApp(city) {
    this.setState({
      city
    })
  }

  render() {
    const { city } = this.state
    return (
      <div className="App">
        <Grid>
          <Row>
            <Col xs={12}>
              <h1 className="heading">WeatherApp</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={6}>
              <LocationList
                onClickApp={this.handleOnClickApp}
                cities={CITIES}
              />
            </Col>
            <Col xs={12} lg={6}>
              <div className="rightContainer">
                {!city ? (
                  <div>
                    <h2 className="forecastHeading">Selecciona una Ciudad</h2>
                    <div>
                      <Spinner />
                    </div>
                  </div>
                ) : (
                  <ForecastExtende city={city} />
                )}
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default App
