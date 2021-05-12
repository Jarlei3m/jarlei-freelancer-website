import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;

  background-image: url('/background.jpg');
  background-attachment: fixed;
  background-size: cover;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;

    background: var(--gray-500);
    /* z-index: -1; */
  }
`;
export const Content = styled.section`
  z-index: 5;
  padding: 0 4rem;
  margin-bottom: 8rem;
  width: 100%;
`;