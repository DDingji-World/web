import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import { restaurantApi } from '../api/restaurantAPI'
import OptionLabel from '../components/OptionLabel'
import TagButton from '../components/TagButton'
import Category from '../models/category'
import Restaurant from '../models/restaurant'
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
  if (category.name == '?' || !category.name) return { name: 'ALL' } as Category
  if (category.name == '양식\n아시안')
    return { name: '양식/아시안' } as Category
  if (category.name == '카페\n디저트')
    return { name: '카페/디저트' } as Category
  return category
}

export default function RandomSelectionCard() {
  const category = getLocationCategory()
  const [selectRandomRestaurantByCategory, mutationByCategoryResult] =
    restaurantApi.useSelectRandomRestaurantByCategoryMutation()
  const [selectRandomRestaurant, mutationResult] =
    restaurantApi.useSelectRandomRestaurantMutation()
  const [restaurant, setRestaurant] = useState<Restaurant>({
    name: '',
    categories: [],
    tags: [],
    url: '',
    x: '',
    y: '',
  })

  const loadData = () => {
    category.name == 'ALL'
      ? selectRandomRestaurant()
      : selectRandomRestaurantByCategory(category)
  }

  useEffect(loadData, [])

  useEffect(() => {
    const data =
      category.name == 'ALL'
        ? mutationResult.data
        : mutationByCategoryResult.data
    setRestaurant((before) => ({ ...before, ...data }))
  }, [mutationByCategoryResult.isLoading, mutationResult.isLoading])

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
        <Title>{restaurant.name}</Title>
        <TagsLayout>
          {tags.map((tag) => (
            <TagButton key={tag.name} tag={tag} />
          ))}
        </TagsLayout>
      </TitleLayout>
      <Map></Map>
      <NextButtonLayout>
        <NextButton onClick={loadData}>다음</NextButton>
      </NextButtonLayout>
    </CardLayout>
  )
}
