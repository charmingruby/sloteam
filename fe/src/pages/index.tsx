import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import Image from 'next/image';
import HeroIllustration from '../assets/images/HeroIllustration.svg';
import PeopleWorkingIllustration from '../assets/images/PeopleWorkingIllustration.svg';

import { HiChevronRight } from 'react-icons/hi';
import { BsCheck } from 'react-icons/bs';

export default function Home() {
  const facilitiesList: string[] = ['Easy use', 'Security', 'Organized', 'Complete', 'Saves time'];

  return (
    <>
      <SEO message='An App for Slothes' />

      <main>
        <div className='flex flex-col flex-1 min-h-screen h-full'>
          <Header />
          <div className='container flex items-center justify-center grow'>
            <div className='grid grid-cols-2'>
              <div>
                <h1 className='text-light-lighten font-bold'>
                  We have the solution for your
                  {' '}
                  <span className='bg-primary-main text-secondary-main px-2 rounded-sm'>
                    team
                  </span>
                </h1>

                <h5 className='text-light-main mt-4'>
                  We can provide to you this resource to help you to manage the flow of developers in your projects.
                </h5>

                <button className='primary-button mt-8'>
                  <span>Acess the Platform</span>
                  <HiChevronRight className='text-secondary-main' />
                </button>
              </div>

              <div className='flex justify-end items-center'>
                <Image src={HeroIllustration} alt='Team Image' className='w-72' />
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-t-secondary-light bg-gradient-to-bl from-secondary-darker to-secondary-dark'>
          <div className='container py-16 grid grid-cols-2'>
            <div className='flex'>
              <Image className='w-[400px]' src={PeopleWorkingIllustration} alt='People Working Illustration' />
            </div>
            <div className='flex flex-col items-start'>
              <small className='font-bold text-primary-main uppercase'>
                Facilities
              </small>
              <h2 className='font-semibold'>Built for daily basis</h2>
              <p className='mt-1 text-light-dark text-xl'>
                Application built thinking on solutions of the daily developer&apos;s problems.
                The advantages we can give for your Company:
              </p>
              <div className='flex flex-col mt-6 gap-2'>
                {
                  facilitiesList.map((facility, index) => (
                    <div className='flex items-center gap-2' key={index}>
                      <BsCheck className='text-success-main text-3xl' />
                      <span className='text-light-dark text-lg'>{facility}</span>
                    </div>
                  ))
                }
              </div>
              <button className='primary-button mt-6'>
                Guarantee access
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
