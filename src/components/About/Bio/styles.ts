import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-gap: 1.875rem;
  grid-template-areas: 'bioimage bioinfo bioinfo';
  grid-template-columns: repeat(3, 1fr);
  margin: 2.2rem 0;

  @media (max-width: 1024px) {
    margin: 1.5rem 0;
  }

  @media (max-width: 768px) {
    margin: 1.2rem 0;
  }

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    grid-gap: 1.2rem;
  }
`;

export const ImageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    grid-area: bioimage;
    height: 15.625rem;
    width: 15.625rem;
    margin: auto;
    border-radius: 50%;
    border: 3px solid var(--green);

    object-fit: cover;
    object-position: 0px -48px;
  }

  @media (max-width: 768px) {
    img {
      height: 14.8rem;
      width: 14.8rem;
    }
  }

  @media (max-width: 425px) {
    img {
      height: 12rem;
      width: 12rem;

      margin-top: 0.5rem;
    }
  }
`;

export const BioContent = styled.div`
  grid-area: bioinfo;

  h3 {
    font-weight: 600;
    font-size: 1.5rem;
    color: var(--green);
  }

  p {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 1rem 0;
    text-align: justify;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.3rem;
    }

    p {
      font-size: 1rem;
      margin: 0.8rem 0;
    }
  }
`;
