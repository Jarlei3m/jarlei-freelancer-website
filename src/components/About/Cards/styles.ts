import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-gap: 1.875rem;
  grid-template-areas: 'job1 job2 job3';
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 425px) {
    grid-template-areas: 'job1' 'job2' 'job3';
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1.5rem;
  }
`;

export const Card = styled.div`
  background-color: var(--gray-300);
  padding: 1.5rem;
  border-bottom: 0.3125px solid var(--green);

  cursor: pointer;

  transition: 0.5s;

  @media (max-width: 1024px) {
    padding: 1.2rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }

  &:hover {
    transform: translate(0, -6px);
    box-shadow: 2px 2px 4px rgb(0, 0, 0, 0.1);
  }

  &.one {
    grid-area: job1;
  }

  &.two {
    grid-area: job2;
  }

  &.three {
    grid-area: job3;
  }

  h3 {
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--green);
    line-height: 1.5;
  }

  h6 {
    margin: 1.5rem 0;
    line-height: 1.5;
  }

  p {
    margin: 1rem 0;
    line-height: 1.5;
  }

  @media (max-width: 731px) {
    h6 {
      margin: 1rem 0;
    }

    p {
      margin: 0.5rem 0;
    }
  }
`;
