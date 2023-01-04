import OptionLabel from "./OptionLabel";
import styled from "styled-components";
import Category from "../models/category";


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
interface RestaurantTitleButtonAreaProps{
    onExitButtonClicked: () => void;
    category: Category;
}

export default function RestaurantTitleButtonArea({onExitButtonClicked, category} : RestaurantTitleButtonAreaProps)
    :JSX.Element{
    return <>

        <ExitButton onClick={onExitButtonClicked}>X</ExitButton>
        <OptionLabelsLayout>
            {<OptionLabel backgroundColor={'yellow'} category={category} />}
        </OptionLabelsLayout>
    </>
}