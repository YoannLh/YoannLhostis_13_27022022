import axios from 'axios'
import styled from 'styled-components'

import Details from '../Components/Details'

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
                Loulou loulou
            </p>
            <StyledButton>Edit Name</StyledButton>
            <Details />
            <Details />
            <Details />
        </StyledHero>
    )
}

export default Account
