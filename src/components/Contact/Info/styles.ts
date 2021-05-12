import styled from 'styled-components';

export const InfoContainer = styled.section`
  width: 100%;
  margin: 0 auto;
`;

export const InfoContent = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr 2fr;

  div {
    margin-top: 3.8rem;
    color: #ccc;

    h4 {
      font-size: 0.65rem;

      margin-bottom: 1.8rem;
    }

    address {
      font-style: normal;
      font-size: 0.8rem;
      line-height: 2rem;
    }
  }
`;

export const SocialLinks = styled.div`
  ul {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    height: 100%;
    gap: 1rem;

    svg {
      font-size: 1.2rem;
      transition: all 0.2s ease-out;
      cursor: pointer;

      &:hover {
        color: var(--green);
      }
    }
  }
`;
