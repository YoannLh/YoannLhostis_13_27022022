import styled, { keyframes } from 'styled-components'

const StyledWrapper = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.3;
    z-index: 1;
`

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
    transform: rotate(360deg);
    }
`

const StyledLoader = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 10px solid green;
    border-bottom-color: transparent;
    margin: auto;
    z-index: 2;
    animation: ${rotate} 1s infinite linear;
`

function Loader() {
    return (
        <StyledWrapper>
            <StyledLoader></StyledLoader>
        </StyledWrapper>
    )
}

export default Loader
