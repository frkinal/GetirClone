import { useState, useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import bannerData from "../api/Banner.json";
import CampaignsCard from "./ui/CampaignsCard";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="text-brand-color absolute top-1/2 -right-6 -translate-y-1/2"
      onClick={onClick}
    >
      <AiOutlineRight />
    </button>
  );
}
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="text-brand-color absolute top-1/2 -left-6 -translate-y-1/2"
      onClick={onClick}
    >
      <AiOutlineLeft />
    </button>
  );
}

export default function Campaigns() {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    setBanner(bannerData);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="w-full bg-white">
      <div className="w-10/12 mx-auto">
        <h3 className="text-sm font-semibold mb-3">Kampanyalar</h3>
        <Slider className="-mx-2" {...settings}>
          {banner.length &&
            banner.map((banner, index) => (
              <CampaignsCard key={index} campaigns={banner} />
            ))}
        </Slider>
      </div>
    </div>
  );
}
