import styled from 'styled-components'

const StyledHero = styled.div`
    display: flex;
    width: 100%;
    height: 560px;
    background: rgb(19, 7, 43);
`

const StyledErrorMessage = styled.p`
    margin: auto;
    color: white;
    font-size: 1.3em;
`

function Error() {
    return (
        <StyledHero>
            <StyledErrorMessage>
                Oups, cette page est introuvable :/
            </StyledErrorMessage>
        </StyledHero>
    )
}

export default Error
