import Footer from './footer';
import Nav from './Nav';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';


const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page({ preview, children }) {
  return (
    <>
        <Nav />
        <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
