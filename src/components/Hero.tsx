import { v4 as uuidv4 } from "uuid";

// components
import { Container } from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// styles
import "swiper/swiper-bundle.css";

// assets
import facebook from "../assets/socials/facebook.svg";
import twitter from "../assets/socials/twitter.svg";
import youtube from "../assets/socials/youtube.svg";

import watch_gold from "../assets/watches/watch_gold.png";
import watch_silver from "../assets/watches/watch_silver.png";
import watch_emerald from "../assets/watches/watch_emerald.png";
import watch_ruby from "../assets/watches/watch_ruby.png";

import btn_left from "../assets/icons/btn_left.svg";
import btn_right from "../assets/icons/btn_right.svg";

// interfaces
interface IHero {
  setBgColor: (color: string) => void;
}

export const Hero = ({ setBgColor }: IHero) => {
  const socials = [facebook, twitter, youtube];
  const watches = [watch_gold, watch_silver, watch_emerald, watch_ruby];

  return (
    <section className="pt-[114px]">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-white text-[4.5rem] font-black">
              Exquisite Watches
            </h1>
            <h2 className="text-white font-black text-[3.25rem] mt-1.5">
              Choose Luxury, <span className="text-k-black">Choose Us</span>
            </h2>
            <p className="text-k-gray max-w-[613px] font-semibold text-2xl mt-[70px]">
              Discover the Perfect Watch for Every Occasion and Elevate Your
              Style with Timeless Elegance and Precision Craftsmanship - watch
            </p>
            <h3 className="text-white font-bold text-[4rem] mt-12">$430.00</h3>
            <div className="flex items-center gap-[30px] mt-[70px]">
              {socials.map((social) => (
                <a href="#" key={uuidv4()} className="h-[60px] w-[60px]">
                  <button
                    type="button"
                    className="rounded-[50%] outline-2 outline-white h-[60px] w-[60px] flex items-center justify-center"
                  >
                    <img src={social} alt="social" />
                  </button>
                </a>
              ))}
            </div>
          </div>
          <div>
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              onSlideChange={(swiper) => {
                switch (swiper.activeIndex) {
                  case 0:
                    setBgColor("main-bg-gold");
                    break;
                  case 1:
                    setBgColor("main-bg-silver");
                    break;
                  case 2:
                    setBgColor("main-bg-emerald");
                    break;
                  case 3:
                    setBgColor("main-bg-ruby");
                    break;
                  default:
                    setBgColor("main-bg-gold");
                    break;
                }
              }}
              className="w-[500px]"
            >
              {watches.map((watch) => (
                <SwiperSlide key={uuidv4()}>
                  <img src={watch} alt="watch" />
                </SwiperSlide>
              ))}
              <div
                className="swiper-button-prev min-h-[75px] min-w-[75px] after:hidden"
                style={{ left: "0px" }}
              >
                <img src={btn_left} alt="<" />
              </div>
              <div
                className="swiper-button-next min-h-[75px] min-w-[75px] after:hidden"
                style={{ right: "0px" }}
              >
                <img src={btn_right} alt=">" />
              </div>
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
};
