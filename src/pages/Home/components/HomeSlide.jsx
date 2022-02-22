import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const HomeSlides = () => {
  const [previous, setPre] = useState();
  const moveLeft = (event) => {
    event.target.style.transform = 'translateX( 100%)';
  };
  return (
    <HomeSlide>
      <div className="cont-slide">
        <div className="firstCard"></div>
        <div className="secondCard"></div>
        <div className="thirdCard">
          <p>thirdCard</p>
        </div>
        <div className="forthCard">
          <p>forthCard</p>
        </div>
      </div>
      <div className="btnMove">
        <button className="btnLeft" onClick={moveLeft}></button>
        <button className="btnRight"></button>
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

const HomeSlide = styled.section`
  position: relative;
  width: 100vw;
  /* overflow: hidden; */
  .cont-slide {
    width: 400vw;
    display: flex;
    .firstCard {
      width: 100vw;
      height: 300px;
      background: url('./assets/spring.jpg');
      background-size: cover;
      background-position: 0 -410px;
      background-repeat: no-repeat;
    }
    .secondCard {
      width: 100vw;
      height: 300px;
      background: url('./assets/summer.jpg');
      background-size: cover;
      background-position: 0 -410px;
      background-repeat: no-repeat;
    }
    .thirdCard {
      width: 100vw;
      height: 300px;
      background: url('./assets/fall.jpg');
      background-size: cover;
      background-position: 0 -500px;
      background-repeat: no-repeat;
    }
    .forthCard {
      width: 100vw;
      height: 300px;
      background: url('./assets/winter2.jpg');
      background-size: cover;
      background-position: 0 -600px;
      background-repeat: no-repeat;
    }
  }
  .btnMove {
    .btnRight {
      position: absolute;
      top: 150px;
      right: 30px;
      background: url('./assets/icon-right-arrow.svg') no-repeat;
      background-color: transparent;
      border: none;
      width: 30px;
      height: 30px;
    }
    .btnLeft {
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
