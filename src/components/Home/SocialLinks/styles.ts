import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1rem;
  width: 100%;
`;

export const Content = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 1rem;

    li {
      font-size: 2.2rem;
      color: var(--white);

      transition: color 0.2s ease-in-out;

      :hover {
        color: var(--green);
      }
    }
  }
`;
