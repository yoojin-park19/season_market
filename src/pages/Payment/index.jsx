import HomeHeader from '../Home/components/HomeHeader';
import PaymentHeader from './components/PaymentHeader';
import PaymentItems from './components/PaymentItems';
import PaymentTotalPrice from './components/PaymentTotalPrice';

const PaymentIndexPage = () => {
  return (
    <>
      <HomeHeader />
      <PaymentHeader />
      <PaymentItems />
      <PaymentTotalPrice />
    </>
  );
};

export default PaymentIndexPage;
