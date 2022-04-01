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

const StyledButton = styled.button`
    height: 30px;
    margin: auto;
    padding: 5px;
    background: rgb(95, 189, 121);
    color: white;
    font-size: 1em;
`

function Account() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    useEffect(() => {
        const data = store.getState()
        console.log('data in account : ', data)
        setFirstName(data.user.firstName)
        setLastName(data.user.lastName)
    }, [firstName])
    return (
        <StyledHero>
            <p
                style={{
                    color: 'white',
                    margin: 'auto',
                    fontSize: '2em',
                    fontWeight: 'bold',
                }}
            >
                Welcome back
            </p>
            <p
                style={{
                    color: 'white',
                    margin: 'auto',
                    fontSize: '2em',
                    fontWeight: 'bold',
                }}
            >
                {firstName + ' ' + lastName + ' !'}
            </p>
            <StyledButton>Edit Name</StyledButton>
            <Details />
            <Details />
            <Details />
        </StyledHero>
    )
}

export default Account
