import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faShuffle} from "@fortawesome/free-solid-svg-icons";
import {useCategorySelector} from "../store/category";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useLocation} from "react-router";
import Category from "../models/category";

const TitleLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 75px;
  width: 95%;
  margin: 0 auto;
  margin-top: 19px;
  border-radius: 10px;
  font-size: 20px;
`
const Title = styled.div`
  font-family: ${({theme}) => theme.font.dongle};;
  font-size: 40px;
`
const BackspaceIcon = styled.div`
  margin-left: 20px;

  :hover {
    cursor: pointer;
    font-size: 25px;
    transition: all 0.5s;
  }
`
const RandomSelectIcon = styled.div`
  margin-right: 20px;

  :hover {
    cursor: pointer;
    font-size: 25px;
    transition: all 0.5s;
  }
`

const MarginCollapseBreaker = styled.hr`
  height: 0px;
  margin: 0px;
  border: 0px;
  padding-bottom: 1px;
  background-color: ${({theme}) => theme.color.main};;
  color: ${({theme}) => theme.color.main};;
`
type RestaurantListProps = {
    category: Category
}
export default function RestaurantListTitle({category}: RestaurantListProps) {

    const navigate = useNavigate();

    const moveToMainPage = () => {
        navigate("/", {replace: true});
    }
    const moveToRandomSelectPage = () => {
        navigate("/random-selection-card",
            {
                replace: true,
                state: {
                    category
                }
            });
    }

    return <>
        <MarginCollapseBreaker/>
        <TitleLayout>
            <BackspaceIcon>
                <FontAwesomeIcon onClick={moveToMainPage} icon={faArrowLeft}/>
            </BackspaceIcon>
            <Title>{category.name === "?" ? "전체" : category.name}</Title>
            <RandomSelectIcon>
                <FontAwesomeIcon onClick={moveToRandomSelectPage} icon={faShuffle}/>
            </RandomSelectIcon>
        </TitleLayout>
    </>
}