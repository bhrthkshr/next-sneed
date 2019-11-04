import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay infiniteLoop>
                <div>
                    <img src="/images/slide1.jpg" />
                </div>
                <div>
                    <img src="/images/slide2.jpg" />
                </div>
                <div>
                    <img src="/images/slide3.jpg" />
                </div>
                <div>
                    <img src="/images/slide4.jpg" />
                </div>
                <div>
                    <img src="/images/slide5.jpg" />
                </div>
                <div>
                    <img src="/images/slide6.png" />
                </div>
            </Carousel>
        );
    }
}

export default DemoCarousel;