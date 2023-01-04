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


const MapTitleLayout  = styled.div`
  padding: 2%;
`
export default function RestaurantInfo() {

    const location = useLocation();
    const navigate = useNavigate();
    const [data, setData] = useState<Restaurant>({} as Restaurant);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const index = location.pathname.lastIndexOf('/')
        const id = location.pathname.substring(index + 1)
        axios.get(`/restaurants/${id}`)
            .then(res => {
                setData(res.data);
            }).catch(err => console.log(err))

        setLoading(false);
    }, [])

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