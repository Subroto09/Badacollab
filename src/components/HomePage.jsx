import React from 'react';
import Intro from './HomeComponents/Intro'
import Carousel from './HomeComponents/Carousel'
import GetStarted from './HomeComponents/GetStarted';

function HomePage() {
    return ( 
        <>
        <Intro />
        <Carousel />
        <GetStarted />
        </>
     );
}

export default HomePage;