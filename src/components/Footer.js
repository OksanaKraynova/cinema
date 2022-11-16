import React from 'react';
import styled from 'styled-components'
import Logo from './Logo';
const Footer = () => {
    return (
        <Wrapper>
            <Container >
                <Column className='logo'>
                 <Logo/>   
                </Column>
                <Column >
                    <ul>
                        <li>
                                <a>Voice over and Subtitle </a>                           
                        </li>
                        <li>
                            <a>Media Center </a>
                        </li>
                        <li>
                            <a>Privacy</a>
                        </li>
                        <li>
                            <a> Contact us</a>
                        </li>
                    </ul>
                </Column>
                <Column >
                    <ul>
                        <li>
                            <a>Voice Description</a>
                        </li>
                        <li>
                            <a>Investor Relations</a>
                        </li>
                        <li>
                            <a>Legal Provisions</a>
                        </li>
                    </ul>
                </Column>
                <Column >
                    <ul>
                        <li>
                            <a>Help Center</a>
                        </li>
                        <li>
                            <a>Job Opportunities</a>
                        </li>
                        <li>
                            <a>Cookies Preferences</a>
                        </li>
                    </ul>
                </Column>
                <Column className='list'>
                    <ul>
                        <li>
                            <a>Gift Cards</a>
                        </li>
                        <li>
                            <a>Terms of Use</a>
                        </li>
                        <li>
                            <a>Corporate Informations</a>
                        </li>
                    </ul>
                </Column>
            </Container>
        </Wrapper>
    );
};

export default Footer;

const Wrapper = styled.footer`
    background: #101012;
    padding: 70px 20px;
    @media(max-width: 1439px){
        padding-top: calc(40px + (70 - 40) * ((100vw - 320px) / (1439 - 320)));
        padding-bottom: calc(40px + (70 - 40) * ((100vw - 320px) / (1439 - 320)));
    }
`

const Container = styled.div`
    margin: 0 auto;
    max-width: 1150px;
    display: flex;
    gap:52px;
    justify-content: space-between;
    @media(max-width: 998px){
            flex-wrap: wrap;
            gap: 15px;
        }
    .logo{
        @media(max-width: 998px){
            display: flex;
            justify-content: center;
        }
    }
   
`

const Column = styled.div`
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    color: #C2C2C2;
    @media(max-width: 998px){
            flex: 1 1 100%;
            text-align: center;
        }
    ul{
        display: flex;
        flex-direction: column;
        gap: 15px;
        transition: color 0.2s ease;
        a{
            &:hover{
                color: #fff;
                cursor: pointer;
            }
        }
        }             
`