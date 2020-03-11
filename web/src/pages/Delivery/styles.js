import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  padding-top: 30px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1200px;

  strong {
    font-size: 24px;
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const ContentTable = styled.table`
  border-spacing: 0px 20px;
  padding-top: 20px;

  thead {
    padding-bottom: 10px;
  }

  thead tr {
    font-size: 16px;
    font-weight: bold;
    text-align: left;
  }

  thead td {
    padding: 0 20px 0 20px;
  }

  tbody tr {
    height: 57px;
    font-size: 16px;
    text-align: left;
    border-radius: 4px;
  }

  tbody td {
    background: #fff;
    padding: 20px;
    color: #666666;
    font-size: 16px;
    border-radius: 4px;
  }
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

export const Action = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
