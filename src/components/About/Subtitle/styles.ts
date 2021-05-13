import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--gray-400);
  width: 100%;

  h2 {
    letter-spacing: 0.8px;
    margin: 0.5rem;
    padding: 0.2rem 1rem;
    font-size: 1.5rem;
  }

  @media (max-width: 540px) {
    h2 {
      font-size: 1.3rem;
      padding: 0.2rem 0.6rem;
    }
  }

  @media (max-width: 320px) {
    h2 {
      font-size: 1.2rem;
      padding: 0.4rem 0.2rem;
    }
  }
`;
