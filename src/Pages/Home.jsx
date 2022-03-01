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
`

const StyledMessage = styled.div`
    position: absolute;
    top: 60px;
    right: 70px;
    padding: 50px;
    background: white;
`

const StyledBoldTextInMessage = styled.p`
    font-size: 2em;
    font-weight: bold;
    margin: 0;
`

const StyledInformations = styled.div`
    display: flex;
    width: 100%;
    height: 340px;
    padding: 40px 0 0 0;
`

const StyledElementInInformations = styled.div`
    width: 25%;
    flex: 1;
    text-align: center;
    padding: 0 45px;
`

const StyledIconeInElement = styled.img`
    height: 100px;
    border: 10px solid rgb(95, 189, 121);
    border-radius: 50%;
    padding: 17px;
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
                    <p>Open a savings account with Argent Bank today!</p>
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
