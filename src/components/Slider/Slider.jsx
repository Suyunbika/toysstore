import slider1 from '../../assets/slider1.png';
import slider3 from '../../assets/slider3.png';
import slider4 from '../../assets/slider4.png';
import product from '../../assets/product.png';
import product1 from '../../assets/product1.png';
import product2 from '../../assets/product2.png';

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        speed='2000'
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[ Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <div className="header-info">
            <div className="text">
              <h1>Душевное путешествие</h1>
              <p>
              Приготовьтесь отправиться в невероятное путешествие по удивительным тропическим островам. 
              Однако будьте осторожны, ведь оно обещает быть тернистым. 
              Вам предстоит карабкаться по скалам, плавать по морю и искать другие, не менее трудные пути. 
              Юная Тчиа должна спасти отца, вытащив его из лап жуткого тирана, и вы сделаете всё возможное, чтобы семья вновь воссоединилась. 
              </p>
            </div>
            <div className="header-product">
              <img className='header-product-img' src={product} alt="" />
              <div className="header-product-text">
                <p className='header-product-title'>TCHIA (EPIC GAMES)</p>
                <p className="header-product-price">2149 ₽</p>
              </div>
            </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <div className="header-info">
            <div className="text">
              <h1>Главный эксклюзив Sony</h1>
              <p>
              Издание с подзаголовком Part I — это уже третья инкарнация великой игры. 
              Оно во многом превосходит Remastered-версию для PlayStation 4. 
              Во-первых, были полностью переработаны модельки и образы ключевых персонажей. 
              Элли, Джоэл, Тесс и другие никогда не смотрелись настолько кинематографично! 
              Во-вторых, разработчики переделали систему освещения, отчего атмосфера стала более мрачной и нуарной. 
              В-третьих, вас ждёт множество геймплейных улучшений, от более реалистичных анимаций движения до обновлённой физики 
              стрел и модели повреждений.
              </p>
            </div>
            <div className="header-product">
              <img className='header-product-img' src={product2} alt="" />
              <div className="header-product-text">
                <p className='header-product-title'>THE LAST OF US PART I</p>
                <p className="header-product-price">3999 ₽</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <div className="header-info">
            <div className="text">
              <h1>Мы пришли с миром</h1>
              <p>
              DLC предлагает три свежих варианта происхождения: станьте взбунтовавшимся пленником, мстительным воином или рисковым 
              путешественником, осваивающим космические просторы вопреки убеждениям родной цивилизации. <br /> <br />
              Игрок сможет взаимодействовать с другими расами множеством новых способов. 
              Помогите неразвитым планетам открыть технологии будущего, запугайте их или установите секретное наблюдение. 
              Но помните: за вами тоже кто-то может шпионить!
              </p>
            </div>
            <div className="header-product">
              <img className='header-product-img' src={product1} alt="" />
              <div className="header-product-text">
                <p className='header-product-title'>STELLARIS</p>
                <p className="header-product-price">550 ₽</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}