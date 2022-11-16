import React from 'react';
import styled from 'styled-components'

const Button = (props) => {
    return (
        <Wrapper onClick={props.onClick ?  props.onClick : null} >
            {props.img && <img alt='' src={props.img} />}
            {props.text}
        </Wrapper>
    );
};

export default Button;

const Wrapper = styled.a`
    background: linear-gradient(316.53deg, #26FFF2 13.2%, #326CFF 71.54%);
    height: 50px;
    min-width: 141px;
    box-shadow: 0px 4px 50px rgba(50, 108, 255, 0.5);
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    font-size: 16px;
    transition: opacity 0.3s ease;
    gap: 15px;
    &:hover{
        opacity: 0.8;
    }
`