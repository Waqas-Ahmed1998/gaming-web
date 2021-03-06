import React from 'react';

function Acard1() {
  return (
    <div className='flex flex-col xl:flex-row items-center p-5 md:p-0'>
      <div className=' flex-1 xl:p-10 '>
        <h3 className='font-bold md:text-xl text-[#365E77] xl:text-4xl'>
          OUR STORY...
        </h3>
        <p className='mt-5 text-sm md:text-xl font-semibold text-[#365E77]'>
          Arabia E-Advertising was formed in 2006 with the goal of changing the
          game of marketing tactics and the way media channels are used.{' '}
        </p>
        <p className='popins mt-10 text-sm md:text-lg text-gray-600 '>
          Our staff is a specialist in reaching the correct audience and
          providing the highest ROI. We assist you in finding the proper
          influencers, organizing events, managing brand promotions, and
          executing digital advertising campaigns.
        </p>
      </div>
      <div className='flex-1'>
        <img
          src='https://influencers.ar-ad.com/wp-content/uploads/2021/08/dubai-agency-image.png'
          alt=''
          className=''
        />
      </div>
    </div>
  );
}

export default Acard1;
