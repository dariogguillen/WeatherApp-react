import moment from 'moment'
import 'moment/locale/es'
import {
  CLOUDY,
  SNOW,
  RAIN,
  SUN,
  THUNDER,
  DRIZZLE
} from '../constants/weathers'

const getWeatherIcon = id => {
  if (id < 300) {
    return THUNDER
  } else if (id < 400) {
    return DRIZZLE
  } else if (id < 600) {
    return RAIN
  } else if (id < 700) {
    return SNOW
  } else if (id === 800) {
    return SUN
  } else {
    return CLOUDY
  }
}

export const transformWeatherData = res => {
  // console.log(res);
  const data = {
    temperature: parseFloat((res.main.temp - 273.15).toFixed(1)),
    weatherIcon: getWeatherIcon(res.weather[0].id),
    humidity: res.main.humidity,
    wind: res.wind.speed
  }
  return data
}

export const transformForecastData = data => {
  const selection1 = data.list.filter(
    item =>
      moment
        .unix(item.dt)
        .utc()
        .hour() === 6 ||
      moment
        .unix(item.dt)
        .utc()
        .hour() === 12 ||
      moment
        .unix(item.dt)
        .utc()
        .hour() === 18
  )

  const selection2 = selection1.map(item => (
    {
      weekDay: moment.unix(item.dt).utc().format('ddd'),
      hour: moment.unix(item.dt).utc().hour(),
      data: transformWeatherData(item)
    }
  ))
  return selection2
}
