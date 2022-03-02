import HomeHeader from '../Home/components/HomeHeader';
import CartHeader from './components/CartHeader';
import CartItems from './components/CartItems';
import CartBasic from './components/CartBasic';
import ItemCal from './components/ItemCal';
const CartIndexPage = () => {
  return (
    <>
      <HomeHeader />
      <CartHeader />
      <CartBasic />
      <CartItems />
      <ItemCal />
    </>
  );
};

export default CartIndexPage;
