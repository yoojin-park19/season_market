import styled from 'styled-components';
import { URL } from '../../../constants';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
const LoginPages = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const history = useHistory();

  const handleIdInput = (event) => {
    setEmail(event.target.value);
  };

  const handlePwInput = (event) => {
    setPw(event.target.value);
  };

  const submitLogin = async () => {
    try {
      const res = await fetch(`${URL}/accounts/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email,
          password: pw,
          login_type: 'BUYER',
        }),
      });
      const json = await res.json();
      console.log(json);
      if (json.user.token) {
        localStorage.setItem('Token', json.user.token);
        localStorage.setItem('accountname', json.user.accountname);
        history.push('/home');
      }
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };
  return (
    <LoginPage>
      <div className="wrapForm">
        <div className="inputCont">
          <form method="POST">
            <input
              onChange={handleIdInput}
              className="inputId"
              type="text"
              placeholder="아이디"
            />
            <input
              onChange={handlePwInput}
              className="inputPw"
              type="password"
              placeholder="비밀번호"
            />
            <button
              type="button"
              // action="/Home"
              onClick={submitLogin}
            >
              로그인
            </button>
          </form>
        </div>
      </div>
    </LoginPage>
  );
};

const LoginPage = styled.section`
  font-family: 'GmarketSansMedium';
  .wrapForm {
    border: 2px solid #fb838a;
    border-top: none;
    width: 360px;
    margin: 0 auto;
    position: relative;
    box-sizing: border-box;
  }
  .inputCont {
    height: 292px;
    margin: 0 10px;
    background-color: #fff;
    position: relative;
    form {
      height: inherit;
      gap: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      input {
        width: 320px;
        height: 60px;
        border: none;
        border-bottom: 1px solid #fb838a;
      }
      button {
        width: 320px;
        height: 60px;
        background-color: rgb(243, 174, 177);
        color: #fff;
        border: none;
        border-radius: 5px;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        margin-top: 16px;
        &.active {
          background-color: #fb838a;
        }
      }
    }
  }
`;
export default LoginPages;
