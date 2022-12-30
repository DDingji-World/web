import { useLocation } from 'react-router'
import styled from 'styled-components'
import OptionLabel from '../components/OptionLabel'
import TagButton from '../components/TagButton'
import Category from '../models/category'
import Tag from '../models/tag'

const CardLayout = styled.div`
  background-color: ${({ theme }) => theme.color.main};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2% 2%;
`

const OptionLabelsLayout = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  button {
    width: 5em;
    height: 2em;
    margin-right: 3%;
    margin-bottom: 2%;
  }
`

const TitleLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.button`
  color: white;
  font-size: 3em;
  margin-bottom: 4%;
  :hover {
    cursor: pointer;
  }
`

const TagsLayout = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  button {
    margin-right: 2px;
    margin-bottom: 2px;
  }
`

const Map = styled.div`
  width: 100%;
  height: 50%;
  background-color: white;
`

const NextButtonLayout = styled.div`
  width: 100%;
  padding: 5%;
`

const NextButton = styled.button`
  background-color: ${({ theme }) => theme.color.sub};
  font-size: 4em;
  height: 100%;
  margin: 0 auto;
  width: 100%;
  border-radius: 5px;
  justify-content: space-between;
  :hover {
    cursor: pointer;
  }
`
const getLocationCategory = (): Category => {
  const category = useLocation().state?.category as Category
  if (category.name == '?' || !category.name) return {name: "ALL"} as Category
  return category
}

export default function RandomSelectionCard() {
  const category = getLocationCategory()

  const tags = [
    { name: '간편식' },
    { name: '샌드위치' },
    { name: '무언가_긴_태그가_있다' },
  ] as Tag[]

  return (
    <CardLayout>
      <OptionLabelsLayout>
        {<OptionLabel backgroundColor={'yellow'} category={category} />}
      </OptionLabelsLayout>
      <TitleLayout>
        <Title>서브웨이</Title>
        <TagsLayout>
          {tags.map((tag) => (
            <TagButton key={tag.name} tag={tag} />
          ))}
        </TagsLayout>
      </TitleLayout>
      <Map></Map>
      <NextButtonLayout>
        <NextButton>다음</NextButton>
      </NextButtonLayout>
    </CardLayout>
  )
}
