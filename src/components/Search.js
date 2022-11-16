import React from 'react';
import styled from 'styled-components'

const Search = props => {
    return (
        <Input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange ? e => props.onChange(e) : null} />
    );
};

export default Search;

const Input = styled.input`
    display: flex;
    margin: 40px 0 30px 0px ;
    width: 500px;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);
    padding: 10px;
    font-size: 18px;
    @media(max-width: 768px){
        margin: 30px 0px 10px 0px;
        max-width: 400px;
    } 
    @media(max-width: 449px){
        max-width: 300px;
    } 
`
