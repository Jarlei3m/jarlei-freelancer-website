import styled from 'styled-components';

export const Container = styled.div`
  height: 560px;
  width: 100%;
  position: relative;

  background-image: url('map.png');
  background-size: cover;
  background-position: center;

  margin-top: 5.5rem;

  ::after {
    content: '';
    top: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;

    background-color: var(--gray-800);
    /* opacity: 0.95; */
  }

  /* opacity: 0.7; */
`;

export const Content = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;

  height: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  h1 {
    font-size: 3rem;
    color: var(--white);
    z-index: 5;
    padding-bottom: 2rem;

    span {
      color: var(--green);
    }
  }
`;
