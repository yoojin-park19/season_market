import { Link } from 'react-router-dom';
import styled from 'styled-components';
const PaymentTotalPrice = () => {
  return (
    <PaymentTotalPrices>
      <p className="totalPrice">
        총 주문 금액 <span className="empha">46,500</span>
        <span className="empha">원</span>
      </p>
    </PaymentTotalPrices>
  );
};

const PaymentTotalPrices = styled.section`
  font-size: 18px;
  font-weight: 500;
  line-height: 23px;
  .totalPrice {
    width: 1280px;
    display: block;
    margin: 30px auto 0;
    text-align: end;
  }
  .empha {
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    color: #eb5757;
    margin-left: 10px;
  }
`;
export default PaymentTotalPrice;
