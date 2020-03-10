import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 34px;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;

    border: 1px solid #dddd;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    width: 237px;

    .icon-search {
      margin: 0px 10px;
    }

    input {
      line-height: 36px;
      border: none;
    }
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
`;
