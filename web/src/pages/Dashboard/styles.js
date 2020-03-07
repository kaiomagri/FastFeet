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
