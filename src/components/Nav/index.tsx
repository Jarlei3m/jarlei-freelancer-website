import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { NavBars, Container, NavMenu } from './styles';

export function Nav() {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const router = useRouter();

  function handleNavMenu() {
    setIsNavMenuOpen(!isNavMenuOpen);
  }

  return (
    <Container>
      <NavBars onClick={handleNavMenu} className={isNavMenuOpen ? 'open' : ''}>
        <div></div>
        <div></div>
        <div></div>
      </NavBars>

      <NavMenu className={isNavMenuOpen ? 'open' : ''}>
        <div className={isNavMenuOpen ? 'open' : ''}>
          <img src='/jarlei_portrait.jpg' alt='Járlei Rodrigues' />
        </div>
        <ul className={isNavMenuOpen ? 'open' : ''}>
          <li className={router.pathname === '/' ? 'current' : ''}>
            <Link href='/'>
              <a onClick={handleNavMenu}>Home</a>
            </Link>
          </li>
          <li className={router.pathname === '/about' ? 'current' : ''}>
            <Link href='/about'>
              <a onClick={handleNavMenu}>About Me</a>
            </Link>
          </li>
          <li className={router.pathname === '/work' ? 'current' : ''}>
            <Link href='/work'>
              <a onClick={handleNavMenu}>My Projects</a>
            </Link>
          </li>
          <li className={router.pathname === '/contact' ? 'current' : ''}>
            <Link href='/contact'>
              <a onClick={handleNavMenu}>How To Reach Me</a>
            </Link>
          </li>
        </ul>
      </NavMenu>
    </Container>
  );
}
