import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--gray-400);
  width: 100%;

  h2 {
    letter-spacing: 0.8px;
    /* margin: 0.5rem; */
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    color: var(--white);
  }

  @media (max-width: 500px) {
    margin: 1rem 0;
    h2 {
      font-size: 1.3rem;
      padding: 0.6rem;
    }
  }

  @media (max-width: 360px) {
    h2 {
      font-size: 1.2rem;
    }
  }
`;
