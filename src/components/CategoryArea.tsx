import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useModeSelector} from "../store/mode";
import {useDispatch} from "react-redux";
import {categorySlice} from "../store/category";
import Category from '../models/category';

const SelectArea = styled.div`
  width: 95%;
  height: 50%;
  display: flex;
  background-color: white;
  margin: 0 auto;
  margin-top: 30px;
  flex-wrap: wrap;
  border-radius: 10px;

  > div:nth-child(odd) {
    > div:nth-child(odd) {
      background-color: ${({theme}) => theme.color.categoryOddBlock};;
    }
  }

  > div:nth-child(2) {
    border-top: 3px solid black;
    border-bottom: 3px solid black;
    height: 34%;

    > div:nth-child(2) {
      background-color: ${({theme}) => theme.color.categoryOddBlock};;
      font-size: 90px;

      :hover {
        background-color: ${({theme}) => theme.color.hoveredOddCategoryBlock};;
        transition: all 0.5s;
      }
    }

    > div:nth-child(odd) {
      :hover {
        background-color: ${({theme}) => theme.color.hoveredEvenCategoryBlock};;
        transition: all 0.5s;
      }
    }
  }

  > div > div:nth-child(2) {
    width: 34%;
  }

  > div:nth-child(1) {
    border-radius: 10px 10px 0px 0px;

    > div:nth-child(odd) {
      border-radius: 10px 10px 0px 0px;

      :hover {
        background-color: ${({theme}) => theme.color.hoveredOddCategoryBlock};;
        transition: all 0.5s;
      }
    }

    > div:nth-child(even) {
      :hover {
        background-color: ${({theme}) => theme.color.hoveredEvenCategoryBlock};;
        transition: all 0.5s;
      }
    }
  }

  > div:nth-child(3) {
    border-radius: 0px 0px 10px 10px;

    > div:nth-child(odd) {
      border-radius: 0px 0px 10px 10px;

      :hover {
        background-color: ${({theme}) => theme.color.hoveredOddCategoryBlock};;
        transition: all 0.5s;
      }
    }

    > div:nth-child(even) {
      :hover {
        background-color: ${({theme}) => theme.color.hoveredEvenCategoryBlock};;
        transition: all 0.5s;
      }
    }
  }
`
const SelectRow = styled.div`
  width: 100%;
  height: 33%;
  display: flex;

  > div:nth-child(2) {
    border-right: 3px solid black;
    border-left: 3px solid black;
  }
`

const CategoryBlock = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 400;
  font-family: 'Dongle', sans-serif;
  width: 33%;
  height: 100%;

  :hover {
    cursor: pointer;
  }
`

export default function CategoryArea():JSX.Element{
    const navigate = useNavigate();
    const mode = useModeSelector();

    const navigateToNextPage = (event:any) => {
        const url = mode ? "/random-selection-card" : "/restaurant/list";
        navigate(url, {
            state :{
                category : {name: event.target.innerText} as Category
            }
        });
    }

    return (
        <>
            <SelectArea>
                <SelectRow>
                    <CategoryBlock onClick={navigateToNextPage}>분식</CategoryBlock>
                    <CategoryBlock onClick={navigateToNextPage}>일식</CategoryBlock>
                    <CategoryBlock onClick={navigateToNextPage}>양식<br/>아시안</CategoryBlock>
                </SelectRow>
                <SelectRow>
                    <CategoryBlock onClick={navigateToNextPage}>고기</CategoryBlock>
                    <CategoryBlock onClick={navigateToNextPage}>?</CategoryBlock>
                    <CategoryBlock onClick={navigateToNextPage}>한식</CategoryBlock>
                </SelectRow>
                <SelectRow>
                    <CategoryBlock onClick={navigateToNextPage}>중식</CategoryBlock>
                    <CategoryBlock onClick={navigateToNextPage}>카페<br/>디저트</CategoryBlock>
                    <CategoryBlock onClick={navigateToNextPage}>간편식</CategoryBlock>
                </SelectRow>
            </SelectArea>
        </>
    )
}
