import React from 'react';
import Banner from './Banner';
import Brands from './Brands';
import StaticSection from './StaticSection';
import OurServices from './OurServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <StaticSection></StaticSection>
            <OurServices></OurServices>
            <Brands></Brands>
        </div>
    );
};

export default Home;