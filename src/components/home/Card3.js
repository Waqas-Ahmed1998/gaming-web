import React from 'react';

function Card3() {
  return (
    <div className='  mt-10 lg:mt-0 relative mx-auto bg-contain bg-no-repeat  xl:inline-grid lg:w-[75%]   '>
      <img
        src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/content-box-3.png'
        alt=''
        className='hidden lg:inline-grid absolute top-0 md:w-[100%] '
      />
      <img
        src='https://influencers.ar-ad.com/wp-content/uploads/2021/08/new-dm-m.jpg'
        alt=''
        className='lg:hidden w-full h-[100%] md:h-fit'
      />
      <div className=' hidden lg:inline-grid absolute -top-20 -right-20'>
        <img
          className='hidden lg:inline-grid animate-spin-slow '
          src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/orange-square.png'
          alt=''
        />
      </div>
      <div className=' flex flex-col text-center lg:flex-row gap-3 absolute top-0 '>
        <div className='flex-1 mx-auto'>
          <img
            src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/digital-img.png'
            alt=''
            className='hidden lg:inline-grid md:w-auto lg:w-auto'
          />
        </div>
        <div className='flex-1 lg:pt-16 space-y-2 lg:space-y-10 px-5'>
          <h2 className='text-xl md:text-2xl lg:text-4xl lg:text-[#167EE0] font-semibold'>
            Digital Influence{' '}
            <span className='lg:text-black text-[#167EE0]'>
              Campaign Strategies and Management
            </span>
          </h2>
          <p className='text-base md:text-lg'>
            We use top influencers to help brands engage and activate audiences
            all around the world, with a specialization on the Arabic speaking
            nations of the Middle East and North Africa. We select and
            tailor-made contracts for the profiles most closely related to your
            objectives, your target and the creative concept that we have
            devised to impact a much larger audience.
          </p>
          <button className=' text-white text-base px-6 md:inline-grid   py-4 bg-[#FEA366]   md:w-60  rounded-full md:text-2xl'>
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card3;
