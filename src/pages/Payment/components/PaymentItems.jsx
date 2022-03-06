import styled from 'styled-components';

const PaymentItems = () => {
  return (
    <PaymentItem>
      <div className="contItem">
        <div className="contLeft">
          <img src="./assets/rose.jpeg" alt="상품 이미지" />
          <div className="desItem">
            <p>장미는 사랑입니다.</p>
            <p>장미의 꽃말은 "사랑" 입니다.</p>
            <p>금액: 25000원</p>
          </div>
        </div>
        <p>수량: 1개</p>
        <div className="contRight">
          <p>무료배송</p>
          <p>25000원</p>
        </div>
      </div>
    </PaymentItem>
  );
};

const PaymentItem = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  .contItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 798px;
    padding: 15px 50px;
    border-bottom: 1px solid #f77d75;
    img {
      width: 104px;
      height: 104px;
      border-radius: 10px;
      margin-right: 50px;
    }
    .contLeft {
      display: flex;
      .desItem {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        gap: 10px;
        }
      }
    }
  }
`;
export default PaymentItems;
