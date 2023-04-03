import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../assets/images/logos/logo-full.svg';
import { socials } from '@/utils/socials';
import { IoIosArrowUp } from 'react-icons/io';

export function Footer() {
  const isBrowser = () => typeof window !== 'undefined';

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer >

      <div className="border-t border-t-secondary-light py-8">
        <div className='container text-sm'>
          <Image src={Logo} alt='Sloteam Logo' />
          <div className='mt-6'>
            <span className='block mb-2'>©Copyright 2023, Gustavo Dias</span>
            {' '}
            <span> Built with
              {' '}
              <Link href={'https://nextjs.org/'}>
                <span className='text-primary-main hover:underline font-bold'>
                  Next
                </span>
              </Link>
              {' '}
              and
              {' '}
              <Link href={'https://tailwindcss.com/'}>
                <span className='text-primary-main hover:underline font-bold'>
                  TailwindCSS
                </span>
              </Link>
              .
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-t-secondary-light py-8">
        <div className="container text-light-darker">
          <div className='flex items-center justify-between w-full'>
            <div className='flex gap-4 '>
              {
                socials.map((social, index) => (
                  <Link href={social.link} key={index}>
                    <div className='flex justify-center items-center text-primary-main hover:text-secondary-main bg-secondary-main hover:bg-primary-main h-10 w-10 rounded-md transition-colors shadow-lg'>
                      {social.icon}
                    </div>
                  </Link>
                ))
              }
            </div>
            <div onClick={scrollToTop} className='flex justify-center items-center text-primary-main hover:text-secondary-main bg-secondary-main hover:bg-primary-main h-10 w-10 rounded-md transition-colors cursor-pointer shadow-lg'>
              <IoIosArrowUp size='1.2rem' />
            </div>
          </div>
        </div>
      </div>


    </footer >
  );
}
