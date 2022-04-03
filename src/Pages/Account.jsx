import styled from 'styled-components'
import { store } from '../store/store'
import { useEffect, useState } from 'react'

import Details from '../Components/Details'
import Loader from '../Components/Loader'
import { useDispatch } from 'react-redux'

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
    let dispatch = useDispatch()
    const [firstName, setFirstName] = useState('')
    const [tempFirstName, setTempFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [tempLastName, setTempLastName] = useState('')
    const [modify, setModify] = useState(false)
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        const data = store.getState()
        setFirstName(data.user.firstName)
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
        setTempFirstName('')
        setTempLastName('')
        if (tempFirstName !== '' && tempLastName !== '') {
            setFirstName(tempFirstName)
            setLastName(tempLastName)
        }
        //dispatch(thunk)
        setModify(!modify)
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
                <StyledContainerModify>
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
        </div>
    )
}

export default Account
