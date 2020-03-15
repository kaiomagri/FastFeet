import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    margin-right: 15px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background: ${props => props.backColor};
    margin-right: 15px;

    span {
      color: ${props => props.textColor};
      font-size: 16px;
      text-transform: uppercase;
    }
  }
`;
