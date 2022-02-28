import styled from 'styled-components';
import React, { useRef, useState, useEffect } from 'react';
import Images from '../../../constants/index';
const HomeSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const moveItemTarget = useRef(null);
  const color = useRef(null);

  let images = [];
  for (let i = 0; i < Images.length; i++) {
    images.push(Images[i].url);
  }

  function nextSlide() {
    const TOTAL_SLIDES = 3;
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide + 1);
      console.log(currentSlide);
      console.log(color.current);
    }
  }

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide - 1);
      console.log(color);
    }
  };

  useEffect(() => {
    moveItemTarget.current.style.transition = 'all 0.5s ease-in-out';
    moveItemTarget.current.style.transform = `translateX(-${currentSlide}00vw)`;
    color.current.classList.toggle('on');
    console.log(color.current);
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
      <div className="indicatorCont">
        {images.map((url, index) => (
          <div ref={color} className={`indicator ${index}`} key={index} />
        ))}
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
  .indicatorCont {
    transform: translateY(-40px);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    .indicator {
      width: 10px;
      height: 10px;
      border-radius: 100%;
      border: none;
      background-color: #fff;
      &.on {
        background-color: #000000;
      }
    }
  }
`;

export default HomeSlides;
