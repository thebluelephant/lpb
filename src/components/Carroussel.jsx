import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Carroussel = () => {

    return (
        <Carousel showArrows={false} showIndicators={false} showThumbs={false} showStatus={false} autoPlay infiniteLoop>
            <div>
                <img src={'assets/photos/lpb1.jpg'} />
            </div>
            <div>
                <img src={'assets/photos/lpb2.jpg'} />
            </div>
            <div>
                <img src={'assets/photos/lpb3.jpg'} />
            </div>
            <div>
                <img src={'assets/photos/lpb4.jpg'} />
            </div>

        </Carousel>
    );
}

export default Carroussel;