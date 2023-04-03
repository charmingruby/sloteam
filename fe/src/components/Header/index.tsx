import Image from 'next/image';
import Link from 'next/link';
import Logo from './../../assets/images/logos/logo-w-description.svg';

import { FaUser } from 'react-icons/fa';

interface HeaderProps {
  logged?: boolean
}

export function Header({ logged = false }: HeaderProps) {
  const unauthorizedNavigationLinks: String[] = [
    'Home', 'Projects', 'Developers', 'Technologies', 'Profile'
  ];

  const navigationLinks: String[] = ['Home', 'About', 'Projects', 'Social'];

  return (
    <header className="flex items-center h-20 bg-secondary-dark border-b border-b-secondary-light">
      <div className="w-full h-20 max-w-7xl my-0 mx-auto flex items-center justify-between">
        <Image src={Logo} alt="Sloteam Logo" className="w-36" />
        <nav className="flex gap-6 text-lg">
          {
            !logged
              ?
              navigationLinks.map((navigationLink, index) => (
                <Link href={`/${navigationLink.toLocaleLowerCase}`} className="group flex items-center border-b border-b-secondary-light hover:border-b-primary-main h-20 transition-colors" key={index}>
                  <span className="text-light-darker group-hover:text-light-light transition-colors">{navigationLink}</span>
                </Link>
              ))
              :
              unauthorizedNavigationLinks.map((navigationLink, index) => (
                <Link href={`/${navigationLink.toLocaleLowerCase}`} className="group flex items-center border-b border-b-secondary-light hover:border-b-primary-main h-20 transition-colors" key={index}>
                  <span className="text-light-darker group-hover:text-light-light transition-colors">{navigationLink}</span>
                </Link>
              ))
          }
        </nav>
        <div className="flex">
          <Link href='/' className="flex items-center">
            <FaUser className="text-primary-main text-sm" />
            <span className="ml-1 uppercase font-semibold text-xs">Sign In</span>
          </Link>
          <Link href='/' className="hover:bg-primary-main border border-primary-main py-1 px-6 rounded-md transition-colors ml-4">
            <span className="uppercase font-semibold text-xs">Sign Up</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
