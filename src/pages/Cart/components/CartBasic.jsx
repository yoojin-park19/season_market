import styled from 'styled-components';
const CartBasic = () => {
  return (
    <CartMain>
      <p>장바구니에 담긴 상품이 없습니다.</p>
      <p>원하는 상품을 장바구니에 담아보세요</p>
      <div className="cartBottom"></div>
    </CartMain>
  );
};

const CartMain = styled.section`
  font-family: 'GmarketSansMedium';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
`;
export default CartBasic;
