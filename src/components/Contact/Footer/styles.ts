import styled from 'styled-components';

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100vw;
  height: 3.2rem;

  background: var(--gray-600);

  display: flex;
  align-items: center;
  justify-content: center;

  border-top: 0.125rem solid var(--green);

  @media (max-width: 425px) {
    position: absolute;
    bottom: -2.2rem;
  }

  span {
    font-size: 0.8rem;
    color: var(--white);
  }
`;
