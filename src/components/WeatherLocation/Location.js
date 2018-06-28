import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const Location = ({ city }) => (
  <h1 className="location">{city}</h1>
)

Location.propTypes = {
  city: PropTypes.string.isRequired
}

export default Location
