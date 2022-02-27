import styled from 'styled-components';
import React, { useRef, useState, useEffect } from 'react';
import Images from '../../../constants/index';
const HomeSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const moveItemTarget = useRef(null);
  const TOTAL_SLIDES = 3;
  let images = [];
  for (let i = 0; i < Images.length; i++) {
    images.push(Images[i].url);
  }
  function nextSlide() {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(currentSlide);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    moveItemTarget.current.style.transition = 'all 0.5s ease-in-out';
    moveItemTarget.current.style.transform = `translateX(-${currentSlide}00vw)`;
  }, [currentSlide]);
  return (
    <HomeSlide>
      <div className="cont-slide ">
        <ul ref={moveItemTarget} className="slideHidden">
          {images.map((url, index) => (
            <IMG src={url} key={index} />
          ))}
        </ul>
      </div>
      <div className="buttonCont">
        <button onClick={prevSlide} className="preBtn"></button>
        <button onClick={nextSlide} className="nextBtn"></button>
      </div>
      <div className="indicator">
        <button className="firstCase"></button>
        <button className="secondCase"></button>
        <button className="thirdCase"></button>
        <button className="forthCase"></button>
      </div>
    </HomeSlide>
  );
};
const IMG = styled.img`
  width: 100vw;
  height: 300px;
`;

const HomeSlide = styled.section`
  position: relative;
  width: 100vw;
  /* overflow: hidden; */
  .cont-slide {
    width: 400vw;
    display: flex;
  }
  .buttonCont {
    .nextBtn {
      position: absolute;
      top: 150px;
      right: 30px;
      background: url('./assets/icon-right-arrow.svg') no-repeat;
      background-color: transparent;
      border: none;
      width: 30px;
      height: 30px;
    }
    .preBtn {
      position: absolute;
      top: 150px;
      left: 30px;
      background: url('./assets/icon-left-arrow.svg') no-repeat;
      background-color: transparent;
      border: none;
      width: 30px;
      height: 30px;
    }
  }
  .indicator {
    position: absolute;
    bottom: 10px;
    left: 650px;
    button {
      width: 12px;
      height: 12px;
      border-radius: 100%;
      background-color: #fff;
      border: none;
      margin-right: 8px;
      &.on {
        background-color: #000;
      }
    }
  }
`;

export default HomeSlides;
