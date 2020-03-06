import React, { Component } from 'react'

import { Table } from 'semantic-ui-react'
import _ from 'lodash'

class ResortTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      column: null,
      direction: null,
      data: this.props.data,
      forecast: this.props.data.forecast
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState({
        data: nextProps.data,
        forecast: nextProps.data.forecast
      })
    }
  }

  handleSort = clickedColumn => {
    const { column, forecast, direction } = this.state
    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        forecast: _.sortBy(forecast, [clickedColumn]),
        direction: 'ascending'
      })
      return
    }
    this.setState({
      forecast: forecast.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending'
    })
  }

  render() {
    const { column, forecast, direction } = this.state
    const { resortName, forecastDate } = this.props
    return (
      <div>
        <Table sortable celled fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="6">
                {resortName} Forecast for {forecastDate}{' '}
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === 'time' ? direction : null}
                onClick={() => this.handleSort('time')}
              >
                Time
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'frzglvl_m' ? direction : null}
                onClick={() => this.handleSort('frzglvl_m')}
              >
                Freezing Level (m)
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'rain_mm' ? direction : null}
                onClick={() => this.handleSort('newsnow_cm')}
              >
                Rain (mm)
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'snow_mm' ? direction : null}
                onClick={() => this.handleSort('snow_mm')}
              >
                Snow (mm)
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'totalcloud_pct' ? direction : null}
                onClick={() => this.handleSort('totalcloud_pct')}
              >
                Total Cloud Cover
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'vis_km' ? direction : null}
                onClick={() => this.handleSort('vis_km')}
              >
                Visibility (km)
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {_.map(
              forecast,
              (
                { time, frzglvl_m, rain_mm, snow_mm, totalcloud_pct, vis_km },
                i
              ) => (
                <Table.Row key={i}>
                  <Table.Cell>{time}</Table.Cell>
                  <Table.Cell>{frzglvl_m} m</Table.Cell>
                  <Table.Cell>{rain_mm} mm</Table.Cell>
                  <Table.Cell>{snow_mm} mm</Table.Cell>
                  <Table.Cell>{totalcloud_pct} %</Table.Cell>
                  <Table.Cell>{vis_km} km</Table.Cell>
                </Table.Row>
              )
            )}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default ResortTable
