import React from 'react';
import Banner from '../../components/Banner/Banner';
import Stats from '../../components/Stats/Stats';
import TrendingApps from '../../components/TrendingApps/TrendingApps';


const HomePage = () => {

    return (
        <>
           <Banner/>
           <Stats/>
           <TrendingApps/>
        </>
    );
};

export default HomePage;