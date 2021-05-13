import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

:root {
  --white: #fff;
  --background: #f2f3f5;
  /* --gray-line: #dcdde0;
  --text: #666666; */
  /* --text-highlight: #b3b9ff; */
  /* --title: #2e384d; */
  --red: #e83f5b;
  --green: #4cd62b;
  /* --blue: #5965e0;
  --blue-dark: #4953b8;
  --blue-twitter: #2aa9e0; */
  --orange: #ff7300;
  --orang-shadow: rgb(237, 182, 146);

  --gray-300: rgba(97, 97, 97, 0.5);
  --gray-400: rgba(73, 73, 73, 0.5);
  --gray-500: rgba(73, 73, 73, 0.8);
  --gray-600: rgb(68, 68, 68);
  --gray-800: rgba(31, 31, 31, 0.7);
  --gray-900: rgb(32, 32, 32);
}

body {
  background-color: var(--gray-900);
  color: var(--white);

  height: 100%;
  margin: 0;
}
/* 
@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

@media (max-width: 620px) {
  html {
    font-size: 81.25%;
  }
} */


@media (max-width: 1180px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 1080px) {
  html {
    font-size: 87.5%;
  }
}

@media (max-width: 620px) {
  html {
    font-size: 81.25%;
  }
}

body,
input,
textarea,
button {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

h1,
h2,
h3 {
  margin: 0;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

.Toastify__toast-container {
    right: 0;
    left: unset;
    width: 18vw;

    @media(max-width: 425px) {
      width: 50vw;
    }
  }


  .Toastify__toast {
    background-color: var(--green);
    min-height: 2.8125rem;

     @media(max-width: 425px) {
      margin: 1rem .5rem;

      border-radius: 4px;
    }
  }

`;
