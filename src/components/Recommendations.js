import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import tmdbApi, { category } from '../api/db';
import Title from './Title'
import apiConfig from '../api/api';
import Card from './Card';
const Recommendations = props => {

    const [items, setItems] = useState([])

    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};

            if (props.type !== 'similar') {
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type, { params })
                        break
                    default:
                        response = await tmdbApi.getTvList(props.type, { params })
                }
            } else {
                response = await tmdbApi.similar(props.category, props.id)
            }
            setItems(response.results)
        }
        getList()
    }, [])
    return (
        <Wrapper >
            <Container className='container'>
                <Title title={props.title} />
                <Swiper className='slider' slidesPerView={"auto"}
                    spaceBetween={20} cssMode={true} grabCursor={true} >

                    {items.map(item => (
                        <SwiperSlide key={item.id} className='link-movie'>
                            <Card item={item} category={props.category} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </Wrapper>
    );
};

export default Recommendations;

const Wrapper = styled.div`
    padding-top: 68px;
    @media(max-width: 998px){
        padding-top: calc(40px + (68 - 40) * ((100vw - 320px) / (998 - 320)));
    }
    .link-movie{
        flex: 0 0 180px;
        
        position: relative;
        a{
            width: 100%;
            height: 100%;
            &:hover{
                h3{
                    color:  #42AAFF; 
                }
            }
        }
      
        img{
            max-width: 100%;
        }
      
    }
`

const Container = styled.div`
   .slider{
    margin-top: 14px;
   }
  
`


