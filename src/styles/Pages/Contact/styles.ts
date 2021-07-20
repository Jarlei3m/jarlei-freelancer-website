import styled from "styled-components";

export const Container = styled.main`
  /* width: 100vw; */
  height: 100vh;

  overflow-x: hidden;

  position: relative;
`;

export const Content = styled.section`
  width: 100%;
  /* max-height: 100%;
  height: calc(100vh - 3.2rem); */

  @media (max-width: 425px) {
    /* max-height: unset;
    height: unset; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
  }
`;
