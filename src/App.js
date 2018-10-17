import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import LocationListContainer from './containers/LocationListContainer'
import ForecastExtendedContainer from './containers/ForecastExtendedContainer'

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

  render() {
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
              <LocationListContainer cities={CITIES} />
            </Col>
            <Col xs={12} lg={6}>
              <div className="rightContainer">
                <ForecastExtendedContainer />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default App
