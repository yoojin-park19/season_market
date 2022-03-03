import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeHeader = () => {
  return (
    <HomeHead>
      <div className="left-header">
        <img src="/assets/logo.png" alt="Season market" />
        <form action="" className="inp-header">
          <label htmlFor="inp-header"></label>
          <input
            type="search"
            id="inp-header"
            placeholder="상품을 검색해보세요."
          />
          <button className="searchBtn">
            <img src="/assets/search.svg" alt="" />
          </button>
        </form>
      </div>
      <div className="right-header">
        <Link to="/cart" className="link-cart">
          <img src="/assets/icon-shopping-cart.svg" alt="장바구니" />
          <p>장바구니</p>
        </Link>
        <Link to="/login" className="link-myPage">
          <img src="/assets/icon-user.svg" alt="마이페이지" />
          <p>로그인</p>
        </Link>
      </div>
    </HomeHead>
  );
};

const HomeHead = styled.section`
  font-family: 'GmarketSansMedium';
  height: 90px;
  margin-top: 10px;
  display: flex;
  margin: 20px 0px;
  padding: 0px 20px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #fd8789;
  .left-header {
    display: flex;
    img {
      height: 62px;
      width: 200px;
      margin-right: 30px;
    }
    .inp-header {
      position: relative;
      width: 400px;
      height: 46px;
    }
    input {
      margin-top: 11px;
      width: 400px;
      height: 46px;
      border-radius: 50px;
      border: 2px solid #fd8789;
      padding-left: 15px;
    }
    .searchBtn {
      position: absolute;
      top: 20px;
      right: -18px;
      background-color: transparent;
      border: none;
      img {
        width: 28px;
        height: 28px;
      }
    }
  }
  .right-header {
    display: flex;
    .link-cart {
      width: 56px;
      height: 50px;
      margin-right: 30px;
      img {
        width: 32px;
        height: 32px;
      }
      p {
        font-size: 12px;
        line-height: 14px;
        color: #767676;
      }
    }
    .link-myPage {
      width: 56px;
      height: 50px;
      img {
        width: 32px;
        height: 32px;
      }
      p {
        font-size: 12px;
        line-height: 14px;
        color: #767676;
      }
    }
  }
`;
export default HomeHeader;
