import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch, useSelector, useStore } from 'react-redux'

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

let email = ''
let password = ''
let token = ''

function postIdsAndGetToken(email, password) {
    console.log(email, password)
    axios
        .post('http://localhost:3001/api/v1/user/login', {
            email: email,
            password: password,
        })
        .then(function (response) {
            console.log(response)
            token = response.data.body.token
            console.log('token : ' + token)
            postTokenAndGetUserInfos(token)
        })
        .catch(function (error) {
            console.log(error)
        })
}

function postTokenAndGetUserInfos(token) {
    axios
        .post(
            'http://localhost:3001/api/v1/user/profile',
            {},
            {
                headers: {
                    authorization: token,
                },
            }
        )
        .then(function (response) {
            console.log('rep : ', response)
        })
        .catch(function (error) {
            console.log(error)
        })
}

const handleChangeEmail = (event) => {
    email = event.target.value
}
const handleChangePassword = (event) => {
    password = event.target.value
}
function handleClickButton(event) {
    postIdsAndGetToken(email, password)
}

function Authentication() {
    const [rememberMe, setRememberMer] = useState(false)
    const [authenticated, setAuth] = useState(true)
    const store = useStore()
    const dispatch = useDispatch()
    useEffect(() => {
        if (rememberMe) {
            //const getUserData = useSelector((state) => state.users)
        }
        if (!rememberMe) {
            //dispatch({ type: '' })
        }
    })
    function handleClickRememberMe() {
        setRememberMer(rememberMe ? false : true)
        dispatch({ type: 'rememberMe' })
    }
    return (
        <StyledHero>
            <StyledForm>
                <StyledUserLogo src={userLogo} />
                <StyledTitle>Sign In</StyledTitle>
                <StyledLabel>Username</StyledLabel>
                <StyledInput onChange={(event) => handleChangeEmail(event)} />
                <StyledLabel>Password</StyledLabel>
                <StyledInput
                    onChange={(event) => handleChangePassword(event)}
                />
                <StyledContainerRadio>
                    <input
                        type="checkbox"
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
    )
}

export default Authentication
