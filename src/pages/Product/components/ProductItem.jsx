import styled from 'styled-components';
import Items from '../../../constants/database';
import { useParams } from 'react-router';

const ProductItem = () => {
  const paramsId = parseInt(useParams().id);
  console.log(typeof paramsId);

  return (
    <ProductItems>
      {Items.map((item, index) => (
        <Item key={index}>
          {item.season.map((season, id) => (
            <>
              {paramsId === season.id ? (
                <div className="contItem">
                  <img
                    className="productItemImg"
                    src={season.url}
                    alt="상품사진"
                  />
                  <div className="productCont">
                    <div className="productInfo">
                      <h4>{season.company}</h4>
                      <h2>{season.title}</h2>
                      <h3 className="price">
                        {season.price}
                        <span>원</span>
                      </h3>
                    </div>
                  </div>
                </div>
              ) : null}
            </>
          ))}
        </Item>
      ))}
      <ContCart>
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
      </ContCart>
    </ProductItems>
  );
};
const ProductItems = styled.section`
  width: 70%;
  margin: 120px auto;
  display: flex;
  gap: 20px;
`;
const Item = styled.section`
  height: 600px;
    .productItemImg {
      width: 500px;
      height: 500px;
    }
    .productCont {
      width: 500px;
      .productInfo {
        padding:40px 0;
        border: 2px solid #fd8789;
        text-align: center;
        h4 {
          display: block;
          margin-bottom: 16px;
          font-size: 20px;
          color: #767676;
          margin: 10px 0;
        }
        h2 {
          display: block;
          margin-bottom: 20px;
          font-size: 30px;
          font-weight: 400;
          letter-spacing: 0em;
        }
        .price {
          font-size: 25px;
          font-weight: 700;
          span {
            font-size: 18px;
            font-weight: 400;
            line-height: 23px;
          }
        }
      }
    }
  }
`;

const ContCart = styled.section`
    .productOpt {
      width: 500px;
      p {
        font-size: 20px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        color: #767676;
      }
      .productAmountCont {
        width: 200px;
        height: 80px;
        display: flex;
        padding: 10px 0;
        .productAmountBtn {
          width: 100px;
          height: 80px;
          box-sizing: border-box;
          display: inline-block;
          text-align: center;
          line-height: 80px;
          background-color: #fff;
          border: 1px solid #c4c4c4;
          &.left {
            background-image: url('/assets/icon-minus-line.svg');
            background-repeat: no-repeat;
            background-position: 24px;
            border-radius: 5px 0 0 5px;
          }
          &.right {
            background-image: url('/assets/icon-plus-line.svg');
            background-repeat: no-repeat;
            background-position: 24px;
            border-radius: 0 5px 5px 0;
          }
        }
      }
      .productPrice {
        display: flex;
        height: 90px;
        justify-content: space-between;
        align-items: center;
        margin: 30px 0;
        font-size: 18px;
        font-weight: 500;
        text-align: left;
        .gray {
          color: #fd8789;
        }
        .green {
          color: #fd8789;
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
          height: 90px;
          border: none;
          background-color: #fd8789;
          color: #fff;
          border-radius: 5px;
          font-size: 18px;
          font-weight: 700;
          text-align: center;
        }
        .basketBtn {
          height: 90px;
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
`;

export default ProductItem;
