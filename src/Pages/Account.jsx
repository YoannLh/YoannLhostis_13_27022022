import styled from 'styled-components'
import { store } from '../store/store'
import { useEffect, useState } from 'react'

import Details from '../Components/Details'
import Loader from '../Components/Loader'
import { fetchModifyUser } from '../slices/modifySlice'
import { useDispatch } from 'react-redux'

const StyledHero = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 900px;
    background: rgb(19, 7, 43);
`
const StyledWelcome = styled.p`
    color: white;
    margin: 25px auto 0 auto;
    font-size: 2em;
    font-weight: bold;
`

const StyledContainerModify = styled.div`
    display: none;
    margin: 20px auto;
`

const StyledName = styled.p`
    color: white;
    margin: 10px auto 25px auto;
    font-size: 2em;
    font-weight: bold;
`

const StyledButton = styled.button`
    height: 30px;
    width: 100px;
    margin: 0 auto;
    padding: 5px;
    background: rgb(95, 189, 121);
    color: white;
    font-size: 1em;
`

const StyledInputsNameInModify = styled.input`
    height: 30px;
    margin: 0 15px;
    padding-left: 10px;
`

const StyledButtonsInModify = styled.button`
    margin: 0 15px;
    padding: 4px 30px;
    color: purple;
    font-weight: bold;
`

function Account() {
    let dispatch = useDispatch()
    const [token, setToken] = useState('')
    const [firstName, setFirstName] = useState('')
    const [tempFirstName, setTempFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [tempLastName, setTempLastName] = useState('')
    const [modify, setModify] = useState(false)
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        console.log(store.getState())
        if (!store.getState().token.token) {
            setToken(localStorage.getItem('token'))
            setFirstName(localStorage.getItem('firstName'))
            setLastName(localStorage.getItem('lastName'))
            return
        }
        const data = store.getState()
        localStorage.setItem('token', data.token.token.payload)
        setToken(data.token.token.payload)
        localStorage.setItem('firstName', data.user.firstName)
        setFirstName(data.user.firstName)
        localStorage.setItem('lastName', data.user.lastName)
        setLastName(data.user.lastName)
    }, [])
    function handleClickToModifyInfos() {
        setModify(!modify)
    }
    function handleChangeFirstName(event) {
        setTempFirstName(event.target.value)
    }
    function handleChangeLastName(event) {
        setTempLastName(event.target.value)
    }
    function handleClickToSaveInfos() {
        setLoading(true)
        if (tempFirstName !== '' && tempLastName !== '') {
            setFirstName(tempFirstName)
            localStorage.setItem('firstName', tempFirstName)
            setLastName(tempLastName)
            localStorage.setItem('lastName', tempLastName)
            // Ou dispatcher plutôt directement dans le store ?
        }
        setTempFirstName('')
        setTempLastName('')
        console.log(token)
        dispatch(
            fetchModifyUser({
                token: token,
                firstName: tempFirstName,
                lastName: tempLastName,
            })
        )
        setTimeout(() => {
            setModify(!modify)
            setLoading(false)
        }, 1000)
    }
    function handleClickToCancelModify() {
        setTempFirstName('')
        setTempLastName('')
        setModify(!modify)
    }
    return (
        <div>
            {isLoading ? <Loader /> : null}
            <StyledHero
                style={{ background: modify ? 'grey' : 'rgb(19, 7, 43)' }}
            >
                <StyledWelcome>Welcome back</StyledWelcome>
                <StyledName style={{ display: modify ? 'none' : 'block' }}>
                    {firstName + ' ' + lastName + ' !'}
                </StyledName>
                <StyledButton
                    style={{ display: modify ? 'none' : 'block' }}
                    onClick={() => handleClickToModifyInfos()}
                >
                    Edit Name
                </StyledButton>
                <StyledContainerModify
                    style={{ display: modify ? 'flex' : 'none' }}
                >
                    <StyledInputsNameInModify
                        placeholder={firstName}
                        onChange={(event) => handleChangeFirstName(event)}
                        style={{ display: modify ? 'block' : 'none' }}
                        value={tempFirstName}
                    />
                    <StyledInputsNameInModify
                        placeholder={lastName}
                        onChange={(event) => handleChangeLastName(event)}
                        style={{ display: modify ? 'block' : 'none' }}
                        value={tempLastName}
                    />
                </StyledContainerModify>
                <StyledContainerModify
                    style={{ display: modify ? 'flex' : 'none' }}
                >
                    <StyledButtonsInModify
                        onClick={() => handleClickToSaveInfos()}
                        style={{ display: modify ? 'block' : 'none' }}
                    >
                        Save
                    </StyledButtonsInModify>
                    <StyledButtonsInModify
                        onClick={() => handleClickToCancelModify()}
                        style={{ display: modify ? 'block' : 'none' }}
                    >
                        Cancel
                    </StyledButtonsInModify>
                </StyledContainerModify>
                <Details modify={modify} />
                <Details modify={modify} />
                <Details modify={modify} />
            </StyledHero>
        </div>
    )
}

export default Account
