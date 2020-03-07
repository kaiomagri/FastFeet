import styled from 'styled-components';

export const Container = styled.div`
  div {
    margin-top: 34px;
    display: flex;
    justify-content: space-between;

    input {
      width: 237px;
      border: 1px solid #dddddd;
      border-radius: 4px;
      opacity: 1;
      text-align: center;
      position: relative;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #7d40e7 0% 0% no-repeat padding-box;
      border-radius: 4px;
      opacity: 1;
      width: 142px;
      height: 36px;
      border: none;

      span {
        color: #fff;
        font-weight: bold;
        font-size: 16px;
        padding-left: 5px;
      }
    }
  }
`;
