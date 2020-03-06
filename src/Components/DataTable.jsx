import { Divider, Dropdown } from 'semantic-ui-react'
import { OPTIONS, getDate } from '../util'
import React, { Component } from 'react'

import BaseTable from './BaseTable'
import ResortTable from './ResortTable'
import SnowTable from './SnowTable'

class DataTable extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillReceiveProps(nextProps) {
    const { snowReports, resortForecast } = nextProps

    if (snowReports !== this.props.snowReports) {
      const snowArray = Object.values(snowReports)
      this.setState({ snowReports: snowArray })
    }

    if (resortForecast !== this.props.resortForecast) {
      this.setState({ resortForecast })
    }
  }

  handleSelectResort = (e, val) => {
    this.props.handleSelectResort(val.value)
    const resortName = val.value

    const forecastDate = getDate()

    this.setState({ resortSelected: true, resortName, forecastDate })
  }

  render() {
    const { activeTable, resortForecast, base, mid, upper } = this.props
    const { snowReports, resortName, forecastDate } = this.state
    return (
      <div>
        {activeTable && activeTable === 'snowReport' && (
          <SnowTable data={snowReports} />
        )}
        {activeTable && activeTable === 'resortForecast' && (
          <div>
            <Dropdown
              options={OPTIONS}
              placeholder="Select a Spot"
              fluid
              selection
              onChange={(e, val) => this.handleSelectResort(e, val)}
            />
            <Divider horizontal />
          </div>
        )}

        {resortForecast !== undefined && activeTable === 'resortForecast' && (
          <div>
            <ResortTable
              data={resortForecast}
              resortName={resortName}
              forecastDate={forecastDate}
              showUpperTable={e => this.showUpperTable(e)}
            />
            <Divider horizontal />
            <BaseTable data={base} name="Bottom of the Mountain" />
            <Divider horizontal />
            <BaseTable data={mid} name="Middle Station" />
            <Divider horizontal />
            <BaseTable data={upper} name="Top of the Mountain" />
            <Divider horizontal />
          </div>
        )}
      </div>
    )
  }
}

export default DataTable
