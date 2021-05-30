import Link from 'next/link';
import NavStyles from './styles/NavStyles';

export default function Nav() {
  return (
    <NavStyles>
      <Link href="/">Home</Link>
      <Link href="/work">Work</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/services">Services</Link>
      <Link href="/about">About</Link>
      <Link href="/resume">Resume</Link>
    </NavStyles>
  );
}
