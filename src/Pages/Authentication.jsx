import styled from 'styled-components'

import userLogo from '../assets/circle-user-solid.svg'

const StyledHero = styled.div`
    display: flex;
    width: 100%;
    height: 560px;
    background: rgb(19, 7, 43);
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 21%;
    height: 380px;
    margin: 50px auto;
    background: white;
`

const StyledUserLogo = styled.img`
    height: 18px;
    margin: 35px auto 0 auto;
`

const StyledTitle = styled.p`
    margin: 30px auto 0 auto;
    font-size: 1.5em;
    font-weight: bold;
`

const StyledLabel = styled.label`
    position: relative;
    top: 15px;
    left: 35px;
    font-size: 1em;
    font-weight: bold;
`

const StyledInput = styled.input`
    width: 75%;
    height: 32px;
    margin: 15px auto 0 auto;
`

const StyledContainerRadio = styled.div`
    position: relative;
    top: 15px;
    left: 30px;
    display: flex;
`

const StyledRadioParagraph = styled.p`
    margin: 0;
`

const StyledButton = styled.button`
    width: 75%;
    height: 40px;
    margin: 20px auto;
    background: rgb(95, 189, 121);
    color: white;
    border: 0;
    font-size: 1.1em;
`

function Authentication() {
    return (
        <StyledHero>
            <StyledForm>
                <StyledUserLogo src={userLogo} />
                <StyledTitle>Sign In</StyledTitle>
                <StyledLabel>Username</StyledLabel>
                <StyledInput />
                <StyledLabel>Password</StyledLabel>
                <StyledInput />
                <StyledContainerRadio>
                    <input type="checkbox" />
                    <StyledRadioParagraph>Remember Me</StyledRadioParagraph>
                </StyledContainerRadio>
                <StyledButton>Sign In</StyledButton>
            </StyledForm>
        </StyledHero>
    )
}

export default Authentication
