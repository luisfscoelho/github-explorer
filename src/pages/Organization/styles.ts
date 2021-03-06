import styled from 'styled-components';

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
`;

export const About = styled.div`
  ul {
    display: flex;
    list-style: none;
    align-items: center;
    margin-top: 40px;

    li {
      color: #3d3d4d;

      & + li {
        margin-left: 80px;
      }

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
