import Alert from './alert';
import Footer from './footer';
import Nav from './Nav';

export default function Page({ preview, children }) {
  return (
    <>
      <div className="min-h-screen">
        <Alert preview={preview} />
        <Nav />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
