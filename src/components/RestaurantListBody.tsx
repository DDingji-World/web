import styled from "styled-components";
import axios from "axios";
import {useEffect, useState} from "react";
import Category from "../models/category";
import RestaurantList from "../models/restaurantList";
import {useNavigate} from "react-router-dom";

const BodyLayout = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 10px;
  width: 95%;
  min-height: 300px;
  background-color: white;
  font-family: ${({theme}) => theme.font.dongle};;
  margin-bottom: 20px;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width:0px;
  @media (min-height: 600px){
    height: 80%;
  }
  ::-webkit-scrollbar {
    display: none;
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
const RestaurantItem = styled.div`
  //margin-left: 10px;
  padding-left: 10px;
  border-bottom: 1px solid black;
  border-radius: 10px 10px 0px 0px;

  :hover {
    cursor: pointer;
    background-color: ${({theme}) => theme.color.categoryOddBlock};;
    transition: all 0.5s;
  }
`
const RestaurantItemTitle = styled.div`
  font-size: 30px;
`
const RestaurantItemTags = styled.div`
  font-size: 20px;
  display: flex;

  > span {
    margin-right: 5px;
  }
`
type RestaurantListProps = {
    _category : Category
}

export default function RestaurantListBody({_category} : RestaurantListProps):JSX.Element {

    const [restaurantInfo, setRestaurantInfo] = useState<RestaurantList[]>();
    const navigate = useNavigate();

    useEffect(() => {
        const url = _category.name === "ALL" ? "/restaurants" : `/restaurants?category=${_category.name}`;
        axios.get(url)
            .then(res => {
                setRestaurantInfo(res.data)
            }).catch(error => {
                alert(error)
        })
    },[])
    const moveToDetailPage = (id : number):any => {
        navigate(`/restaurant/${id}`,{
            replace : true,
        })
    }
    return <>
        <BodyLayout>
            {restaurantInfo?.map(r => {
                return <RestaurantItem onClick={() => {
                    return moveToDetailPage(r.id);
                }}>
                    <RestaurantItemTitle>{r.name}</RestaurantItemTitle>
                    <RestaurantItemTags>
                        {r.tags.map(t => {
                            return <span>#{t.name}</span>
                        })}
                    </RestaurantItemTags>
                </RestaurantItem>
            })}
        </BodyLayout>
        <MarginCollapseBreaker/>
    </>
}