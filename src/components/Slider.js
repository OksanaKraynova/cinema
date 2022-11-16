import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from 'react-router';
import { Pagination } from "swiper";
import styled from 'styled-components'
import Button from './Button';
import tmdbApi, { category, movieType } from '../api/db';
import apiConfig from '../api/api';
import Modal, { ModalContent } from './Modal'
import { disableScroll } from '../funcs/scroll';

const Slider = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 }
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, { params })
                setMovies(response.results.slice(0, 5))
            } catch {
                console.log('error');
            }
        }
        getMovies()
    }, [])

    return (
        <Wrapper>
            <Swiper pagination={true} loop={true} spaceBetween={10} slidesPerView={1} autoplay={{ delay: 3000 }} modules={[Pagination]} className="mySwiper container">
                {movies.map(movie => (
                    <SwiperSlide key={movie.id} >
                        {({ isActive }) => (
                            <SlideItem item={movie} className={`${isActive ? 'active ' : ''}`} />
                        )}

                    </SwiperSlide>
                ))}
            </Swiper>
            {movies.map((item, i) => <TrailerModal key={i} item={item} />)}
        </Wrapper >
    );
};

const SlideItem = props => {

    let history = useNavigate();

    const item = props.item;

    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

    const setModalActive = async () => {
        const modal = document.querySelector(`#modal_${item.id}`);

        const videos = await tmdbApi.getVideos(category.movie, item.id);

        if (videos.results.length > 0) {
            const videSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
            modal.querySelector('.modal__content > iframe').setAttribute('src', videSrc);
            disableScroll()
        } else {
            modal.querySelector('.modal__content').innerHTML = 'No trailer';
        }

        modal.classList.toggle('active');
    }

    return (
        <SlideWrapper style={{ backgroundImage: `url(${background})` }}>
            <Slide >
                <Description>
                    <Title className='title-slide'>{item.title}</Title>
                    <Row className='des-slide'>
                        <span>{item.release_date}</span>

                        <Age>18+</Age>

                        <Rating>
                            <span>{item.vote_average}</span>
                            <img alt='rating' src='/icons/star.svg' />
                        </Rating>
                    </Row>
                    <p className='des-slide'>{item.overview}</p>
                    <Buttons className='btns-slide'>
                        <Button text='Watch' img='/icons/play.svg' onClick={setModalActive} />
                        <Btn className='more' onClick={() => history('/movie/' + item.id)} >More information</Btn>

                    </Buttons>
                </Description>
                <Image className='image-hide'>
                    <img alt={item.title} src={apiConfig.w500Image(item.poster_path)} />
                </Image>
            </Slide>
        </SlideWrapper>
    )
}


const TrailerModal = props => {
    const item = props.item;

    const iframeRef = useRef(null);

    const onClose = () => iframeRef.current.setAttribute('src', '');

    return (
        <Modal active={false} id={`modal_${item.id}`}>
            <ModalContent onClose={onClose}>
                <Frame ref={iframeRef}  title="trailer"></Frame>
            </ModalContent>
        </Modal>
    )
}

export default Slider;

const Wrapper = styled.div`
    border-bottom: 2px solid #2F2E2E;
    .swiper-slide-active{
        .image-hide{
            img{
            transform: scale(1);
            }
        }
        .title-slide, .des-slide, .btns-slide{
            opacity: 1;
            transform: translateY(0);
        }
        .title-slide{
           
            transition-delay: 0.3s, 0.3s;
        }
        .des-slide{
                      transition-delay: 0.5s, 0.5s;
        }
        .btns-slide{
                      transition-delay: 0.7s, 0.7s;
        }
    }
`
const SlideWrapper = styled.div`
    background:  top left / cover no-repeat;
    overflow: hidden;

`
const Slide = styled.div`
    position: relative;
    display: flex;
    height: 766px;
    gap: 53px;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    background-color: rgba(0,0,0,0.6);
    @media(max-width: 1149px){
        height: 649px;
       padding-left: calc(20px + (50 - 20) * ((100vw - 320px) / (1149 - 320)));
       padding-right: calc(20px + (50 - 20) * ((100vw - 320px) / (1149 - 320)));
    }
    @media(max-width: 998px){
        max-height: 549px;
    } 
    @media(max-width: 998px){
        max-height: 449px;
    }
`

const Row = styled.div`
    font-size: 16px;
    font-weight: 800;
    display: flex;
    margin-top: 32px;
    align-items: center;
    @media(max-width: 1439px){
        margin-top: calc(14px + (32 - 14) * ((100vw - 320px) / (1439 - 320)));
    }
    @media(max-width: 499px){
display: none;
    }
`

const Rating = styled.div`
    display: flex;
    align-items: center;
       img{
        margin-left: 8px;
        object-fit: top;
    }
`

const Description = styled.div`
    max-width: 700px;
    @media(max-width: 768px){
        max-width: none;
    }
    p{
        margin: 32px 0px 35px 0px;
        font-size: 18px;
        line-height: 1.5;
        color: #C2C2C2;
        @media(max-width: 1439px){
            margin-top: calc(14px + (32 - 14) * ((100vw - 320px) / (1439 - 320)));
            margin-bottom: calc(14px + (35 - 14) * ((100vw - 320px) / (1439 - 320)));
            font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (1439 - 320)));
            line-height: 1.3;
        }
    }
    .title-slide, .des-slide, .btns-slide{
        opacity: 0;
        transform: translateY(-100px);
        transition: transform 0.5s ease, opacity 0.5s ease;
}
`
const Image = styled.div`
    height: 90%;
    flex:0 0 40%;
    @media(max-width: 998px){
display: none;
    }
    img{
    max-height:100%;
        width: 100%;
        object-fit: contain;
    transform: scale(0);
    transition: transform 0.75s;
    }
`

const Title = styled.h2`
    font-family: 'Marcellus';
    font-size: 80px;
    line-height: 1.2;
    @media(max-width: 1439px){
        font-size: calc(35px + (80 - 35) * ((100vw - 320px) / (1439 - 320)));
    }
`

const Buttons = styled.div`
    display: flex;
    gap: 30px;
    @media(max-width: 499px){
    flex-direction: column;
    gap: 14px;
    }  
`

const Age = styled.span`
    margin: 0 18px;
    padding: 6px 15px;
    border-radius: 50px;
    border: 1.5px solid #326CFF;
`

const Btn = styled.a`
    background: #fff;
    color: #323232;
    box-shadow: 0px 4px 50px rgba(50, 108, 255, 0.5);
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 16px;
    transition: all 0.3s ease;
    min-width: 195px;
    height: 50px;
        &:hover{
        color: #fff;
        background: linear-gradient(316.53deg, #26FFF2 13.2%, #326CFF 71.54%);
        }
`

const Frame = styled.iframe`
    height: 500px;
    width: 100%;
    @media(max-width: 998px){
        height: 420px;
    }
    @media(max-width: 768px){
        height: 350px;
    }
    @media(max-width: 498px){
        height: 300px;
    }
`