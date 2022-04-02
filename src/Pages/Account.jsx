import styled from 'styled-components'
import { store } from '../store/store'

import Details from '../Components/Details'
import { useEffect, useState } from 'react'
import { useStore } from 'react-redux'

const StyledHero = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: rgb(19, 7, 43);
`
const StyledWelcome = styled.p`
    color: white;
    margin: 25px auto 0 auto;
    font-size: 2em;
    font-weight: bold;
`

const StyledContainerModify = styled.div`
    display: flex;
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
    margin: auto;
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
    const [firstName, setFirstName] = useState('')
    const [tempFirstName, setTempFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [tempLastName, setTempLastName] = useState('')
    const [modify, setModify] = useState(false)
    useEffect(() => {
        const data = store.getState()
        setFirstName(data.user.firstName)
        setLastName(data.user.lastName)
    }, [firstName])

    function handleClickToModifyInfos() {
        setModify(!modify)
    }
    function handleChangeFirstName(event) {
        setTempFirstName(event.target.value)
    }
    function handleChangeLastName(event) {
        setTempFirstName(event.target.value)
    }
    function handleClickToSaveInfos() {
        console.log('go to put infos in db')
    }
    function handleClickToCancelModify() {
        setModify(!modify)
    }
    return (
        <StyledHero style={{ background: modify ? 'grey' : 'rgb(19, 7, 43)' }}>
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
            <StyledContainerModify>
                <StyledInputsNameInModify
                    placeholder={firstName}
                    onChange={(event) => handleChangeFirstName(event)}
                    style={{ display: modify ? 'block' : 'none' }}
                />
                <StyledInputsNameInModify
                    placeholder={lastName}
                    onChange={(event) => handleChangeLastName(event)}
                    style={{ display: modify ? 'block' : 'none' }}
                />
            </StyledContainerModify>
            <StyledContainerModify>
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
    )
}

export default Account
