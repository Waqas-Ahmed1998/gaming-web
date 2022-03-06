import React from 'react';

function Campaign() {
  return (
    <div className='relative'>
      <div className='hidden absolute bottom-0 -right-[30%] lg:inline-grid h-[70%]  campaign-line  bg-cover w-full  bg-no-repeat bg-center '></div>
      <div className='hidden lg:inline-grid  absolute h-80 w-80 -left-36 z-10  bg-arrow bg-no-repeat bg-center '></div>
      <div className='mt-10 grid grid-cols-1 md:max-w-[95rem] mx-auto relative px-5 py-10'>
        <div className=' mx-auto w-[90%] flex flex-col-reverse lg:flex-row lg:p-14 text-center lg:text-justify'>
          <div className='p-5 flex-1 space-y-5'>
            <h3 className='text-xl md:text-[35px] font-semibold'>
              Start a campaign with us!
            </h3>
            <p className='note'>
              Simply write us a message to tell us about your upcoming project!
              Our salesperson will contact you as soon as possible and link you
              to one of our committed specialists in order to experience what
              influencer marketing can be like when you work with the finest!
            </p>
            <button className=' text-white  lg:inline-grid px-4 py-2   md:py-4 bg-[#FEA366]    md:w-60  rounded-full md:text-2xl text-base'>
              REACH OUT
            </button>
          </div>
          <div className='flex-1 '>
            <img
              src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/camgaign-img.png'
              alt=''
              className='lg:w-[80%] mx-auto'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Campaign;
