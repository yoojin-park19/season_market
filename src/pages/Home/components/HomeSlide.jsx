import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeHeader = () => {
  return (
    <HomeHead>
      <div className="left-header">
        <img src="./assets/logo.png" alt="Season market" />
        <form action="" className="inp-header">
          <label htmlFor="inp-header"></label>
          <input
            type="search"
            id="inp-header"
            placeholder="상품을 검색해보세요."
          />
          <button className="searchBtn">
            <img src="./assets/search.svg" alt="" />
          </button>
        </form>
      </div>
      <div className="right-header">
        <Link className="link-cart">
          <img src="./assets/icon-shopping-cart.svg" alt="장바구니" />
          <p>장바구니</p>
        </Link>
        <Link to="#" className="link-myPage">
          <img src="./assets/icon-user.svg" alt="마이페이지" />
          <p>마이페이지</p>
        </Link>
      </div>
    </HomeHead>
  );
};

const HomeHead = styled.section`

export default HomeHeader;
