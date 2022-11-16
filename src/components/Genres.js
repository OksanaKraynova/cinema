import React from 'react';
import Title from './Title';
import styled from 'styled-components'
import { genres } from '../db/movies';

const Genres = () => {
    return (
        <Wrapper className='container'>
            <Title title='Popular Genres  ' />
            <Cards>
                {genres.map(card => (
                    <a key={card.src} ><img alt='' src={card.src} /></a>
                ))}
            </Cards>
        </Wrapper>
    );
};

export default Genres;

const Wrapper = styled.div`
margin-top: 108px;
@media(max-width: 998px){
    margin-top: calc(50px + (108 - 50) * ((100vw - 320px) / (998 - 320)));
}
`

const Cards = styled.div`
margin-top: 47px;
display: flex;
flex-wrap: wrap;
gap:25px;
@media(max-width: 998px){
    gap: calc(10px + (25 - 10) * ((100vw - 320px) / (998 - 320)));
}
a{
    flex: 1 1 23%;
    transition: transform 0.2s ease-in;
    @media(max-width: 998px){
        flex: 0 1 30%;
    }
    @media(max-width: 549px){
        flex: 1 1 45%;
    }
    &:hover{
        transform: scale(1.05);
    }
    img{
        max-width: 100%;
    }
}
`