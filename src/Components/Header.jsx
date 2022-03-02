import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

const StyledSignIn = styled(Link)`
    display: flex;
    margin-right: 25px;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    color: black;
`

const StyledUserLogo = styled.img`
    height: 20px;
    margin-right: 5px;
`

function Header() {
    return (
        <StyledHeader>
            <Link to="/">
                <StyledLogo src={logo} />
            </Link>
            <StyledSignIn to="/authentication">
                <StyledUserLogo src={userLogo} />
                <p>Sign in</p>
            </StyledSignIn>
        </StyledHeader>
    )
}

export default Header
