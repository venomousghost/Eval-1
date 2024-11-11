import React from 'react';
import Carousel from './Carousel/Carousel';
import Collapse from './Collapse/Collapse';
import Upcoming from './Upcoming/Upcoming';
import Ongoing from './Ongoing/Ongoing';
import Parralex from './Parralex/Parralex';
import Track from './Track/Track';
import Review from './Reviews/Review';
import Sponser from './Sponser/Sponser';

const Tournament = () => {
    return (
        <div>
            <Carousel />
            <Collapse/>
            <Upcoming/>
            <Ongoing/>
            <Parralex/>
            <Track/>
            <Review/>
            <Sponser/>
        </div>
    );
};

export default Tournament;
