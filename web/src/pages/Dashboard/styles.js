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
  flex-direction: column;
  flex: 1;
  max-width: 1200px;

  strong {
    font-size: 24px;
  }
`;

export const ContentTable = styled.table`
  border-spacing: 0px 20px;
  padding-top: 30px;

  thead {
    padding-bottom: 10px;
  }

  thead tr {
    font-size: 16px;
    font-weight: bold;
    text-align: left;
  }

  thead td {
    padding: 20px;
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
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }

  span {
    padding-left: 15px;
  }
`;

export const StatusPoint = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 30px;
  background: #dff0df;
  border-radius: 50px;

  span {
    color: #2ca42b;
    font-weight: bold;
  }
`;

export const Action = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
