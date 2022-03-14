import styled from 'styled-components';
import { useState } from 'react';
import { URL } from '../../../constants';
const JoinPages = () => {
  const [error, setError] = useState('');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [name, setName] = useState('');

  const handleIdInput = (event) => {
    setId(event.target.value);
  };
  const handlePwInput = (event) => {
    setPw(event.target.value);
  };

  const handlePwInput2 = (event) => {
    setPw2(event.target.value);
  };
  const handlePhone_number = (event) => {
    setPhone_number(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };

  const checkJoin = () => {
    if (pw.length < 6) {
      setError('pw');
      return;
    } else submitJoin();
  };

  const submitJoin = async () => {
    try {
      const res = await fetch(`${URL}/accounts/signup/`, {
        method: 'POST',
        redirect: 'follow',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: id,
          password: pw,
          password2: pw2,
          phone_number: phone_number,
          name: name,
          user_type: 'BUYER',
        }),
      });
      const json = await res.json();
      console.log(json);
      console.log(res);
      if (res.status !== 201) {
        alert(json[Object.keys(json)[0]]);
      }
    } catch (err) {
      setError('id');
      console.log(err);
    }
  };

  return (
    <JoinPage>
      <img className="logo" src="../../assets/logo.png" alt="season-market" />
      <div className="wrapForm">
        <div className="inputCont">
          <p>회원가입</p>
          <form method="POST">
            <input
              id="id"
              type="email"
              placeholder="이메일 주소를 입력해 주세요."
              onChange={handleIdInput}
            />
            <Error>*사용중인 아이디 입니다.</Error>
            <input
              required
              className="inputPw"
              type="password"
              placeholder="비밀번호"
              onChange={handlePwInput}
              autoComplete="off"
            />
            <input
              required
              className="inputPw"
              type="password"
              placeholder="비밀번호"
              onChange={handlePwInput2}
              autoComplete="off"
            />
            <Errorpw display={error}>
              *비밀번호는 6자 이상이어야 합니다.
            </Errorpw>
            <input
              onChange={handlePhone_number}
              className="inputnumber"
              type="text"
              placeholder="전화번호"
            />
            <input
              onChange={handleName}
              className="inputname"
              type="text"
              placeholder="이름"
            />
            <button
              disabled={!(id && pw && pw2 && phone_number && name)}
              type="button"
              action="/"
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  .logo {
    width: 300px;
    margin-bottom: 30px;
  }
  .wrapForm {
    border: 2px solid #fb838a;
    border-top: none;
    width: 360px;
    margin: 0 auto;
    box-sizing: border-box;
    p {
      font-family: 'GmarketSansMedium';
      border: none;
      background-color: #fb838a;
      color: #fff;
      text-align: center;
      padding: 17px 15px;
    }
  }
  .inputCont {
    height: 550px
    margin: 0px 10px;
    background-color: #fff;
    position: relative;
    form {
      padding: 20px 0;
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
        background-color:#fb838a ;
        color: #fff;
        border: none;
        border-radius: 5px;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        margin-top: 16px;
        &:disabled {
          background-color: rgb(243, 174, 177);
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
