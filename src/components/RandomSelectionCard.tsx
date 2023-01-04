import { useLocation } from 'react-router'
import styled from 'styled-components'
import KakaoMap from './KakaoMap'
import Category from '../models/category'
import Restaurant from '../models/restaurant'
import RestaurantTitleArea from "./RestaurantTitleArea";

const CardLayout = styled.div`
  background-color: ${({ theme }) => theme.color.main};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2% 2%;
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
  onTitleButtonClicked: (id:number, category : Category) => void
}
export default function RandomSelectionCard({
  restaurant,
  categories,
  onNextButtonClicked,
  onExitButtonClicked,
  onTitleButtonClicked

}: RandomSelectionCardProps) {
  const category = categories[0]


  return !restaurant ? (
    <CardLayout />
  ) : (
    <CardLayout>
        <RestaurantTitleArea onExitButtonClicked={onExitButtonClicked}
                             onTitleButtonClicked={onTitleButtonClicked}
                             category={category}
                             restaurant={restaurant}/>

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
