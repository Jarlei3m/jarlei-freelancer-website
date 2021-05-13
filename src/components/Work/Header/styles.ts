import styled from 'styled-components';

export const Container = styled.header`
  h1 {
    font-size: 6rem;

    span {
      color: var(--green);
    }
  }

  @media (max-width: 731px) {
    h1 {
      font-size: 5rem;
    }
  }

  @media (max-width: 540px) {
    h1 {
      font-size: 4.5rem;
      white-space: nowrap;
    }
  }

  @media (max-width: 375px) {
    h1 {
      font-size: 4rem;
    }
  }

  @media (max-width: 320px) {
    h1 {
      font-size: 3.5rem;
    }
  }
`;
