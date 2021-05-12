import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-gap: 1.875rem;
  grid-template-areas: 'bioimage bioinfo bioinfo';
  grid-template-columns: repeat(3, 1fr);
  margin: 2.2rem 0;
`;

export const ImageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    grid-area: bioimage;
    height: 250px;
    width: 250px;
    margin: auto;
    border-radius: 50%;
    border: 3px solid var(--green);

    object-fit: cover;
    object-position: 0px -48px;
  }
`;

export const BioContent = styled.div`
  grid-area: bioinfo;

  h3 {
    font-weight: 600;
    font-size: 24px;
    color: var(--green);
  }

  p {
    font-size: 20px;
    font-weight: 600;
    margin: 1rem 0;
    text-align: justify;
    line-height: 1.5;
  }
`;
