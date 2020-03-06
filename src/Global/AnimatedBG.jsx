import React from 'react'
import styled, { keyframes } from 'styled-components'

const AnimateGradient = keyframes`
  0% { background-position: 0% 50% }

  50% { background-position: 100% 50% }

  100% { background-position: 0% 50% }
`
const Speed = props => props.speed || '20s'

const colours = '-15deg, #2c387e, #3f51b5, #6573c3, #ffa733, #ff9100'

const animationType = 'ease infinite'

const Background = styled.div.attrs(props => ({
  height: props.height || '150px'
}))`
  height: ${props => props.height};

  background: -ms-linear-gradient(${colours});
  background: -moz-linear-gradient(${colours});
  background: -o-linear-gradient(${colours});
  background: -webkit-linear-gradient(${colours});
  background: linear-gradient(${colours});

  background-size: 400% 400%;

  -webkit-animation: ${AnimateGradient} ${Speed} ${animationType};
  -ms-animation: ${AnimateGradient} ${Speed} ${animationType};
  -moz-animation: ${AnimateGradient} ${Speed} ${animationType};
  -o-animation: ${AnimateGradient} ${Speed} ${animationType};
  animation: ${AnimateGradient} ${Speed} ${animationType};
`

const AnimatedBG = props => {
  return (
    <Background height={props.height} speed={props.speed}>
      {props.children}
    </Background>
  )
}

export default AnimatedBG
