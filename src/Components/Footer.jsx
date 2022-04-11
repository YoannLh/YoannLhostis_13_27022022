import styled from 'styled-components'

const StyledFooter = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    border-top: 2px solid rgb(220, 220, 220);
    z-index: 2;
    @media screen and (max-width: 1024px) {
    }
`

const StyledCopyright = styled.p`
    margin: auto;
`

function Footer() {
    return (
        <StyledFooter>
            <StyledCopyright>Copyright 2020 Argent Bank</StyledCopyright>
        </StyledFooter>
    )
}

export default Footer
