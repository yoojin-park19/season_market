import styled from 'styled-components';

const PaymentItems = () => {
  return (
    <PaymentItem>
      <div className="contLeft">
        <img src="./assets/rose.jpeg" alt="상품 이미지" />
        <div className="desItem">
          <p>장미는 사랑입니다.</p>
          <p>장미의 꽃말은 "사랑" 입니다.</p>
          <p>25000원</p>
          <p>수량: 1개</p>
        </div>
      </div>
      <div className="contRight">
        <p>무료배송</p>
        <p>25000원</p>
      </div>
    </PaymentItem>
  );
};

const PaymentItem = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  padding: 15px 50px;
  margin-left: 10px;
  border: 1px solid #f77d75;
  img {
    width: 104px;
    height: 104px;
    border-radius: 10px;
    margin-right: 50px;
  }
  .contLeft {
    display: flex;
  }
`;
export default PaymentItems;
