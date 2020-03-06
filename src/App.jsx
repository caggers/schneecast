import React, { Component } from 'react'
import { getData } from './util'
import Home from './Components/Home'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTable: null
    }
    this.setData()
  }

  setData = async () => {
    const snowReports = {
      Westendorf: await getData('snowreport', 222036).then(req => req.data),
      Kitzbuhl: await getData('snowreport', 222013).then(req => req.data),
      Emlau: await getData('snowreport', 222023).then(req => req.data),
      Saalbach: await getData('snowreport', 222018).then(req => req.data)
    }

    this.setState({
      snowReports,
    })
  }

  setActiveTable = e => {
    const value = e.target.value
    this.setState({ activeTable: value })
  }

  render() {
    const { activeTable, snowReports } = this.state
    return (
      <div>
        <Home
          setActiveTable={this.setActiveTable}
          activeTable={activeTable}
          snowReports={snowReports}
        />
      </div>
    )
  }
}
