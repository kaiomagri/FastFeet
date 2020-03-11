import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7159c1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  text-align: center;

  div {
    background: #fff;
    padding: 50px 30px;
    border-radius: 4px;
    form {
      display: flex;
      flex-direction: column;
      margin-top: 30px;

      label {
        font-weight: bold;
        align-self: flex-start;
        padding-bottom: 10px;
        color: #444444;
      }

      input {
        background: #fff;
        border: 0;
        border-radius: 4px;
        line-height: 45px;
        padding: 0 15px;
        color: #999999;
        margin: 0 0 10px;
        border: 1px solid #dddddd;
        opacity: 1;
        width: 300px;

        &::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
      }

      span {
        color: #fb6f91;
        align-self: flex-start;
        margin: 0 0 10px;
        font-weight: bold;
      }

      button {
        margin-top: 15px;
        height: 45px;
        background: #7159c1;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.03, '#7159c1')};
        }
      }
    }
  }
`;
