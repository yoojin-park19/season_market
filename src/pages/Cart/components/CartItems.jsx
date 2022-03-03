import styled from 'styled-components';
const CartItems = () => {
  return (
    <CartItem>
      <div className="contItem">
        <div className="itemLeft">
          <label htmlFor="checkItem"></label>
          <input type="checkbox" id="checkItem" />
          <img src="/assets/tulip.jpeg" alt="상품이미지" />
          <div className="itemDec">
            <p>꽃이좋은가봉가</p>
            <p>튤립의 꽃말은 "사랑의 고백" 입니다.</p>
            <p>20000원</p>
          </div>
        </div>
        <div className="productAmountCont">
          <button className="productAmountBtn left"></button>
          <span className="productAmountBtn text">1</span>
          <button className="productAmountBtn right"></button>
        </div>
        <div className="itemRight">
          <p>20000원</p>
          <button>주문하기</button>
        </div>
      </div>
    </CartItem>
  );
};

const CartItem = styled.section`
  font-family: 'GmarketSansMedium';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  .contItem {
    border: 1px solid #cfcfcf;
    width: 850px;
    margin: 20px;
    padding: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .itemLeft {
      display: flex;
      align-items: center;
      gap: 10px;
      img {
        width: 160px;
        height: 160px;
      }
      label {
        background: url('./assets/check-box.svg') no-repeat;
        width: 25px;
        height: 25px;
      }
      input {
        display: none;
      }
    }
    .productAmountCont {
      height: 50px;
      display: flex;
      margin: 30px 0;
      .productAmountBtn {
        width: 40px;
        height: 40px;
        box-sizing: border-box;
        display: inline-block;
        text-align: center;
        line-height: 43px;
        background-color: #fff;
        border: 1px solid #c4c4c4;
        &.left {
          background-image: url('/assets/icon-minus-line.svg');
          background-repeat: no-repeat;
          background-position: 9px;
          border-radius: 5px 0 0 5px;
        }
        &.right {
          background-image: url('/assets/icon-plus-line.svg');
          background-repeat: no-repeat;
          background-position: 9px;
          border-radius: 0 5px 5px 0;
        }
      }
    }
    .itemRight {
      p {
        font-size: 24px;
        margin-bottom: 8px;
      }
      button {
        background-color: #f77d75;
        border: none;
        color: #fff;
        width: 90px;
        height: 35px;
        font-weight: 700;
      }
    }
  }
`;
export default CartItems;
