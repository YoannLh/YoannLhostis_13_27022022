import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch, useSelector, useStore } from 'react-redux'

import userLogo from '../assets/circle-user-solid.svg'
import Loader from '../Components/Loader'
import { fetchToken, tokenSelector } from '../slices/tokenSlice'
import { fetchUser, fetchSelector } from '../slices/userSlice'

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
    left: 35px;
    display: flex;
`

const StyledRadio = styled.div`
    width: 10px;
    height: 10px;
    margin: auto 5px auto 0;
    border: 1px solid grey;
    border-radius: 3px;
`

const StyledRadioParagraph = styled.p`
    margin: 0;
`

const StyledButton = styled(Link)`
    width: 75%;
    height: 40px;
    margin: 20px auto;
    background: rgb(95, 189, 121);
    color: white;
    border: 0;
    text-align: center;
    font-size: 1.1em;
`

function Authentication() {
    let navigate = useNavigate()
    const [userMail, setUserMail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const [authenticated, setAuth] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const store = useStore()
    const dispatch = useDispatch()

    const { token, loading, hasErrors } = useSelector(tokenSelector)
    const { userLoading, email, firstName, lastName, userHasErrors } =
        useSelector(fetchSelector)
    useEffect(() => {
        setRememberMe(
            localStorage.getItem('rememberMe') === 'true' ? true : false
        )
        setUserMail(localStorage.getItem('email'))
        setUserPassword(localStorage.getItem('password'))
        //localStorage.clear()
    }, [])
    const handleChangeEmail = (event) => {
        setUserMail(event.target.value)
    }
    const handleChangePassword = (event) => {
        setUserPassword(event.target.value)
    }
    function handleClickRememberMe() {
        setRememberMe(rememberMe === true ? false : true)
        localStorage.setItem('rememberMe', rememberMe === true ? false : true)
    }

    function handleClickButton(event) {
        setLoading(true)
        dispatch(fetchToken({ mail: userMail, password: userPassword }))
        if (rememberMe) {
            localStorage.setItem('email', userMail)
            localStorage.setItem('password', userPassword)
        }
        if (!rememberMe) {
            localStorage.setItem('email', '')
            localStorage.setItem('password', '')
        }
        if (!userLoading) {
            setTimeout(() => {
                navigate('/account')
            }, 1000)
        }
    }
    return (
        <div>
            <StyledHero>
                <StyledForm>
                    <StyledUserLogo src={userLogo} />
                    <StyledTitle>Sign In</StyledTitle>
                    <StyledLabel>Username</StyledLabel>
                    <StyledInput
                        onChange={(event) => handleChangeEmail(event)}
                        value={userMail ? userMail : ''}
                    />
                    <StyledLabel>Password</StyledLabel>
                    <StyledInput
                        onChange={(event) => handleChangePassword(event)}
                        value={userPassword ? userPassword : ''}
                    />
                    <StyledContainerRadio>
                        <StyledRadio
                            style={
                                rememberMe
                                    ? { background: 'blue' }
                                    : { background: 'white' }
                            }
                            onClick={() => handleClickRememberMe()}
                        />
                        <StyledRadioParagraph>Remember Me</StyledRadioParagraph>
                    </StyledContainerRadio>
                    <StyledButton
                        onClick={(event) => handleClickButton(event)}
                        to={authenticated ? '/account' : '/authentication'}
                    >
                        Sign In
                    </StyledButton>
                </StyledForm>
            </StyledHero>
            {isLoading ? <Loader /> : null}
        </div>
    )
}

export default Authentication
