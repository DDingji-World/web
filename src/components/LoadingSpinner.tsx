import styled from "styled-components";

interface LoadingSpinnerProps{
    loading: boolean;
}

export default function LoadingSpinner({loading}:LoadingSpinnerProps):JSX.Element{

    const LayerPopup = styled.div`
      display: ${props => props.loading ? "block" : "none"};
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${({theme}) => theme.color.main};;;
      z-index: 1000;
      justify-content: center;
      align-items: center;
      //margin: -30px 0 0 -30px;
    `


    const Spinner = styled.div`
      position: absolute;
      top: 45%;
      left: 45%;
      border: 8px solid #f3f3f3; /* Light grey */
      border-top: 8px solid #3498db; /* Blue */
      border-radius: 50%;
      width: 60px;
      height: 60px;
      animation: spinner 2s linear infinite;

      @keyframes spinner {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `
    return <>
        <LayerPopup loading={loading}>
            <Spinner />
        </LayerPopup>
    </>
}