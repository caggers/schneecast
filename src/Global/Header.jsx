import AnimatedBG from './AnimatedBG'
import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-family: 'Aleo', serif;
  font-size: 4em;
  font-weight: 300;
  text-align: center;
  color: white;
  padding-top: 2%;
`

const SubTitle = styled.h1`
  font-family: 'Aleo', serif;
  font-style: 'italic';
  font-size: 2em;
  font-weight: 300;
  text-align: center;
  color: white;
`

const Header = () => {
  return (
    <div>
      <AnimatedBG speed="20s" height="175px">
        <Title>Rogger's SchneeCast 2019-2020</Title>
        <SubTitle>- a great piece of kit!</SubTitle>
      </AnimatedBG>
    </div>
  )
}

export default Header
