import React from 'react';

function Card5() {
  return (
    <div className=' grid grid-cols-1 md:max-w-[95rem] mx-auto relative  '>
      <img
        src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/content-box-4.png'
        alt=''
        className=' hidden  lg:inline-grid mx-auto  lg:w-[65rem]'
      />

      <img
        src='https://influencers.ar-ad.com/wp-content/uploads/2021/08/em-mobile.jpg'
        alt=''
        className='mx-auto w-fit lg:hidden'
      />

      <div className='px-5 lg:px-0 items-center lg:w-[70%]  justify-self-center absolute  flex flex-col xl:flex-row  '>
        <div className='w-[60%] md:w-auto'>
          <img
            src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/escort-img.png'
            alt=''
          />
        </div>

        <div className='lg:py-2 flex-1 space-y-5 text-center lg:text-justify lg:pr-5'>
          <h2 className='text-white text-xl md:text-3xl '>
            Esports Talents and{' '}
            <span className='text-black md:text-black'>
              Advertising Services
            </span>{' '}
          </h2>
          <p className='text-sm text-white md:text-lg tracking-wide md:tracking-normal'>
            Arabia E-Advertising began its career as one of the first talent
            agencies, representing both established and emerging esports-focused
            broadcasting talent. We assist these specialized talents in
            maximizing the value they've created by connecting them with
            hundreds of brand partners who trust us. We can assist you whether
            you are looking to hire an on-air host for an event or need
            representation as a talent
          </p>
          <button className=' text-white  lg:inline-grid px-4 py-2   md:py-4 bg-blue-600    md:px-10  rounded-full md:text-2xl text-base'>
            FIND OUT MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card5;
