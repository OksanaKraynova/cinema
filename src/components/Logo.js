import React from 'react';
import styled from 'styled-components'

const Logo = () => {
    return (
        <Wrapper>
            <a href='/'><img alt='logo' src='/full-logo.svg' /></a>
        </Wrapper>
    );
};

export default Logo;

const Wrapper = styled.div`
    @media(max-width: 998px){
        width: 80px;
    }
    img{
        max-width: 100%;
    }
`