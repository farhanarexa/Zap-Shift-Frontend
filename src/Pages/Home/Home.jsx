import React from 'react';
import Banner from './Banner';
import Brands from './Brands';
import StaticSection from './StaticSection';
import OurServices from './OurServices';
import Reviews from './Reviews';

const reviewsPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <StaticSection></StaticSection>
            <OurServices></OurServices>
            <Brands></Brands>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
        </div>
    );
};

export default Home;