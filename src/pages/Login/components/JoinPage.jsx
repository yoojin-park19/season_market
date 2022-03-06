import styled from 'styled-components';
import { useState } from 'react';
const JoinPages = ({ setMode, handleUserdata }) => {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const checkEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  const handleIdInput = (event) => {
    setEmail(event.target.value);
  };

  const handlePwInput = (event) => {
    setPw(event.target.value);
  };

  const checkJoin = () => {
    if (pw.length < 6) {
      setError('pw');
      return;
    } else submitJoin();
  };
  const submitJoin = async () => {
    try {
      const res = await fetch(`localhost:3000/user/emailvalid`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            email: email,
          },
        }),
      });
      const json = await res.json();
      if (json.message === '이미 가입된 이메일 주소 입니다.') {
        setError('email');
      } else {
        handleUserdata('email', email);
        handleUserdata('password', pw);
        setMode(false);
      }
    } catch (err) {
      setError('email');
      console.log(err);
    }
  };

  return (
    <JoinPage>
      <div className="wrapForm">
        <div className="inputCont">
          <form>
            <input
              required
              className="inputId"
              type="text"
              placeholder="아이디(*이메일 주소)"
              onChange={handleIdInput}
            />
            <Error display={error}>*사용중인 아이디 입니다.</Error>
            <input
              required
              className="inputPw"
              type="password"
              placeholder="비밀번호"
              onChange={handlePwInput}
              autoComplete="off"
            />
            <Errorpw display={error}>
              *비밀번호는 6자 이상이어야 합니다.
            </Errorpw>
            <input className="inputname" type="text" placeholder="이름" />
            <input
              className="inputNumber"
              type="number"
              placeholder="휴대폰 번호"
            />
            <button
              type="button"
              disabled={!(checkEmail.test(email) && pw.length > 2)}
              onClick={checkJoin}
            >
              가입하기
            </button>
          </form>
        </div>
      </div>
    </JoinPage>
  );
};

const JoinPage = styled.section`
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
    height: 550px
    margin: 0px 10px;
    padding: 20px 0;
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
        font-family: 'GmarketSansMedium';
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
          background-color: #fb838a
        }
      }
    }
  }
`;

const Error = styled.strong`
  margin-top: 6px;
  display: ${(props) => (props.display === 'email' ? 'block' : 'none')};
  color: #eb5757;
  font-size: 12px;
  line-height: 14px;
`;

const Errorpw = styled.strong`
  margin-top: 6px;
  display: ${(props) => (props.display === 'pw' ? 'block' : 'none')};
  color: #eb5757;
  font-size: 12px;
  line-height: 14px;
`;
export default JoinPages;
