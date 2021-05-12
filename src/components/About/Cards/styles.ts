import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-gap: 1.875rem;
  grid-template-areas: 'job1 job2 job3';
  grid-template-columns: repeat(3, 1fr);
`;

export const Card = styled.div`
  background-color: var(--gray-300);
  padding: 1.5rem;
  border-bottom: 5px solid var(--green);

  cursor: pointer;

  transition: 0.5s;

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
    font-size: 20px;
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
`;
