import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList, faShuffle} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {modeSlice, useModeSelector} from "../store/mode";
import theme from "../theme";

const NavBar = styled.div`
  width: 500px;
  height: 75px;
  background-color: ${({theme}) => theme.color.sub};
  bottom: 0px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  border-radius: 10px 10px 0px 0px;
  @media (max-width: 500px) {
    width: 100%;
  }
`

interface ButtonProps {
    mode: boolean
}

const ListButton = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: ${(props: ButtonProps) => props.mode ? theme.color.gray : "black"};;
  border-radius: 0px 10px 0px 0px;

  :hover {
    cursor: pointer;
    color: black;
    transition: all 0.5s;
  }
`
const ShuffleButton = styled(ListButton)`
  color: ${(props: ButtonProps) => props.mode ? "black" : theme.color.gray};;
  border-radius: 10px 0px 0px 0px;
  border-right: 2px solid ${({theme}) => theme.color.main};
`
export default function NavigationBar() {
    const mode = useModeSelector()
    const dispatch = useDispatch()
    return (
        <>
            <NavBar>
                <ShuffleButton mode={mode} onClick={() => dispatch(modeSlice.actions.SHUFFLE())}><FontAwesomeIcon
                    icon={faShuffle}/></ShuffleButton>
                <ListButton mode={mode} onClick={() => dispatch(modeSlice.actions.LIST())}><FontAwesomeIcon
                    icon={faList}/></ListButton>
            </NavBar>
        </>
    )
}