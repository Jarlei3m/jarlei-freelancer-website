import styled from 'styled-components';

export const ProjectContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  margin: 3.1rem 0;
`;

export const Card = styled.div`
  position: relative;

  overflow: hidden;

  &:hover {
    div {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
    }
  }

  div {
    position: absolute;
    right: 3px;
    top: 3px;
    z-index: 15;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    transition: all 0.2s ease-out;
    transform: translateX(100%);
    background: rgba(0, 0, 0, 0.7);

    visibility: hidden;
    opacity: 0;

    span {
      width: 2rem;
      height: 2rem;
      /* border: 1px solid #000; */

      display: flex;
      align-items: center;
      justify-content: center;
      /* background: rgba(0, 0, 0, 0.1); */

      transition: all 0.2s ease-out;

      &:hover {
        svg {
          color: var(--green);
        }
      }

      svg {
        transition: all 0.2s ease-out;

        font-size: 1.3rem;
        color: var(--white);

        &.active {
          color: var(--green);
        }
      }
    }
  }

  img {
    display: block;
    width: 100%;
    height: 17.5rem;

    border: 3px solid #ccc;
    transition: all 0.2s ease-out;

    object-fit: cover;
    object-position: center;

    &:hover {
      border-color: var(--green);
    }

    &.mobile {
      object-fit: scale-down;
      background: #ccc;
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    width: 100%;
    margin-top: 0.5rem;

    a {
      /* display: block; */
      display: flex;
      align-items: center;
      justify-content: left;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      font-weight: 600;

      transition: all 0.2s ease-out;
      /* margin-bottom: 0.3rem; */
    }

    a:nth-child(1) {
      background: rgb(189, 188, 188);
      color: #333;

      &:hover {
        background-color: var(--green);
        opacity: 0.8;
      }
    }

    a:nth-child(2) {
      background: #000;
      color: var(--white);

      &:hover {
        background-color: var(--green);
        opacity: 0.7;
      }
    }
  }
`;
