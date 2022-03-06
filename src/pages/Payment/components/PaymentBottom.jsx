import styled from 'styled-components';
import PaymentInfo from './PaymentInfo';
import PaymentWay from './PaymentWay';
const PaymentBottom = () => {
  return (
    <PaymentBottoms>
      <PaymentInfo />
      <div className="payWithCont">
        <PaymentWay />
      </div>
    </PaymentBottoms>
  );
};

const PaymentBottoms = styled.section`
  width: 890px;
  margin: 0 auto;
  .payWithCont {
    display: flex;
    gap: 40px;
    margin-bottom: 130px;
  }
`;
export default PaymentBottom;
