import { Button, Container, Grid } from 'semantic-ui-react'
import { OPTIONS, getForecast, getLevel } from '../util'

import DataTable from './DataTable'
import Header from '../Global/Header'
import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  padding-top: 50px;
`

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedResort: {}
    }
  }

  handleSelectResort = async value => {
    const option = OPTIONS.filter(item => {
      return item.value === value ? item : null
    })

    const id = option[0].id
    const resortForecast = await getForecast(id, 1).then(req => req.data)

    this.getLevels(resortForecast)

    this.setState({ resortForecast })
  }

  getLevels(data) {
    const base = getLevel(data, 'base')
    const mid = getLevel(data, 'mid')
    const upper = getLevel(data, 'upper')
    this.setState({ base, mid, upper })
  }

  render() {
    const { setActiveTable, activeTable, snowReports } = this.props

    const { resortForecast, base, mid, upper } = this.state

    return (
      <div>
        <Header />
        <StyledContainer>
          <Container>
            <Grid stackable textAlign="center">
              <Grid.Row>
                <Grid.Column width={8} textAlign="center">
                  <Button
                    color="blue"
                    value="snowReport"
                    onClick={e => {
                      setActiveTable(e)
                    }}
                  >
                    Snow Report
                  </Button>
                </Grid.Column>
                <Grid.Column width={8} textAlign="center">
                  <Button
                    color="orange"
                    value="resortForecast"
                    onClick={e => {
                      setActiveTable(e)
                    }}
                  >
                    Resort Forecast
                  </Button>
                </Grid.Column>
              </Grid.Row>
              <DataTable
                activeTable={activeTable}
                snowReports={snowReports}
                handleSelectResort={this.handleSelectResort}
                resortForecast={resortForecast}
                base={base}
                mid={mid}
                upper={upper}
              />
              <Grid.Row divided />
            </Grid>
          </Container>
        </StyledContainer>
      </div>
    )
  }
}

export default Home
