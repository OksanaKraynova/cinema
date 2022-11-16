import React from 'react';
import Genres from '../components/Genres';
import Recommendations from '../components/Recommendations';
import Slider from '../components/Slider';
import { category, movieType, tvType } from '../api/db';


const Main = () => {
    return (
        <div>
            <Slider />
            <Recommendations title='Trending Movies ' category={category.movie} type={movieType.popular} />
            <Recommendations title='Top Rated Movies ' category={category.movie} type={movieType.top_rated} />
            <Recommendations title='Trending TV ' category={category.tv} type={tvType.popular} />
            <Recommendations title='Top Rated TV' category={category.movie} type={tvType.top_rated} />
            <Genres />
       
        </div>
    );
};

export default Main;