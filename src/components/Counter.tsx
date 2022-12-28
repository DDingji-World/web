import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { counterSlice, useCounterSelector } from '../store/counter'

interface ColorButtonProp {
  bg: string
}

const ColorButton = styled.button<ColorButtonProp>`
  background-color: ${(props) => props.bg || 'blue'};
`

export default function Counter() {
  const count = useCounterSelector()
  const dispatch = useDispatch()
  return (
    <ColorButton
      bg={'red'}
      onClick={() => dispatch(counterSlice.actions.UP(2))}
    >
      count with Redux Toolkit: {count}
    </ColorButton>
  )
}
