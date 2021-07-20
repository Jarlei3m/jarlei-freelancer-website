import styled from "styled-components";

export const Container = styled.main`
  /* width: 100vw; */
  overflow-x: hidden;
  height: 100%;
  position: relative;
`;
export const Content = styled.section`
  padding: 4rem;
  /* margin-bottom: 8rem; */
  width: 100%;
  height: 100%;

  @media (max-width: 425px) {
    padding: 4rem 2rem;
  }
`;
