import axios from 'axios'

const API = 'http://api.weatherunlocked.com/api'
const APP_ID = process.env.REACT_APP_WEATHER_APP_CODE
const APP_KEY = process.env.REACT_APP_WEATHER_API_KEY

const HEADERS = {
  Accept: 'application/json'
}

export function getData(type, resort_id) {
  const URL = `${API}/${type}/${resort_id}?`
  return axios.get(URL, {
    headers: HEADERS,
    params: {
      app_id: APP_ID,
      app_key: APP_KEY
    }
  })
}

export function getForecast(resort_id, num_days, interval) {
  const URL = `${API}/resortforecast/${resort_id}`
  return axios.get(URL, {
    headers: HEADERS,
    params: {
      num_of_days: num_days,
      app_id: APP_ID,
      app_key: APP_KEY
    }
  })
}

export const OPTIONS = [
  {
    text: 'Westendorf',
    value: 'Westendorf',
    id: 222036
  },
  {
    text: 'Kitzbuhl',
    value: 'Kitzbuhl',
    id: 222013
  },
  {
    text: 'Ellmau',
    value: 'Ellmau',
    id: 222023
  },
  {
    text: 'Jochberg',
    value: 'Jochberg',
    id: 222018
  },
  {
    text: 'Saalbach',
    value: 'Saalbach',
    id: 54884231
  }
]

export function getResortForecastToday(place) {
  return getForecast(place, 1, 6).then(req => req.data)
}

export function getDate() {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  const newDate = new Date()
  const date = newDate.getDate()
  const month = newDate.getMonth()
  const year = newDate.getFullYear()
  const today = days[newDate.getDay()]
  return `${today} ${date}/${month}/${year}`
}

export function getLevel(data, level) {
  let arr = [];
  data.forecast.forEach(item => {
    arr.push(item[level])
  })
  return arr
}