import React from 'react';
import './homepage.css';
import Banner from '../components/banner.component.js';
import About from '../components/about.component.js';
import Offer from '../components/offer.component.js';
import Testimonial from '../components/testimonial.component.js';
import Footer from '../components/footer.component.js';

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Banner></Banner>
                <About></About>
                <Offer></Offer>
                <Testimonial></Testimonial>
                <Footer></Footer>
            </div>
        );
    }
}