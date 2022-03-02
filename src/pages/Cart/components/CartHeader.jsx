import styled from 'styled-components';
const CartHeader = () => {
  return (
    <CartHead>
      <h1>장바구니</h1>
      <div className="barMenu">
        <img src="./assets/check-fill-box.svg" alt="체크" />
        <p>상품정보</p>
        <p>수량</p>
        <p>상품금액</p>
      </div>
    </CartHead>
  );
};

const CartHead = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  h1 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 40px;
  }
  .barMenu {
    width: 800px;
    display: flex;
    justify-content: space-between;
    background-color: #f77d75;
    padding: 15px 50px;
    color: #fff;
    font-weight: 700;
  }
`;
export default CartHeader;
