import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi from '../api/db';
import styled from 'styled-components'

const VideoList = (props) => {
    const { category } = useParams();

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getVideos = async () => {
            const res = await tmdbApi.getVideos(category, props.id);
            setVideos(res.results.slice(0, 5));
        }
        getVideos();
    }, [category, props.id]);

    return (
        <>
            {
                videos.map((item, i) => (
                    <Video key={i} item={item} />
                ))
            }
        </>
    );

};

const Video = props => {

    const item = props.item;

    const iframeRef = useRef(null);

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []);

    return (
        <Wrapper >
            <Title className="video__title">
                <h2>{item.name}</h2>
            </Title>
            <iframe
                src={`https://www.youtube.com/embed/${item.key}`}
                ref={iframeRef}
                width="100%"
                title="video"
            ></iframe>
        </Wrapper>
    )
}

export default VideoList;

const Wrapper = styled.div`
    margin-top: 50px;
    ifame{
        @media(max-width: 998px){
height: 300px;
        }
        @media(max-width: 768px){
height: 250px;
        } 
         @media(max-width: 499px){
height: 200px;
        }
    }
`

const Title = styled.div`
    margin-bottom: 30px;
    h2{
        font-size: 24px;
    }
`