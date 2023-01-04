import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Restaurant from '../models/restaurant'
import RandomSelectionCard from '../components/RandomSelectionCard'
import Category from '../models/category'
import { restaurantApi } from '../api/restaurantAPI'

const getLocationCategory = (): Category => {
  const category = useLocation().state?.category as Category
  return category
}

function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

export default function RandomSelectionList() {
  const category = getLocationCategory()
  const navigate = useNavigate()
  const [restaurants, setRestaurants] = useState<Restaurant[]>(
    [] as Restaurant[]
  )
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const query = restaurantApi.useGetRestaurantsQuery(category.name == 'ALL' ? undefined : category)

  useEffect(() => {
    const data = query.data
    if (data !== undefined) {
      setRestaurants((before) => [...before, ...shuffle([...data])])
    }
  }, [query.isLoading])

  const onNextButtonClicked = () => {
    setSelectedIndex((before) => {
      if (before + 1 < restaurants.length) {
        return before + 1
      }
      return 0
    })
  }

  const onExitButtonClicked = () => {
    navigate("/")
  }
  const onTitleButtonClicked = (id:number, category : Category) => {
    navigate(`/restaurant/${id}`, {
      state : {
        category
      }
    })
  }


  return (
    <RandomSelectionCard
      restaurant={restaurants[selectedIndex]}
      categories={[category]}
      onNextButtonClicked={onNextButtonClicked}
      onExitButtonClicked={onExitButtonClicked}
      onTitleButtonClicked={onTitleButtonClicked}
    />
  )
}
