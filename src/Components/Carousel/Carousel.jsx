import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/autoplay';
import '../../Style/Carousel.css';
import axios from "axios";
import { Link } from 'react-router-dom';
import Coin from '../../Pages/Coin';


export default function Carousel() {
  const [coins, setCoins] = useState([]);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';
  
  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
    }).catch((err) => {
      console.log(err)
    })
  }, []);

  return (
    <div className="carouselContainer">
      <h1 className="carouselHeader">Top 10 Coins</h1>
      <Swiper
        modules={[ Navigation, Pagination, Autoplay]}
        slidesPerView={4}
        spaceBetween={0}
        slidesPerGroup={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // loopFillGroupWithBlank={true}
        navigation={true}
        autoplay={{ 
          delay: 2000,
          disableOnInteraction: false
        }}
        className="mySwiper"
        breakpoints={{
          100: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          850: { slidesPerView: 3 },
          1000: { slidesPerView: 4 },
        }}
      > 
        {coins.map(coin => (
          <SwiperSlide key={coin.id}>
            <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
              <div className="swiper-slide">
                <img src={coin.image} alt="" />
                <p>{coin.name.toUpperCase()}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}