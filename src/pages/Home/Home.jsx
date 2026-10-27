import React from 'react';
import Banner from './Banner/Banner';
import HowItWorks from './HowItWorks/HowItWorks';
import OurServices from '../OurServices/OurServices';
import Brands from './Brands/Brands';
import Features from './Features/Features';
import PrioritySection from './PrioritySection/PrioritySection';
import Reviews from './Reviews/Reviews';

const reviewsPromise = fetch('/reviews.json')
.then(res => res.json())
const Home = () => {
	return (
		<div>
			<Banner/>
			<HowItWorks/>
			<OurServices/>
			<Brands/>
			<Features/>
			<PrioritySection/>
			<Reviews reviewsPromise={reviewsPromise}/>
		</div>
	);
};

export default Home;