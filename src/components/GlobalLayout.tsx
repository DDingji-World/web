import styled from "styled-components";
import {ReactNode} from "react";


interface GlobalLayoutProps{
    children: ReactNode
}

const GlobalBody = styled.div`
  background-color: #002967;
  width: 500px;
  height: 100vh;
  margin: 0 auto;
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