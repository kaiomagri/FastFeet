import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid #dddd;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  width: 237px;

  svg {
    margin: 0px 10px;
  }

  input {
    line-height: 36px;
    border: none;
  }
`;
