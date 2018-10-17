import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ForecastExtended from '../components/ForecastExtended'
import Spinner from '../components/WeatherLocation/Spinners'


export class ForecastExtendedContainer extends Component {
  render() {
    return (
      <React.Fragment>
        {!this.props.city ? (
          <div>
            <h2 className="forecastHeading">Selecciona una Ciudad</h2>
            <div>
              <Spinner />
            </div>
          </div>
        ) : (
          <ForecastExtended city={this.props.city} />
        )}
      </React.Fragment>
    )
  }
}

ForecastExtendedContainer.propTypes = {
  city: PropTypes.string
}

const mapStateToProps = ({ city }) => ({ city })

export default connect(
  mapStateToProps,
  null
)(ForecastExtendedContainer)
