import styled from 'styled-components'

import mainPhoto from '../assets/img/bank-tree.jpeg'
import chat from '../assets/icon-chat.png'
import money from '../assets/icon-money.png'
import shield from '../assets/icon-security.png'

const StyledHero = styled.div`
    position: relative;
    width: 100%;
    height: 400px;
    background: url(${mainPhoto}) no-repeat 0% 33%;
    background-size: cover;
    @media screen and (max-width: 850px) {
        height: 550px;
        background: url(${mainPhoto}) no-repeat 40% 35%;
    }
`

const StyledMessage = styled.div`
    position: absolute;
    width: 21%;
    top: 80px;
    right: 70px;
    padding: 30px;
    background: white;
    @media screen and (max-width: 850px) {
        width: 30%;
        top: 170px;
        right: 10%;
        padding: 20px 25px;
    }
`

const StyledBoldTextInMessage = styled.p`
    font-size: 1.5em;
    font-weight: bold;
    margin: 0;
    @media screen and (max-width: 850px) {
        font-size: 1.2em;
    }
`

const StyledSlogan = styled.p`
    width: 80%;
    @media screen and (max-width: 850px) {
        width: 85%;
    }
`

const StyledInformations = styled.div`
    display: flex;
    width: 100%;
    height: 340px;
    padding: 40px 0 0 0;
    @media screen and (max-width: 850px) {
        flex-direction: column;
        padding: 60px 0 0 0;
    }
`

const StyledElementInInformations = styled.div`
    width: 25%;
    flex: 1;
    text-align: center;
    padding: 0 45px;
    @media screen and (max-width: 850px) {
        width: 65%;
        margin: auto;
        padding: 0;
    }
    @media screen and (max-width: 450px) {
        width: 85%;
        margin: auto;
        padding: 0;
    }
`

const StyledIconeInElement = styled.img`
    height: 100px;
    border: 10px solid rgb(95, 189, 121);
    border-radius: 50%;
    padding: 17px;
    @media screen and (max-width: 850px) {
        height: 70px;
    }
    @media screen and (max-width: 450px) {
        height: 50px;
    }
`

const StyledTitle = styled.p`
    font-size: 1.3em;
    font-weight: bold;
`

function Home() {
    return (
        <div>
            <StyledHero>
                <StyledMessage>
                    <StyledBoldTextInMessage>No fees.</StyledBoldTextInMessage>
                    <StyledBoldTextInMessage>
                        No minimum deposit.
                    </StyledBoldTextInMessage>
                    <StyledBoldTextInMessage>
                        High interest rates.
                    </StyledBoldTextInMessage>
                    <StyledSlogan>
                        Open a savings account with Argent Bank today!
                    </StyledSlogan>
                </StyledMessage>
            </StyledHero>
            <StyledInformations>
                <StyledElementInInformations>
                    <StyledIconeInElement src={chat} />
                    <StyledTitle>You are our #1 priority</StyledTitle>
                    <p>
                        Need to talk to a representative? You can get in touch
                        through our 24/7 chat or through a phone call in less
                        than 5 minutes.
                    </p>
                </StyledElementInInformations>
                <StyledElementInInformations>
                    <StyledIconeInElement src={money} />
                    <StyledTitle>More savings means higher rates</StyledTitle>
                    <p>
                        The more you save with us, the higher your interest rate
                        will be!
                    </p>
                </StyledElementInInformations>
                <StyledElementInInformations>
                    <StyledIconeInElement src={shield} />
                    <StyledTitle>Security you can trust</StyledTitle>
                    <p>
                        We use top of the line encryption to make sure your data
                        and money is always safe.
                    </p>
                </StyledElementInInformations>
            </StyledInformations>
        </div>
    )
}

export default Home
