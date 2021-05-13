import styled from 'styled-components';

export const Container = styled.header`
  h1 {
    font-size: 6rem;
    color: var(--white);

    span {
      color: var(--green);
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 5rem;
    }
  }

  @media (max-width: 360px) {
    h1 {
      font-size: 4.5rem;
    }
  }
`;
