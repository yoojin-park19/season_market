import styled from 'styled-components';
const PaymentInfo = () => {
  return (
    <PaymentInfos>
      <form action="">
        <h2>배송정보</h2>
        <ul className="buyerInfo">
          <li>
            <h3>주문자 정보</h3>
          </li>
          <li className="name">
            <span>이름</span>
            <input type="text" />
          </li>
          <li className="cell-number">
            <span>휴대폰</span>
            <input type="number" />-
            <input type="number" />-
            <input type="number" />
          </li>
          <li className="email">
            <span>이메일</span>
            <input type="email" />
          </li>
        </ul>
        <ul className="addressInfoCont">
          <li>
            <h3>배송지 정보</h3>
          </li>
          <li className="recipient">
            <span>수령인</span>
            <input type="text" />
          </li>
          <li className="rec-cell-number">
            <span>휴대폰</span>
            <input type="number" />-
            <input type="number" />-
            <input type="number" />
          </li>
          <li className="address">
            <span>배송주소</span>
            <input type="text" />
            <button>우편번호 조회</button>
            <div className="details">
              <input type="text" />
              <input type="text" />
            </div>
          </li>
          <li className="message">
            <span>배송 메세지</span>
            <input type="text" />
          </li>
        </ul>
      </form>
    </PaymentInfos>
  );
};

const PaymentInfos = styled.section`
  width: 875px;
  margin: 80px auto;
  h2 {
    padding-bottom: 18px;
    margin-bottom: 40px;
    border-bottom: 1px solid #c4c4c4;
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
  }
  ul {
    li {
      line-height: 56px;
      border-bottom: 1px solid #c4c4c4;
      height: 56px;
      padding: 8px 0;
      h3 {
        display: block;
        font-size: 18px;
        font-weight: 500;
        line-height: 83px;
      }
      input {
        height: 40px;
      }
      span {
        display: inline-block;
        width: 170px;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
      }
    }
    .address {
      border: none;
      margin-bottom: 100px;
      button {
        width: 154px;
        height: 40px;
        border-radius: 5px;
        background: #f77d75;
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        margin-bottom: 8px;
        border: none;
        margin-left: 10px;
      }
      .details {
        display: flex;
        flex-direction: column;
        margin-left: 170px;
        input {
          width: 620px;
          height: 40px;
          margin-bottom: 8px;
        }
      }
    }
  }
  .buyerInfo {
    margin-bottom: 40px;
  }
  .name,
  .email,
  .recipient {
    input {
      width: 350px;
    }
  }
  .rec-cell-number,
  .cell-number {
    input {
      width: 100px;
      margin-left: 10px;
      margin-right: 10px;
      &:nth-child(2) {
        width: 80px;
        margin-left: 0px;
        margin-right: 10px;
      }
    }
  }
  .message {
    border-top: 1px solid #c4c4c4;
    input {
      height: 40px;
      width: 620px;
    }
  }
`;
export default PaymentInfo;
