import { useLocation } from 'react-router'
import styled from 'styled-components'
import KakaoMap from './KakaoMap'
import OptionLabel from './OptionLabel'
import TagButton from './TagButton'
import Category from '../models/category'
import Restaurant from '../models/restaurant'

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

const ExitButton = styled.div`
  position: absolute;
  right: 2rem;
  top: 1rem;
  color: white;
  font-size: 1.5rem;
  border: 1px solid #202020;
  border-radius: 50%;
  background-color: #202020;
  padding: 0 1rem;
  :hover {
    cursor: pointer;
  }
`

declare global {
  interface Window {
    kakao: any
  }
}

interface RandomSelectionCardProps {
  restaurant: Restaurant
  categories: Category[]
  onNextButtonClicked: () => void
  onExitButtonClicked: () => void
}
export default function RandomSelectionCard({
  restaurant,
  categories,
  onNextButtonClicked,
  onExitButtonClicked,
}: RandomSelectionCardProps) {
  const category = categories[0]

  return !restaurant ? (
    <CardLayout />
  ) : (
    <CardLayout>
      <ExitButton onClick={onExitButtonClicked}>X</ExitButton>
      <OptionLabelsLayout>
        {<OptionLabel backgroundColor={'yellow'} category={category} />}
      </OptionLabelsLayout>
      <TitleLayout>
        <Title>{restaurant.name}</Title>
        <TagsLayout>
          {restaurant.tags.map((tag) => (
            <TagButton key={tag.name} tag={tag} />
          ))}
        </TagsLayout>
      </TitleLayout>
      <KakaoMap
        x={Number.parseFloat(restaurant.x)}
        y={Number.parseFloat(restaurant.y)}
      />
      <NextButtonLayout>
        <NextButton onClick={onNextButtonClicked}>다음</NextButton>
      </NextButtonLayout>
    </CardLayout>
  )
}
