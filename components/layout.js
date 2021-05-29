import Alert from '../components/alert'
import Footer from '../components/footer'
import Nav from './Nav'

export default function Layout({ preview, children }) {
  return (
    <>
      <div className="min-h-screen">
        <Alert preview={preview} />
        <Nav/>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
