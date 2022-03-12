import styled from 'styled-components';
import { useState } from 'react';
import { URL } from '../../../constants';
const JoinPages = ({ setMode, handleUserdata }) => {
  return (
    <JoinPage>
      <img className="logo" src="../../assets/logo.png" alt="season-market" />
      <div className="wrapForm">
        <div className="inputCont">
          <p>회원가입</p>
          <form>
            <input
              required
              className="inputId"
              type="text"
              placeholder="아이디(이메일 주소)"
            />
            <Error>*사용중인 아이디 입니다.</Error>
            <input
              required
              className="inputPw"
              type="password"
              placeholder="비밀번호"
              autoComplete="off"
            />
            <Errorpw>*비밀번호는 6자 이상이어야 합니다.</Errorpw>
            <input className="inputname" type="text" placeholder="이름" />

            <button type="button">가입하기</button>
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
