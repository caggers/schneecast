import React, { Component } from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import { Table } from 'semantic-ui-react'

const SubTitle = styled.h2`
  text-align: center;
  font-size: 2.5em;
  color: #3f51b5;
`
class SnowTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      column: null,
      data: this.props.data,
      direction: null
    }
  }

  handleSort = clickedColumn => () => {
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
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending'
    })
  }

  render() {
    const { column, data, direction } = this.state
    console.log(data)
    return (
      <div>
        <Table sortable celled fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === 'resortname' ? direction : null}
                onClick={this.handleSort('resortname')}
              >
                Resort Name
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'conditions' ? direction : null}
                onClick={this.handleSort('conditions')}
              >
                Conditions
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'newsnow_cm' ? direction : null}
                onClick={this.handleSort('newsnow_cm')}
              >
                New Snow (cm)
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'lastsnow' ? direction : null}
                onClick={this.handleSort('lastsnow')}
              >
                Last Snow
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'uppersnow_cm' ? direction : null}
                onClick={this.handleSort('uppersnow_cm')}
              >
                Upper Snow (cm)
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'lowersnow_cm' ? direction : null}
                onClick={this.handleSort('lowersnow_cm')}
              >
                Lower Snow (cm)
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'reporttime' ? direction : null}
                onClick={this.handleSort('reporttime')}
              >
                Report Time
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'pctopen' ? direction : null}
                onClick={this.handleSort('pctopen')}
              >
                Percentage of Runs Open
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {_.map(
              data,
              (
                {
                  resortname,
                  conditions,
                  newsnow_cm,
                  lastsnow,
                  uppersnow_cm,
                  lowersnow_cm,
                  reporttime,
                  pctopen
                },
                i
              ) => (
                <Table.Row key={i}>
                  <Table.Cell>{resortname}</Table.Cell>
                  <Table.Cell>{conditions}</Table.Cell>
                  <Table.Cell>{newsnow_cm} cm</Table.Cell>
                  <Table.Cell>{lastsnow}</Table.Cell>
                  <Table.Cell>{uppersnow_cm} cm</Table.Cell>
                  <Table.Cell>{lowersnow_cm} cm</Table.Cell>
                  <Table.Cell>{reporttime}</Table.Cell>
                  <Table.Cell>{pctopen} %</Table.Cell>
                </Table.Row>
              )
            )}
          </Table.Body>
        </Table>
        <SubTitle>We're sucking diesel now!</SubTitle>
      </div>
    )
  }
}

export default SnowTable
