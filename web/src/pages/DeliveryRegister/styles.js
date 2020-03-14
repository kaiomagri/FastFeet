import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  padding-top: 30px;
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  max-width: 900px;

  strong {
    font-size: 24px;
  }
`;
export const ContentHeader = styled.div`
  div {
    display: flex;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 112px;
      height: 36px;
      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
      background: #cccccc;
      border: none;
      border-radius: 4px;
      opacity: 1;

      & + button {
        margin-left: 10px;
        background: #7d40e7 0% 0% no-repeat padding-box;
      }

      span {
        color: #fff;
        font-weight: bold;
        font-size: 14px;
        padding-left: 5px;
      }
    }
  }
`;
