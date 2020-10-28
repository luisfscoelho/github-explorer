import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const SubTitle = styled.h2`
  font-size: 32px;
  color: #3a3a3a;

  margin-top: 80px;
`;

export const UserInfo = styled.section`
  margin-top: 80px;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const About = styled.div`
  ul {
    display: flex;
    list-style: none;
    align-items: center;

    li {
      color: #3d3d4d;

      a {
        text-decoration: none;
        color: #3d3d4d;
      }

      svg {
        margin-right: 8px;
      }
    }
  }
`;
