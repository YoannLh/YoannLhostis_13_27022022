import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    width: 75%;
    height: 100px;
    margin: 30px auto;
    padding: 30px 20px;
    justify-content: space-between;
    background: white;
`

const StyledContainerAmount = styled.div`
    margin: auto 0;
`

const StyledButtonTransaction = styled.button`
    width: 15%;
    height: 40px;
    margin: auto 0;
    background: rgb(95, 189, 121);
    color: white;
    border: 0;
    text-align: center;
    font-size: 1.1em;
`

function handleClick() {
    console.log('View transations')
}

function Details() {
    return (
        <StyledContainer>
            <StyledContainerAmount>
                <p style={{ margin: '0' }}>Argent Bank Checking (x8349)</p>
                <p style={{ margin: '0', fontSize: '3em', fontWeight: 'bold' }}>
                    $2,334.45
                </p>
                <p style={{ margin: '0' }}>Available Balance</p>
            </StyledContainerAmount>
            <StyledButtonTransaction onClick={() => handleClick()}>
                View transactions
            </StyledButtonTransaction>
        </StyledContainer>
    )
}

export default Details
