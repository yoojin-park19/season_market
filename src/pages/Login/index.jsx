import styled from 'styled-components';
import { useState, useRef } from 'react';
import LoginPages from './components/LoginPage';
import JoinPages from './components/JoinPage';
const LoginIndexPage = () => {
  let [activeBtn, setActiveBtn] = useState(true);
  const loginButton = useRef(null);
  const joinButton = useRef(null);

  const handleToggle = (event) => {
    setActiveBtn((activeBtn = !activeBtn));
    if (activeBtn === true) {
      joinButton.current.classList.remove('click');
      loginButton.current.classList.add('click');
    } else {
      joinButton.current.classList.add('click');
      loginButton.current.classList.remove('click');
    }
  };
  return (
    <Login>
      <img className="logo" src="./assets/logo.png" alt="season-market" />
      <div className="wrapLogin">
        <div className="contBtn">
          <button
            ref={loginButton}
            className="btnLogin click"
            onClick={handleToggle}
          >
            로그인
          </button>
          <button ref={joinButton} className="btnJoin" onClick={handleToggle}>
            회원가입
          </button>
        </div>
        {activeBtn ? <LoginPages /> : <JoinPages />}
      </div>
    </Login>
  );
};

export default LoginIndexPage;

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
  .contBtn {
    width: 360px;
    display: flex;
    button {
      font-family: 'GmarketSansMedium';
      border: none;
      background-color: #fb838a;
      color: #fff;
      width: 180px;
      padding: 17px 15px;
    }
    .btnLogin {
      border-top: 2px solid #fb838a;
      border-left: 2px solid #fb838a;
      border-right: 1px solid #fb838a;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      &.click {
        background-color: #fff;
        color: #000;
      }
    }
    .btnJoin {
      border-top: 2px solid #fb838a;
      border-right: 2px solid #fb838a;
      border-left: 1px solid #fb838a;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      &.click {
        background-color: #fff;
        color: #000;
      }
    }
  }
`;
