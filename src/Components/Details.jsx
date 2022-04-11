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

const StyledAmount = styled.p`
    margin: 0;
    font-size: 3em;
    font-weight: bold;
    @media screen and (max-width: 850px) {
        font-size: 2.5em;
    }
`

const StyledButtonTransaction = styled.button`
    width: 15%;
    height: 40px;
    margin: auto 0;
    color: white;
    border: 0;
    text-align: center;
    font-size: 1.1em;
    @media screen and (max-width: 850px) {
        font-size: 0.8em;
    }
    @media screen and (max-width: 450px) {
        width: 25%;
        font-size: 0.7em;
    }
`

function handleClick() {
    console.log('View transations')
}

function Details(props) {
    return (
        <StyledContainer>
            <StyledContainerAmount>
                <p style={{ margin: '0' }}>Argent Bank Checking (x8349)</p>
                <StyledAmount>$2,334.45</StyledAmount>
                <p style={{ margin: '0' }}>Available Balance</p>
            </StyledContainerAmount>
            <StyledButtonTransaction
                style={{
                    background: props.modify ? 'purple' : 'rgb(95, 189, 121)',
                }}
                onClick={() => handleClick()}
            >
                View transactions
            </StyledButtonTransaction>
        </StyledContainer>
    )
}

export default Details
