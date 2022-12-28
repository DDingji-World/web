import styled from "styled-components";
import {ReactNode} from "react";


interface GlobalLayoutProps{
    children: ReactNode
}

const GlobalBody = styled.div`
  background-color: #002967;
  position: relative;
  width: 500px;
  height: 100vh;
  margin: 0 auto;
  
  @media (max-width:500px){
    width : 100%;
  }
`
const GlobalBackground = styled.div`
  background-color: black;
  width: 100%;
`
export default function GlobalLayout({children}:GlobalLayoutProps) : JSX.Element{
    return <>
        <GlobalBackground>
            <GlobalBody>
                {children}
            </GlobalBody>
        </GlobalBackground>
    </>
}