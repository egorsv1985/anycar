import styles from '../styles/Reviews.module.scss'
import SwiperCore, { Pagination, Autoplay, Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Pagination,  Autoplay, Navigation, A11y]);
import {useState} from "react";
import Popup from "./Popup";

export default function Reviews({title, description, data}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null)
  return (
    <div className={styles.reviews}>
      <img alt="" style={{top: "-500px", right: "-600px"}} className="decor" src="/images/bg-decor/4.png" />
      <div className="container" uk-scrollspy="target: .uk-scrollspy-class; cls: uk-animation-slide-bottom-medium; delay: 100;">
        <h2 className="uk-scrollspy-class" dangerouslySetInnerHTML={{__html: title}} />
        <p className="uk-scrollspy-class" dangerouslySetInnerHTML={{__html: description}} />
        <Swiper
          className="uk-scrollspy-class"
          breakpoints={{
            1200: {
              slidesPerView: 3,
              centeredSlides: true
            },
            767: {
              slidesPerView: 2,
            }
          }}
          slidesPerView={1}
          spaceBetween={40}
          loop={true}
          style={{'--swiper-navigation-color': '#465877'}}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next-2',
            prevEl: '.swiper-button-prev-2',
          }}
        >
          {data.map(el => (
            <SwiperSlide className={styles.review} key={el.ID}>
              <img
                alt="" 
                src="/images/icons/play.png"
                className={styles.review__play}
                onClick={() => {setActive(el.post_custom.youtube_link); setOpen(true)}}
              />
              <img alt="" src={el.post_custom.preview_review_image} className={styles.review__image} />
            </SwiperSlide>
          ))}

          <div className={styles.navigation}>
            <svg className="swiper-button-prev-2" width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30.5039" r="29" stroke="url(#paint0_linear)" strokeWidth="2"/>
              <path d="M38.75 29.2555H23.925L28.4625 23.8055C28.6747 23.5502 28.7768 23.2211 28.7463 22.8906C28.7158 22.56 28.5553 22.2551 28.3 22.043C28.0447 21.8308 27.7156 21.7287 27.3851 21.7592C27.0546 21.7897 26.7497 21.9502 26.5375 22.2055L20.2875 29.7055C20.2455 29.7651 20.2078 29.8278 20.175 29.893C20.175 29.9555 20.175 29.993 20.0875 30.0555C20.0308 30.1988 20.0012 30.3514 20 30.5055C20.0012 30.6596 20.0308 30.8121 20.0875 30.9555C20.0875 31.018 20.0875 31.0555 20.175 31.118C20.2078 31.1831 20.2455 31.2458 20.2875 31.3055L26.5375 38.8055C26.655 38.9466 26.8022 39.06 26.9686 39.1378C27.1349 39.2156 27.3164 39.2558 27.5 39.2555C27.7921 39.256 28.0751 39.1543 28.3 38.968C28.4266 38.863 28.5312 38.7342 28.6079 38.5887C28.6846 38.4433 28.7318 38.2842 28.7469 38.1204C28.762 37.9567 28.7447 37.7916 28.6959 37.6346C28.6471 37.4776 28.5678 37.3318 28.4625 37.2055L23.925 31.7555H38.75C39.0815 31.7555 39.3995 31.6238 39.6339 31.3894C39.8683 31.1549 40 30.837 40 30.5055C40 30.174 39.8683 29.856 39.6339 29.6216C39.3995 29.3872 39.0815 29.2555 38.75 29.2555Z" fill="url(#paint1_linear)"/>
              <defs>
                <linearGradient id="paint0_linear" x1="-2.23517e-07" y1="30.5039" x2="60" y2="30.5039" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4CB7CC"/>
                  <stop offset="1" stopColor="#52DAAC"/>
                </linearGradient>
                <linearGradient id="paint1_linear" x1="20" y1="30.5047" x2="40" y2="30.5047" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4CB7CC"/>
                  <stop offset="1" stopColor="#52DAAC"/>
                </linearGradient>
              </defs>
            </svg>
            <svg className="swiper-button-next-2" style={{transform: "rotate(180deg)"}} width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30.5039" r="29" stroke="url(#paint0_linear)" strokeWidth="2"/>
              <path d="M38.75 29.2555H23.925L28.4625 23.8055C28.6747 23.5502 28.7768 23.2211 28.7463 22.8906C28.7158 22.56 28.5553 22.2551 28.3 22.043C28.0447 21.8308 27.7156 21.7287 27.3851 21.7592C27.0546 21.7897 26.7497 21.9502 26.5375 22.2055L20.2875 29.7055C20.2455 29.7651 20.2078 29.8278 20.175 29.893C20.175 29.9555 20.175 29.993 20.0875 30.0555C20.0308 30.1988 20.0012 30.3514 20 30.5055C20.0012 30.6596 20.0308 30.8121 20.0875 30.9555C20.0875 31.018 20.0875 31.0555 20.175 31.118C20.2078 31.1831 20.2455 31.2458 20.2875 31.3055L26.5375 38.8055C26.655 38.9466 26.8022 39.06 26.9686 39.1378C27.1349 39.2156 27.3164 39.2558 27.5 39.2555C27.7921 39.256 28.0751 39.1543 28.3 38.968C28.4266 38.863 28.5312 38.7342 28.6079 38.5887C28.6846 38.4433 28.7318 38.2842 28.7469 38.1204C28.762 37.9567 28.7447 37.7916 28.6959 37.6346C28.6471 37.4776 28.5678 37.3318 28.4625 37.2055L23.925 31.7555H38.75C39.0815 31.7555 39.3995 31.6238 39.6339 31.3894C39.8683 31.1549 40 30.837 40 30.5055C40 30.174 39.8683 29.856 39.6339 29.6216C39.3995 29.3872 39.0815 29.2555 38.75 29.2555Z" fill="url(#paint1_linear)"/>
              <defs>
                <linearGradient id="paint0_linear" x1="-2.23517e-07" y1="30.5039" x2="60" y2="30.5039" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4CB7CC"/>
                  <stop offset="1" stopColor="#52DAAC"/>
                </linearGradient>
                <linearGradient id="paint1_linear" x1="20" y1="30.5047" x2="40" y2="30.5047" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4CB7CC"/>
                  <stop offset="1" stopColor="#52DAAC"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </Swiper>
      </div>
      <Popup open={open} setOpen={setOpen} video={active} />
    </div>
  )
}