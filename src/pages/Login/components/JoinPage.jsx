import styled from 'styled-components';
const JoinPages = () => {
  return (
    <JoinPage>
      <div className="wrapForm">
        <div className="inputCont">
          <form>
            <input className="inputId" type="text" placeholder="아이디" />
            <input className="inputPw" type="password" placeholder="비밀번호" />
            <input
              className="reInputPw"
              type="password"
              placeholder="비밀번호 재확인"
            />
            <input className="inputname" type="text" placeholder="이름" />
            <button action="/Home">가입하기</button>
          </form>
        </div>
      </div>
    </JoinPage>
  );
};

const JoinPage = styled.section`
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
        width: 320px;
        height: 60px;
        background-color: #fb838a;
        color: #fff;
        border: none;
        border-radius: 5px;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        margin-top: 16px;
      }
    }
  }
`;
export default JoinPages;
