import styled from 'styled-components';

export const Container = styled.table`
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

  thead tr td div {
    display: flex;
    justify-content: flex-end;
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
