import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;

  overflow: hidden;

  background-image: url('/background.jpg');
  background-attachment: fixed;
  background-size: cover;

  ::after {
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;

    background: var(--gray-500);
    /* z-index: -1; */
  }
`;
export const Content = styled.section`
  z-index: 5;
  padding: 0 4rem;
  margin-bottom: 8rem;
  width: 100%;

  @media (max-width: 425px) {
    padding: 0 2rem;
  }

  @media (max-width: 360px) {
    padding: 0 1.5rem;
  }
`;
