import styled from 'styled-components';
const PaymentWay = () => {
  return (
    <Paymentways>
      <h2>결제수단</h2>
      <div className="paywithCont">
        <input type="radio" id="credit" name="paywith" value="paywith" />
        <label htmlFor="credit">신용/체크카드</label>
        <input type="radio" id="bankbook" name="paywith" value="paywith" />
        <label htmlFor="bankbook">무통장 입금</label>
        <input type="radio" id="cellphone" name="paywith" value="paywith" />
        <label htmlFor="cellphone">휴대폰 결제</label>
        <input type="radio" id="naver" name="paywith" value="paywith" />
        <label htmlFor="naver">네이버페이</label>
        <input type="radio" id="kakao" name="paywith" value="paywith" />
        <label htmlFor="kakao">카카오페이</label>
      </div>
    </Paymentways>
  );
};

const Paymentways = styled.section`
  width: 875px;
  height: 108px;
  h2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
    margin-bottom: 18px;
  }
  .paywithCont {
    border-bottom: 1px solid #c4c4c4;
    border-top: 1px solid #c4c4c4;
    padding: 18px 0;
    label {
      margin: 0 20px 0 10px;
      line-height: 20px;
      padding: 12px 10px 12px 0;
      border: 4px solid transparent;
    }
  }
`;
export default PaymentWay;
