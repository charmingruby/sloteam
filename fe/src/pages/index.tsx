import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import HeroIllustration from '../assets/images/undraw_team_re_0bfe.svg';

export default function Home() {
  return (
    <>
      <div className='flex flex-col flex-1 min-h-screen h-full'>
        <SEO isIndex />
        <Header />
        <main className='container flex items-center justify-center grow'>
          <div className='grid grid-cols-2'>
            <div>
              <Image src={HeroIllustration} alt='Team Image' className='w-72' />
            </div>
            <div>
              <h1 className='text-light-lighten font-bold'>We have the solution for your
                {' '}
                <span className='bg-primary-main text-secondary-main px-2 rounded-sm'>
                  team
                </span>
              </h1>
              <h3 className='text-light-main mt-4'>wfekwejfwjfiowjfiowe</h3>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
