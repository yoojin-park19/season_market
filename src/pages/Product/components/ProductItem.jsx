import styled from 'styled-components';
import Items from '../../../constants/database';
import { useParams } from 'react-router';

const ProductItem = () => {
  const paramsId = useParams().id;
  return (
    <>
      {Items.map((item) => (
        <Item key={item.index}>
          {item.season.map((one) => (
            <Detail key={one.id}>
              {paramsId === one.id ? (
                <div>
                  <img
                    className="productItemImg"
                    src={one.url}
                    alt="상품사진"
                  />
                  <div className="productCont">
                    <div className="productInfo">
                      <h4>{one.company}</h4>
                      <h2>{one.title}</h2>
                      <h3 className="price">
                        {one.price}
                        <span>원</span>
                      </h3>
                    </div>
                  </div>
                </div>
              ) : null}
              <img className="productItemImg" src={one.url} alt="상품사진" />
              <div className="productCont">
                <div className="productInfo">
                  <h4>{one.company}</h4>
                  <h2>{one.title}</h2>
                  <h3 className="price">
                    {one.price}
                    <span>원</span>
                  </h3>
                </div>
              </div>
            </Detail>
          ))}
        </Item>
      ))}
      ;
      <div className="productOpt">
        <p>택배배송/무료배송</p>
        <hr />
        <div className="productAmountCont">
          <button className="productAmountBtn left"></button>
          <span className="productAmountBtn text">1</span>
          <button className="productAmountBtn right"></button>
        </div>
        <hr />
        <div className="productPrice">
          <p>총 상품 금액</p>
          <p>
            <span>
              총 수량 <span className="green"> 1</span>
              <span className="after">개</span>
            </span>
            <span className="green point">17,500</span>
            <span className="green">원</span>
          </p>
        </div>
        <div className="productBtnCont">
          <button className="purchaseBtn">바로 구매</button>
          <button className="basketBtn">장바구니</button>
        </div>
      </div>
    </>
  );
};
const Detail = styled.section``;
const Item = styled.section`
  width: 80%;
  margin: 120px auto;
  display: flex;
  gap: 50px;
  .productItemImg {
    width: 600px;
    height: 600px;
  }
  .productCont {
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .productInfo {
      h4 {
        display: block;
        margin-bottom: 16px;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 23px;
        text-align: left;
        color: #767676;
      }
      h2 {
        display: block;
        margin-bottom: 20px;
        font-family: Spoqa Han Sans Neo;
        font-size: 36px;
        font-style: normal;
        font-weight: 400;
        line-height: 45px;
        letter-spacing: 0em;
        text-align: left;
      }
      .price {
        font-size: 36px;
        font-weight: 700;
        line-height: 45px;
        text-align: left;
        span {
          font-size: 18px;
          font-weight: 400;
          line-height: 23px;
          text-align: left;
        }
      }
    }
    .productOpt {
      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        color: #767676;
      }
      .productAmountCont {
        width: 150px;
        height: 50px;
        display: flex;
        margin: 30px 0;
        .productAmountBtn {
          width: 50px;
          height: 50px;
          box-sizing: border-box;
          display: inline-block;
          text-align: center;
          line-height: 50px;
          background-color: #fff;
          border: 1px solid #c4c4c4;
          &.left {
            background-image: url('/assets/icon-minus-line.svg');
            background-repeat: no-repeat;
            background-position: 15px;
            border-radius: 5px 0 0 5px;
          }
          &.right {
            background-image: url('/assets/icon-plus-line.svg');
            background-repeat: no-repeat;
            background-position: 15px;
            border-radius: 0 5px 5px 0;
          }
        }
      }
      .productPrice {
        display: flex;
        height: 50px;
        justify-content: space-between;
        align-items: center;
        margin: 30px 0;
        font-size: 18px;
        font-weight: 500;
        text-align: left;
        .gray {
          color: #767676;
        }
        .green {
          color: #21bf48;
        }
        .point {
          font-weight: 800;
          font-size: 36px;
          line-height: 45px;
        }
        .after::after {
          content: '';
          display: inline-block;
          width: 1px;
          height: 14px;
          margin: 0 8px;
          background-color: #2f2f2f;
        }
      }
      .productBtnCont {
        display: flex;
        gap: 14px;
        .purchaseBtn {
          width: 416px;
          height: 60px;
          border: none;
          background-color: #21bf48;
          color: #fff;
          border-radius: 5px;
          font-size: 18px;
          font-weight: 700;
          text-align: center;
        }
        .basketBtn {
          height: 60px;
          width: 200px;
          border-radius: 5px;
          background: #767676;
          border-radius: 5px;
          border: none;
          font-size: 18px;
          font-weight: 700;
          text-align: center;
          color: #fff;
        }
      }
    }
  }
`;
export default ProductItem;
