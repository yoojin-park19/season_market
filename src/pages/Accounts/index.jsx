import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginPages from './components/LoginPage';

const AccountIndexPage = () => {
  return (
    <Login>
      <img className="logo" src="./assets/logo.png" alt="season-market" />
      <div className="wrapLogin">
        <p>로그인</p>
        <LoginPages />
        <div className="wrapJoin">
          <Link to="/account/signup" className="btnJoin">
            회원가입
          </Link>
          <Link to="#" className="btnFind">
            비밀번호 찾기
          </Link>
        </div>
      </div>
    </Login>
  );
};

export default AccountIndexPage;

const Login = styled.section`
  font-family: 'GmarketSansMedium';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  .logo {
    width: 300px;
    margin-bottom: 30px;
  }
  .wrapLogin {
    width: 360px;
    display: flex;
    flex-direction: column;
    p {
      font-family: 'GmarketSansMedium';
      border: none;
      background-color: #fb838a;
      color: #fff;
      text-align: center;
      padding: 17px 15px;
    }
    .wrapJoin {
      margin: 10px 0 0 5px;
      text-align: center;
      .btnJoin {
        margin-right: 5px;
        font-size: 15px;
        color: #777;
        &:after {
          content: '/';
          margin-left: 5px;
        }
      }
      .btnFind {
        margin-right: 5px;
        font-size: 15px;
        color: #777;
      }
    }
  }
`;
