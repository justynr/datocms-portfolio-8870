import Footer from './footer';
import Nav from './Nav';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 @font-face {
    font-family: 'roboto-mono';
    src: url('https://fonts.googleapis.com/css2?family=Roboto+Mono');
    /* format:('woff2'); */
    font-weight: normal;
    font-style: normal;
    color: var(--fontBody)
  }
  html {
    --darkTheme:#210761;
    --midDarkTheme:#3C00D5;
    --middleTheme: #7A27F4;
    --midLightTheme: #DE12F6;
    --lightTheme:#5DD6F4;
    --fontBody: #F6AEF9;
    --red: #ff0000;
    --lightRed: pink;
    --orange: #e2b04a;
    --black: #393939;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey);
    --offWhite:(--#ededed);
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
    font-size: 10px;
    background-color: var(--darkTheme);
    background-image: url("/static/background.svg");
    background-repeat: no-repeat;
    background-size:cover;
    color: var(--fontBody);
}
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'roboto mono', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--fontBody);
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: var(--fontBody);
  }
  a:hover {
    text-decoration: underline;
    color: var(--fontBody);
  }

  button {
    font-family: 'roboto mono', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  };
`
const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page({ preview, children }) {
  return (
    <>
    <GlobalStyles/>
        <Nav />
        <InnerStyles>{children}</InnerStyles>
      {/* <Footer /> */}
    </>
  );
}
