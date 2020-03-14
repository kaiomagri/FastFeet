import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;
`;

export const ActionLi = styled.div`
  position: absolute;
  width: 150px;
  left: calc(50% - 50px);
  top: calc(100% + 10px);
  background: #f5f5f5;
  border-radius: 4px;
  padding: 15px 5px;
  display: ${props => (props.visible ? 'block' : 'none')};
  box-shadow: 0px 0px 2px #00000026;
  z-index: 5;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0px;
    height: 0px;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid #f5f5f5;
  }
`;
export const Action = styled.div`
  display: flex;
  align-items: center;

  span {
    padding-left: 20px;
    font-size: 16px;
    color: #999999;
  }
  & + div {
    padding-top: 10px;
    margin-top: 10px;
    border-top: 1px solid #eeeeee;
  }
`;
