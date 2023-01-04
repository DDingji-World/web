import {useLocation} from "react-router";
import axios from "axios";
import {useEffect, useState} from "react";
import OuterMapServiceArea from "../components/OuterMapServiceArea";
import styled from "styled-components";
import LoadingSpinner from "../components/LoadingSpinner";
import RestaurantTitleTextArea from "../components/RestaurantTitleTextArea";
import Restaurant from "../models/restaurant";
import RestaurantTitleArea from "../components/RestaurantTitleArea";
import Category from "../models/category";
import {useNavigate} from "react-router-dom";
import {restaurantApi} from "../api/restaurantAPI";


const MapTitleLayout  = styled.div`
  padding: 2%;
`
export default function RestaurantInfo() {

    const location = useLocation();
    const navigate = useNavigate();
    const [data, setData] = useState<Restaurant>({} as Restaurant);
    const [loading, setLoading] = useState(true);

    const index = location.pathname.lastIndexOf('/')
    const id = location.pathname.substring(index + 1)
    const query = restaurantApi.useGetRestaurantDetailQuery(Number.parseInt(id));

    useEffect(() => {
        setLoading(true);
        const queryData =  query.data
        if(queryData !== undefined)
            setData(queryData)
        setLoading(false);
    }, [query.isLoading])

    const onExitButtonClicked = () => {
        navigate("/");
    }
    const onTitleButtonClicked = () => {
        navigate("/");
    }

    return <>
        <LoadingSpinner loading={loading}/>
        <MapTitleLayout >
        <RestaurantTitleArea onExitButtonClicked={onExitButtonClicked}
                             category={location?.state?.category as Category}
                             restaurant={data} onTitleButtonClicked={onTitleButtonClicked}/>
        </MapTitleLayout>
        <OuterMapServiceArea _url={data?.url}/>
    </>
}