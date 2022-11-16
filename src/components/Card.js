import React from 'react';
import { Link } from 'react-router-dom';
import apiConfig from '../api/api';
import { category } from '../api/db';
import styled from 'styled-components'

const Card = props => {
    const item = props.item
    const link = '/' + category[props.category] + '/' + item.id
    const bg = apiConfig.w500Image(item.poster_path || item.background_path)
    return (
        <Link to={link} className='card-link'>
            <Wrapper className='card-img'  >
                <img src={bg} alt='' />
            </Wrapper>
            <Title>{item.title || item.name}</Title>
        </Link>
    );
};

export default Card;

const Wrapper = styled.div`
    width: 180px;
    height: 270px;
    overflow: hidden;
    img{
object-fit: contain;

    transition: transform 0.2s;
    }
`

const Title = styled.h3`
    margin-top: 10px;
    text-align: center;
    font-size: 18px;
    transition: color .2s ;
`