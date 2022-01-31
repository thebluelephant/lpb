import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const RecommendationsCarroussel = () => {
  return (
    <Carousel
      dynamicHeight={true}
      showArrows={false}
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
      autoPlay
      infiniteLoop
    >
      <div>
        <img src={"assets/recommendations/reco2.png"} />
      </div>
      <div>
        <img src={"assets/recommendations/reco4.png"} />
      </div>
      <div>
        <img src={"assets/recommendations/reco5.jpeg"} />
      </div>
      <div>
        <img src={"assets/recommendations/reco6.jpeg"} />
      </div>
      <div>
        <img src={"assets/recommendations/reco7.jpeg"} />
      </div>
      <div>
        <img src={"assets/recommendations/reco1.jpeg"} />
      </div>
      <div>
        <img src={"assets/recommendations/reco3.jpeg"} />
      </div>
    </Carousel>
  );
};

export default RecommendationsCarroussel;
