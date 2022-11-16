import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiConfig from '../api/api';
import tmdbApi from '../api/db';
import styled from 'styled-components'

const CastList = (props) => {
    const {category} = useParams();

    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            const res = await tmdbApi.credits(category, props.id);
            setCasts(res.cast.slice(0, 5));
        }
        getCredits();
    }, [category, props.id]);
    return (
        <Wrapper >
            {
                casts.map((item, i) => (
                    <Cast key={i}>
                        <div  style={{backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`}}></div>
                        <p>{item.name}</p>
                    </Cast>
                ))
            }
        </Wrapper>
    )
};

export default CastList;

const Wrapper = styled.div`
margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    gap: 10px;

`

const Cast = styled.div`
    div{
width: 100%;
padding-top: 160px;
            background-size: cover;
            margin-bottom: 10px;
    }
`