import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import {category as cate} from  '../api/db'
import MovieSection from '../components/MovieSection';

const Catalog = () => {
    const { category } = useParams()
  
    return (
        <Wrapper>
            <Title>{category === cate.movie ? 'Movies' : 'TV Series'}</Title>
            <MovieSection category={category} />
        </Wrapper>
    );
};

export default Catalog;

const Wrapper = styled.div`
    padding: 20px 0px 0px 0px;
    background: url(../login-background.jpg) top left / cover ;
    height: 100%;

`

const Title = styled.h2`
    text-align: center;
    font-size: 36px;
    font-weight: 700;
`