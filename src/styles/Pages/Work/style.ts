import styled from "styled-components";

export const Container = styled.main`
  height: 100%;
  overflow-x: hidden;

  position: relative;
`;
export const Content = styled.section`
  padding: 4rem;
  /* margin-bottom: 8rem; */
  max-width: 112rem;
  margin: 0 auto;
  width: 100%;
  height: 100%;

  @media (max-width: 425px) {
    padding: 4rem 2rem;
  }
`;
