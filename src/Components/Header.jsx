import styled from 'styled-components'

import logo from '../assets/argentBankLogo.png'
import userLogo from '../assets/circle-user-solid.svg'

const StyledHeader = styled.div`
    display: flex;
    width: 100%;
    height: 65px;
    justify-content: space-between;
    align-items: center;
`

const StyledLogo = styled.img`
    height: 55px;
    margin-left: 25px;
`

const StyledSignIn = styled.div`
    display: flex;
    margin-right: 25px;
    align-items: center;
`

const StyledUserLogo = styled.img`
    height: 20px;
    margin-right: 5px;
`

function Header() {
    const handleClick = () => {
        console.log('click')
    }
    return (
        <StyledHeader>
            <StyledLogo src={logo} />
            <StyledSignIn onClick={() => handleClick()}>
                <StyledUserLogo src={userLogo} />
                Sign in
            </StyledSignIn>
        </StyledHeader>
    )
}

export default Header
