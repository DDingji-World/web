import TagButton from "./TagButton";
import styled from "styled-components";
import Restaurant from "../models/restaurant";
import Category from "../models/category";

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

interface RestaurantTitleProps {
    onTitleButtonClicked : (id:number, category : Category) => void;
    restaurant: Restaurant;
    category : Category;
}

export default function RestaurantTitleTextArea({restaurant,onTitleButtonClicked, category }: RestaurantTitleProps): JSX.Element {
    return (<>
        <TitleLayout>
            <Title onClick={() => { onTitleButtonClicked(restaurant.id, category)}}>{restaurant.name}</Title>
            <TagsLayout>
                {restaurant.tags?.map((tag) => (
                    <TagButton key={tag.name} tag={tag}/>
                ))}
            </TagsLayout>
        </TitleLayout>
    </>)
}