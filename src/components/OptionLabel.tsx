import styled from 'styled-components'
import Category from '../models/category'

const OptionLabelLayout = styled.button<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  font-size: 1em;
  border-radius: 0;
  padding: 0 0;
  :hover {
    cursor: pointer;
  }
`

interface OptionLabelProp {
  backgroundColor: string
  category: Category
}

export default function OptionLabel({
  backgroundColor,
  category,
}: OptionLabelProp) {
  return (
    <OptionLabelLayout backgroundColor={backgroundColor}>
      {category.name}
    </OptionLabelLayout>
  )
}
