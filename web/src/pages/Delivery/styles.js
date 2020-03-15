import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const AvatarDeliveryman = styled.div`
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

export const StatusPoint = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  background: ${props => props.backColor};
  border-radius: 50px;
  width: 120px;

  span {
    color: ${props => props.textColor};
    font-weight: bold;
    padding-left: 5px;
    font-size: 12px;
    text-transform: uppercase;
  }
`;
