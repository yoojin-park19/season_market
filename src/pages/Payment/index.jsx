import HomeHeader from '../Home/components/HomeHeader';
import PaymentHeader from './components/PaymentHeader';
import PaymentItems from './components/PaymentItems';
import PaymentTotalPrice from './components/PaymentTotalPrice';
import PaymentBottom from './components/PaymentBottom';
const PaymentIndexPage = () => {
  return (
    <>
      <HomeHeader />
      <PaymentHeader />
      <PaymentItems />
      <PaymentTotalPrice />
      <PaymentBottom />
    </>
  );
};

export default PaymentIndexPage;
