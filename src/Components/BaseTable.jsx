import React, { Component } from 'react'

import { Table } from 'semantic-ui-react'
import _ from 'lodash'

class ResortTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      column: null,
      direction: null,
      data: this.props.data
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState({
        data: nextProps.data
      })
    }
  }

  handleSort = clickedColumn => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending'
      })

      return
    }

    this.setState({
      forecast: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending'
    })
  }

  render() {
    const { column, data, direction } = this.state
    const { name } = this.props
    return (
      <div>
        <Table sortable celled fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="7">{name}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === 'temp_c' ? direction : null}
                onClick={() => this.handleSort('temp_c')}
              >
                Temp °C
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'feelslike_c' ? direction : null}
                onClick={() => this.handleSort('feelslike_c')}
              >
                Feels Like
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'freshsnow_cm' ? direction : null}
                onClick={() => this.handleSort('freshsnow_cm')}
              >
                Fresh Snow (cm)
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'winddir_compass' ? direction : null}
                onClick={() => this.handleSort('winddir_compass')}
              >
                Wind Direction
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'windspd_kts' ? direction : null}
                onClick={() => this.handleSort('windspd_kts')}
              >
                Wind Speed (knots)
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'windgst_kts' ? direction : null}
                onClick={() => this.handleSort('windgst_kts')}
              >
                Wind Gust (knots)
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'wx_desc' ? direction : null}
                onClick={() => this.handleSort('wx_desc')}
              >
                Weather Desc.
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {_.map(
              data,
              (
                {
                  temp_c,
                  feelslike_c,
                  freshsnow_cm,
                  winddir_compass,
                  windspd_kts,
                  windgst_kts,
                  wx_desc
                },
                i
              ) => (
                <Table.Row key={i}>
                  <Table.Cell>{temp_c} °C</Table.Cell>
                  <Table.Cell>{feelslike_c} °C</Table.Cell>
                  <Table.Cell>{freshsnow_cm} cm</Table.Cell>
                  <Table.Cell>{winddir_compass}</Table.Cell>
                  <Table.Cell>{windspd_kts}</Table.Cell>
                  <Table.Cell>{windgst_kts}</Table.Cell>
                  <Table.Cell>{wx_desc}</Table.Cell>
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
