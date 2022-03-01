import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Items from '../../../constants/database';

const HomeItems = () => {
  return (
    <HomeItem>
      <ul>
        {Items.map((item, index) => (
          <>
            {}
            <IMG src={item.url} key={index} />
            <p className="company">{item.company}</p>
            <p className="title">{item.title}</p>
            <p className="price">{item.price}원</p>
          </>
        ))}
      </ul>
    </HomeItem>
  );
};

const IMG = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
`;

const HomeItem = styled.section`
  width: 380px;
  height: 490px;
  margin-top: 80px;

  .company {
    font-size: 16px;
    line-height: 22px;
    color: #767676;
  }
  .title {
    font-size: 18px;
    line-height: 22px;
  }
  .price {
    font-size: 24px;
    line-height: 30px;
    font-weight: 700;
  }
`;
export default HomeItems;
