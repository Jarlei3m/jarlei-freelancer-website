import styled from 'styled-components';

export const InfoContainer = styled.section`
  margin-top: 3.8rem;

  @media (max-width: 425px) {
    margin-top: 8rem;
  }

  @media (max-width: 375px) {
    margin-top: 9rem;
  }
`;

export const InfoContent = styled.div`
  max-width: 90rem;
  padding: 0 4.5rem;
  width: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  gap: 1rem;

  @media (max-width: 425px) {
    padding: 0 2rem;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 375px) {
    display: flex;
    flex-wrap: wrap;
  }

  @media (max-width: 320px) {
    column-gap: 0.7rem;
  }

  div {
    /* margin-top: 3.8rem; */
    color: #ccc;

    h4 {
      font-size: 0.65rem;

      margin-bottom: 1.8rem;
    }

    @media (max-width: 425px) {
      h4 {
        margin-bottom: 1.2rem;
      }
    }

    address {
      font-style: normal;
      font-size: 0.8rem;
      line-height: 2rem;
    }
  }
`;

export const SocialLinks = styled.div`
  @media (max-width: 375px) {
    justify-self: right;
  }

  ul {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    height: 100%;
    gap: 1rem;

    svg {
      font-size: 1.2rem;
      transition: all 0.2s ease-out;
      cursor: pointer;

      &:hover {
        color: var(--green);
      }
    }
  }
`;
