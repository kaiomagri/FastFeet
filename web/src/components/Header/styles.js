import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  max-width: 1440px;
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
      width: 180px;
      height: 30px;
    }

    ul {
      display: flex;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const MenuItem = styled.li`
  & + li {
    padding-left: 20px;
    margin-left: 20px;
  }
  a {
    font-weight: bold;
    font-size: 15px;
    color: ${props => (props.active ? '#444444' : '#999999')};
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #666666;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #de3b3b;
    }
  }
`;
