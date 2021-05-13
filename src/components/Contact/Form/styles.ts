import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  width: 26.25rem;
  height: 41.25rem;
  background: var(--white);
  /* border: 1px solid #000; */
  border-radius: 12px;

  padding: 2rem 3rem 3rem;
  margin-bottom: -3.125rem;

  z-index: 5;

  @media (max-width: 768px) {
    width: 24.25rem;
    padding: 2rem;
  }

  @media (max-width: 320px) {
    width: 20.25rem;
    padding: 1.5rem;
  }

  h3 {
    color: var(--green);
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 1px;

    margin-bottom: 0.0625rem;
  }

  div {
    position: relative;
    width: 100%;
    height: 3rem;

    input,
    textarea {
      /* border: 1px solid #ccc; */
      width: 100%;
      height: 100%;

      color: var(--gray-600);

      font-size: 1rem;
      font-weight: 500;

      border: none;
      border-bottom: 0.125rem solid #ccc;
      outline: none;

      &::placeholder {
        transition: color 0.2s ease-out;
        color: transparent;
      }

      padding: 0.3rem;

      &:focus,
      &:valid {
        &::placeholder {
          color: var(--gray-300);
        }
      }

      &:focus + span,
      &:valid + span {
        transform: translateY(-160%);
        font-size: 0.875rem;
        color: var(--green);
      }
    }

    span {
      transition: all 0.3s ease;

      position: absolute;
      left: 0.3rem;
      bottom: 0.6rem;
      color: var(--gray-600);

      font-size: 1rem;
      font-weight: 500;
    }

    textarea {
      resize: none;

      &:focus + span,
      &:valid + span {
        transform: translateY(-190%);
      }
    }

    &:last-child {
      text-align: right;

      button {
        justify-content: center;

        border: none;
        background: var(--gray-900);
        border-radius: 0.5rem;

        height: 3rem;
        width: 12rem;

        margin-right: -4rem;

        @media (max-width: 768px) {
          margin-right: -3rem;
        }

        @media (max-width: 320px) {
          margin-right: -2.5rem;
        }

        color: var(--white);
        font-size: 0.8rem;
        font-weight: 500;

        padding: 0 1rem;

        text-align: left;

        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

        transition: all 0.2s ease-out;

        &:hover {
          color: var(--green);
        }

        &:disabled {
          cursor: not-allowed;
        }
      }
    }
  }
`;
