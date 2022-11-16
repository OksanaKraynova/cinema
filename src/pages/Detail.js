import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import apiConfig from '../api/api';
import tmdbApi from '../api/db';
import CastList from '../components/CastList';
import Recommendations from '../components/Recommendations';
import VideoList from '../components/VideoList';

const Detail = () => {

    const { category, id } = useParams()
    const [item, setItem] = useState(null)

    useEffect(() => {
        const getDetail = async () => {
            const response = await tmdbApi.detail(category, id, { params: {} });
            setItem(response);
            window.scrollTo(0, 0);
        }
        getDetail();
    }, [category, id]);
    return (
        <>
            {
                item && (
<>
                    <Banner className="banner" style={{ backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})` }}></Banner>

                        <Content className='container'>
                            <Poster>
                                <div style={{ backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.backdrop_path)})` }}></div>
                            </Poster>

                            <Info>
                                <h1 className="title">
                                    {item.title || item.name}
                                </h1>
                                <RowGenres >
                                    {
                                        item.genres && item.genres.slice(0, 5).map((genre, i) => (
                                            <Genres key={i} >{genre.name}</Genres>
                                        ))
                                    }
                                </RowGenres>
                                <p className="overview">{item.overview}</p>
                                <div>
                                    <div >
                                        <h2>Casts</h2>
                                    </div>
                                    <CastList id={item.id} />
                                </div>
                            </Info>
                        </Content>
                        <Similar className='container'>
                            <Row >
                                <VideoList  id={item.id} />
                            </Row>
                            <Row>
                                <Recommendations title='Similar' category={category} id={item.id} type='similar' />
                            </Row>
                        </Similar>
                    </>
                )
            }
        </>
    );
};

export default Detail;

const Banner = styled.div`
   height: 50vh;
    position: fixed;
    top: 100px;
    left:0;
    right: 0;
    z-index:-1;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    @media(max-width: 998px){
        top: 70px;
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.6);
    }
    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100px;
        background-image: linear-gradient(to top, #010101, rgba(0,0,0, 0));
    }
`

const Content = styled.div`
display: flex;
gap: 20px;
padding: 50px 30px;
position: relative;
/* padding-top: 200px; */
`
const Row = styled.div`
.similar{
    margin-bottom: 12px;
}
`
const Poster = styled.div`
    flex: 1;
    position: relative;
    height: 450px;
    div{
        background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 20px;
          height: 100%;
          width: 100%;
    }
    @media(max-width: 998px){
display: none;
    }
`

const Info = styled.div`
width: 70%;
display: flex;
flex-direction: column;
gap: 30px;
@media(max-width: 998px){
    width: 90%;
}
.title{
    font-size: 50px;
}
.overview{
    line-height: 1.4;
    font-size: 16px;
}
`

const RowGenres = styled.div`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
`

const Genres = styled.span`
     padding: 7px 14px;
                border: 2px solid #fff;
                border-radius: 20px;
                font-size: 16px;
                font-weight: 600;
                

`

const Similar = styled.div`
    padding-bottom: 140px;
`