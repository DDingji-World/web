import styled from 'styled-components'
import Tag from '../models/tag'

const TagLayout = styled.button`
  color: lightblue;
  :hover {
    cursor: pointer;
  }
`

interface TagProp {
  tag: Tag
}

export default function TagButton({ tag }: TagProp) {
  return <TagLayout>#{tag.name}</TagLayout>
}
