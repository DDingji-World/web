import styled from "styled-components";

const OuterMap = styled.embed`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  overflow: auto;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  
`

const MapLayout = styled.div`
  width: 95%;
  margin: 0 auto;
  margin-top: 20px;
  height: 75%;`

interface OuterMapProps {
    _url: string;
}

export default function OuterMapServiceArea({_url}: OuterMapProps): JSX.Element {
    return (
        <>
            <MapLayout>
                <OuterMap src={_url}/>
            </MapLayout>
        </>)
}