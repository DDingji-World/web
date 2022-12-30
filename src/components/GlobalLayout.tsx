import styled from 'styled-components'
import { ReactNode } from 'react'

interface GlobalLayoutProps {
  children: ReactNode
}

const GlobalBody = styled.div`
  background-color: ${({ theme }) => theme.color.main};
  position: relative;
  width: calc(100vh / 2);
  height: 100vh;
  margin: 0 auto;
  min-width: 300px;
  min-height: 600px;

  @media (max-width: 500px) {
    width: 100%;
  }
`
const GlobalBackground = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  width: 100%;
`
export default function GlobalLayout({
  children,
}: GlobalLayoutProps): JSX.Element {
  return (
    <>
      <GlobalBackground>
        <GlobalBody>{children}</GlobalBody>
      </GlobalBackground>
    </>)
}
