import React from 'react';
import Banner from './Banner';
import Brands from './Brands';
import StaticSection from './StaticSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <StaticSection></StaticSection>
            <Brands></Brands>
        </div>
    );
};

export default Home;