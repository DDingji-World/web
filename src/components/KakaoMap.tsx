import { useEffect } from 'react'
import styled from 'styled-components'

const Map = styled.div`
  width: 100%;
  height: 50%;
  background-color: white;
`

interface KakaoMapProps {
  x: number
  y: number
}
export default function KakaoMap({ x, y }: KakaoMapProps) {
  useEffect(() => {
    const { kakao } = window
    const mapDiv = document.querySelector('#map')
    const markerPosition = new kakao.maps.LatLng(x, y)
    const options = {
      center: markerPosition,
      level: 3,
    }

    const map = new kakao.maps.Map(mapDiv, options)
    new kakao.maps.Marker({
      position: markerPosition,
    }).setMap(map)
  }, [x, y])
  return <Map id="map" />
}
