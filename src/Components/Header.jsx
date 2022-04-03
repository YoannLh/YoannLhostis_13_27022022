import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import logo from '../assets/argentBankLogo.png'
import userLogo from '../assets/circle-user-solid.svg'
import arrow from '../assets/arrow-right-solid.svg'

import { store } from '../store/store'
import { useLocation } from 'react-router'

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

const StyledSignInOrOut = styled(Link)`
    display: flex;
    margin-right: 25px;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    color: black;
`

const StyledFirstName = styled.p`
    display: none;
    margin-right: 20px;
`

const StyledUserLogo = styled.img`
    height: 20px;
    margin-right: 5px;
`

const StyledArrow = styled.img`
    display: none;
    height: 20px;
    margin-right: 5px;
`

function Header() {
    let location = useLocation()
    const [firstName, setFirstName] = useState(null)
    useEffect(() => {
        if (location.pathname === '/account') {
            const data = store.getState()
            setFirstName(data.user.firstName)
        }
        if (location.pathname !== '/account') {
            setFirstName(null)
        }
    }, [location, firstName])
    return (
        <StyledHeader>
            <Link to="/">
                <StyledLogo src={logo} />
            </Link>
            <StyledSignInOrOut to="/authentication">
                <StyledUserLogo src={userLogo} />
                <StyledFirstName
                    style={{ display: firstName ? 'block' : 'none' }}
                >
                    {firstName}
                </StyledFirstName>
                <StyledArrow
                    style={{ display: firstName ? 'block' : 'none' }}
                    src={arrow}
                />
                {firstName ? <p>Sign Out</p> : <p>Sign in</p>}
            </StyledSignInOrOut>
        </StyledHeader>
    )
}

export default Header
