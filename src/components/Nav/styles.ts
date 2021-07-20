import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 100%;
`;

export const NavBars = styled.nav`
  position: fixed;
  right: 2.1rem;
  top: 2.1rem;

  z-index: 15;

  cursor: pointer;
  transition: all 0.3s ease-out;

  div {
    width: 1.75rem;
    height: 0.1875rem;

    margin: 0 0 0.3125rem 0;
    background: var(--white);
    transition: all 0.3s ease-out;
  }

  &.open {
    transform: rotate(180deg);

    div:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    div:nth-child(2) {
      opacity: 0;
    }

    div:nth-child(3) {
      transform: rotate(-45deg) translate(6px, -6px);
      }
    }
  }

  @media (max-width: 1080px) {
    &.open {
      transform: rotate(180deg);

      div:nth-child(1) {
        transform: rotate(45deg) translate(4px, 6px);
      }

      div:nth-child(2) {
        opacity: 0;
      }

      div:nth-child(3) {
        transform: rotate(-45deg) translate(4px, -6px);
      }
    }
  }

  @media (max-width: 425px) {
    &.open {
      transform: rotate(180deg);

      div:nth-child(1) {
        transform: rotate(45deg) translate(4px, 6px);
      }

      div:nth-child(2) {
        opacity: 0;
      }

      div:nth-child(3) {
        transform: rotate(-45deg) translate(3px, -5px);
      }
    }
  }
`;

export const NavMenu = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  visibility: hidden;

  z-index: 10;

  &.open {
    visibility: visible;
  }

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  div {
    background: var(--gray-400);

    transform: translate3d(0, 100%, 0);
    transition: all 0.5s ease-out;

    @media (max-width: 425px) {
      transform: translate3d(-100%, 0, 0);
    }

    img {
      width: 15rem;
      height: 15rem;

      object-fit: cover;
      object-position: center;
      /* background-position: -25px -50px; */

      border-radius: 50%;
      border: solid 3px var(--green);
    }

    &.open {
      transform: translate3d(0, 0, 0);
    }
  }

  div,
  ul {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;

    float: left;
    width: 50%;
    height: 100vh;

    overflow: hidden;
  }

  @media (max-width: 425px) {
    div,
    ul {
      width: 100vw;
    }

    div {
      height: 40%;
    }
    ul {
      height: 60%;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    background: var(--gray-800);

    transform: translate3d(0, -100%, 0);
    transition: all 0.5s ease-out;

    @media (max-width: 425px) {
      transform: translate3d(100%, 0, 0);
    }

    &.open {
      transform: translate3d(0, 0, 0);

      li {
        transform: translate3d(0, 0, 0);
      }

      li:nth-child(1) {
        transition-delay: 0.1s;
      }

      li:nth-child(2) {
        transition-delay: 0.3s;
      }

      li:nth-child(3) {
        transition-delay: 0.4s;
      }

      li:nth-child(4) {
        transition-delay: 0.5s;
      }
    }

    li {
      transform: translate3d(37.5rem, 0, 0);
      transition: color 0.2s ease-out;
      transition: transform 0.5s ease-out;

      font-size: 1.875rem;
      font-weight: 300;
      color: var(--white);

      a {
        text-transform: uppercase;

        display: inline-block;
        position: relative;
        padding: 1rem 0;

        transition: color 0.2s ease-out;
      }

      &.current {
        color: var(--green);
      }

      &:hover {
        color: var(--green);
      }
    }
  }
`;
