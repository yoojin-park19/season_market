import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeItems = () => {
  return (
    <HomeItem>
      <img src="./assets/squirt.jpg" alt="멍게" />
      <p className="company">서해멍게나라</p>
      <p className="title">서해 앞바다에서 잡은 자연산 멍게</p>
      <p className="price">20,000원</p>
    </HomeItem>
  );
};

const HomeItem = styled.section`
  width: 380px;
  height: 490px;
  margin-top: 80px;
  img {
    width: 380px;
    height: 380px;
    border-radius: 10px;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
  }
  .company {
    font-size: 16px;
    line-height: 22px;
    color: #767676;
  }
  .title {
    font-size: 18px;
    line-height: 22px;
  }
  .price {
    font-size: 24px;
    line-height: 30px;
    font-weight: 700;
  }
`;
export default HomeItems;
