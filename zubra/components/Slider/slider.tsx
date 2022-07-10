/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
import s from "./slider.module.css";

import l from "../../public/slider1/l.svg";
import r from "../../public/slider1/r.svg";
import mLa from "../../public/slider1/mLa.svg";
import mRa from "../../public/slider1/mRa.svg";

import Grid from "../Ui/Grid/grid";
import LearnMore from "../Ui/LearnMore/learnMore";
import CallMePopup from "../Ui/CallMePopup/callMePopup";

export default function Slider() {
  const [activeSlide, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  const sliderArr = [
    {
      img: "./../slider1/p.jpg",
      title: "Природа",
      text: "Житловий комплекс “Зубра Дім” знаходиться в неселеному пункті Зубра, який оточений лісом та парками. Все для того, аби ви могли насолоджуватись прогулянками на свіжому повітрі навіть у місті. ",
    },
    {
      img: "../../slider1/p1.jpg",
      title: "Локація",
      text: "Житловий комплекс “Зубра Дім” знаходиться у зручному розташуванні із хорошим транспортним сполученням, що дозволяє мешканцям швидко добратись до будь-якої точки міста. ",
    },
    {
      img: "../../slider1/p2.jpg",
      title: "Паркінг",
      text: "Житловий комплекс “Зубра Дім” оснащений власним гостьовим паркінгом, який розрахований на 50 автомобілів. ",
    },
    {
      img: "../../slider1/p3.jpg",
      title: "Закрита територія",
      text: "На території ЖК “Зубра Дім” ви можете бути спокійними за своїх дітей та майно, адже комплекс забезпечений закритою територією, яка знаходиться під охороною. ",
    },
  ];
  const sliderArrMobile = [
    {
      img: "../../slider1/pm1.jpg",
      title: "Природа",
      text: "Житловий комплекс “Зубра Дім” знаходиться в неселеному пункті Зубра, який оточений лісом та парками. Все для того, аби ви могли насолоджуватись прогулянками на свіжому повітрі навіть у місті. ",
    },
    {
      img: "../../slider1/pm2.jpg",
      title: "Локація",
      text: "Житловий комплекс “Зубра Дім” знаходиться у зручному розташуванні із хорошим транспортним сполученням, що дозволяє мешканцям швидко добратись до будь-якої точки міста. ",
    },
    {
      img: "../../slider1/pm3.jpg",
      title: "Паркінг",
      text: "Житловий комплекс “Зубра Дім” оснащений власним гостьовим паркінгом, який розрахований на 50 автомобілів. ",
    },
    {
      img: "../../slider1/pm4.jpg",
      title: "Закрита територія",
      text: "На території ЖК “Зубра Дім” ви можете бути спокійними за своїх дітей та майно, адже комплекс забезпечений закритою територією, яка знаходиться під охороною. ",
    },
  ];

  const increment = () => {
    if (activeSlide !== 3) setActive(activeSlide + 1);
    else setActive(0);
  };
  const decrement = () => {
    if (activeSlide !== 0) setActive(activeSlide - 1);
    else setActive(1);
  };

  return (
    <div id="Переваги" className={s.wraper}>
      <div
        className={s.slider}
        style={{
          background: `url(${sliderArr[activeSlide].img})`,
        }}
      >
        <Grid>
          <div className={s.wrap}>
            <img
              className={s.arrow}
              onClick={() => decrement()}
              src={l}
              alt="arrow image"
            />
            <div className={s.contentWrap}>
              <p className={s.title}>{sliderArr[activeSlide].title}</p>
              <p className={s.text}>{sliderArr[activeSlide].text}</p>
              <LearnMore onClick={() => setOpen(true)}>
                дізнатись більше
              </LearnMore>
            </div>
            <img
              className={s.arrow}
              onClick={() => increment()}
              src={r}
              alt="arrow image"
            />
          </div>
        </Grid>
      </div>
      <div className={s.mobile}>
        <div className={s.mobileSlider}>
          <img src={sliderArrMobile[activeSlide].img} alt="" />
          <div className={s.mobileInfo}>
            <p className={s.title}>{sliderArr[activeSlide].title}</p>
            <p className={s.text}>{sliderArr[activeSlide].text}</p>
            <div className={s.counter}>
              <img src={mLa} onClick={() => decrement()} alt="mLa" />
              {`${activeSlide + 1} - ${sliderArrMobile.length}`}
              <img src={mRa} onClick={() => increment()} alt="mRa" />
            </div>
          </div>
        </div>
        <div className={s.btnWrap}>
          <LearnMore
            onClick={() => setOpen(true)}
            color="#3A332F"
            background="#DEDBCB"
          >
            дізнатись більше
          </LearnMore>
        </div>
      </div>
      {open && <CallMePopup close={() => setOpen(false)} />}
    </div>
  );
}
