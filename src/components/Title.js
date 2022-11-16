import React from 'react';
import styled from 'styled-components'
const Title = ({ title }) => {
    return (
        <Wrapper>
            {title}
        </Wrapper>
    );
};

export default Title;

const Wrapper = styled.a`
     font-weight: 700;
font-size: 28px;
position: relative;
padding-left: 19px;
transition: all 0.2s ease-in;
margin-bottom: 30px;
&:hover{
    text-decoration: underline;
}
&:before{
    content:'';
    height: 35px;
    width: 8px;
    background: linear-gradient(316.53deg, #26FFF2 13.2%, #326CFF 71.54%);
    position: absolute;
    border-radius: 50px;
    left: 0;
    top: 0px;
}
`