import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faShuffle} from "@fortawesome/free-solid-svg-icons";
import {useCategorySelector} from "../store/category";
import {useNavigate} from "react-router-dom";

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
  :hover{
    cursor: pointer;
    font-size: 25px;
    transition: all 0.5s;
  }
`
const RandomSelectIcon = styled.div`
  margin-right: 20px;
  :hover{
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

export default function RestaurantListTitle() {

    const category = useCategorySelector();

    return <>
        <MarginCollapseBreaker/>
        <TitleLayout>
            <BackspaceIcon >
                <FontAwesomeIcon icon={faArrowLeft}/>
            </BackspaceIcon>
            <Title>{category === "?" ? "전체" : category}</Title>
            <RandomSelectIcon>
                <FontAwesomeIcon icon={faShuffle}/>
            </RandomSelectIcon>
        </TitleLayout>
    </>
}