import { SET_CITY, SET_FORECAST_DATA } from '../constants'
import { FORECAST_URL, KEY } from '../../constants/config'
import { transformForecastData } from '../../services'

const setCity = payload => {
  return { type: SET_CITY, payload: payload }
}
const setForecastData = payload => {
  return {
    type: SET_FORECAST_DATA,
    payload
  }
}

export const setSelectedCity = payload => {
  return dispatch => {
    const FORECAST_API = `${FORECAST_URL}?q=${payload}&appid=${KEY}`

    dispatch(setCity(payload))

    return fetch(FORECAST_API)
      .then(res => res.json())
      .then(data => {
        const forecastData = transformForecastData(data)

        dispatch(setForecastData({ city: payload, forecastData }))
      })
      .catch(err => console.log(err))
  }
}
