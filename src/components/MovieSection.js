import React, { useCallback, useEffect, useState } from 'react';
import { useParams,  useNavigate } from 'react-router-dom';
import tmdbApi, { category, movieType, tvType } from '../api/db';
import Card from './Card';
import styled from 'styled-components'
import Button from './Button';
import Search from './Search';

const MovieSection = props => {
    const [items, setItems] = useState([]);

    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const { keyword } = useParams();
console.log(keyword);
    useEffect(() => {
        const getList = async () => {
            let response = null;
            if (keyword === undefined) {
                const params = {};
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(movieType.upcoming, { params });
                        break;
                    default:
                        response = await tmdbApi.getTvList(tvType.popular, { params });
                }
            } else {
                const params = {
                    query: keyword
                }
                response = await tmdbApi.search(props.category, { params });
            }
            setItems(response.results);
            setTotalPage(response.total_pages);
        }
        getList();
    }, [props.category, keyword]);

    const loadMore = async () => {
        let response = null;
        if (keyword === undefined) {
            const params = {
                page: page + 1
            };
            switch(props.category) {
                case category.movie:
                    response = await tmdbApi.getMoviesList(movieType.upcoming, {params});
                    break;
                default:
                    response = await tmdbApi.getTvList(tvType.popular, {params});
            }
        } else {
            const params = {
                page: page + 1,
                query: keyword
            }
            response = await tmdbApi.search(props.category, {params});
        }
        setItems([...items, ...response.results]);
        setPage(page + 1);
    }




    return (
        <Wrapper className='container'>
           <MovieSearch category={props.category} keyword={keyword} />
            <Cards>
                {
                    items.map((item, i) => <Card item={item} key={i} category={props.category} />)
                }
            </Cards>
            {
                page < totalPage ? (
                    <ButtonContainer  onClick={loadMore} >
                        <Button text='Load More' className='btn-load'>Load more</Button>
                    </ButtonContainer>
                ) : null
            }
        </Wrapper>
    );
};

const MovieSearch = props => {

    const history = useNavigate();
   
    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');

 
    const goToSearch = useCallback(
        
        () => {
            if (keyword.trim().length > 0) {
                console.log(keyword);
                history(`/${category[props.category]}/search/${keyword}`);
            }
        },
        [keyword, props.category, history]
    );

    useEffect(() => {
        const enterEvent = (e) => {
            e.preventDefault();
            if (e.keyCode === 13) {
                goToSearch();
            }
        }
        document.addEventListener('keyup', enterEvent);
        return () => {
            document.removeEventListener('keyup', enterEvent);
        };
    }, [keyword, goToSearch]);

    return (
        <Row>
            <Search type='text' placeholder='Search' value={keyword} onChange={e => setKeyword(e.target.value)} />
            <Button className="small" onClick={goToSearch} text='Search'>Search</Button>
        </Row>
    )
}

export default MovieSection;

const Wrapper = styled.div`
padding-bottom: 100px;
    .btn-load{
      display: inline-flex;
    }
`

const Cards = styled.div`
     display: flex;
     
     flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 30px;
    margin-top: 50px;
    @media(max-width: 399px){
        justify-content: center;
    }
    a{
        
        img{
        
        width: 100%;
        }
    }
`

const ButtonContainer = styled.div`
    max-width: 160px;
    margin: 0 auto;
    margin-top: 50px;
`
const Row = styled.div`
    display: flex;
    align-items: center;
    gap:10px;
    @media(max-width: 768px){
        flex-direction: column;
    }
`