import logo from '../assets/logo.png'
import styled from "styled-components";

const FlexCenterDiv = styled.div`
  display: flex;
  justify-content: center;
`

const CompanyLogo = styled.img.attrs({
    src: `${logo}`
})`
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 100px;
`

export default function Logo() {
    return (
        <>
            <FlexCenterDiv>
                <CompanyLogo/>
            </FlexCenterDiv>
        </>
    )
}